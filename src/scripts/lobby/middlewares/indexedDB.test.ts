/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import * as FDB from 'fake-indexeddb'
import * as FDBCursor from 'fake-indexeddb/lib/FDBCursor'
import * as FDBCursorWithValue from 'fake-indexeddb/lib/FDBCursorWithValue'
import * as FDBDatabase from 'fake-indexeddb/lib/FDBDatabase'
import * as FDBFactory from 'fake-indexeddb/lib/FDBFactory'
import * as FDBIndex from 'fake-indexeddb/lib/FDBIndex'
import * as FDBKeyRange from 'fake-indexeddb/lib/FDBKeyRange'
import * as FDBObjectStore from 'fake-indexeddb/lib/FDBObjectStore'
import * as FDBOpenDBRequest from 'fake-indexeddb/lib/FDBOpenDBRequest'
import * as FDBRequest from 'fake-indexeddb/lib/FDBRequest'
import * as FDBTransaction from 'fake-indexeddb/lib/FDBTransaction'
import * as FDBVersionChangeEvent from 'fake-indexeddb/lib/FDBVersionChangeEvent'
import {Key, Village, WhatToDoNextInLobby, connectDB, deleteValue, getValue, updateValue} from '../../indexeddb'
import {SocketMessage, SocketSend, Transition} from '../actions'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {getCastFromNumberOfPlayers} from '../util'
import middleware from './indexedDB'
import {waitingPage} from '../reducers/fakeServer'

(window as Record<string, unknown>).indexedDB = FDB;
(global as Record<string, unknown>).IDBCursor = FDBCursor;
(global as Record<string, unknown>).IDBCursorWithValue = FDBCursorWithValue;
(global as Record<string, unknown>).IDBDatabase = FDBDatabase;
(global as Record<string, unknown>).IDBFactory = FDBFactory;
(global as Record<string, unknown>).IDBIndex = FDBIndex;
(global as Record<string, unknown>).IDBKeyRange = FDBKeyRange;
(global as Record<string, unknown>).IDBObjectStore = FDBObjectStore;
(global as Record<string, unknown>).IDBOpenDBRequest = FDBOpenDBRequest;
(global as Record<string, unknown>).IDBRequest = FDBRequest;
(global as Record<string, unknown>).IDBTransaction = FDBTransaction;
(global as Record<string, unknown>).IDBVersionChangeEvent = FDBVersionChangeEvent

const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
const CLIENT2SERVER = `${BASE_URI}/client2server`
const SERVER2CLIENT = `${BASE_URI}/server2client`

const getAllValue = async () => {
  const db = await connectDB()
  const transaction = db.transaction('licosDB', 'readwrite')
  const objectStore = transaction.objectStore('licosDB')

  return Promise.all([
    getValue<lobby.Payload$buildVillage>(objectStore, Key.buildVillagePayload),
    getValue<boolean>(objectStore, Key.isHost),
    getValue<lobby.Language>(objectStore, Key.lang),
    getValue<number>(objectStore, Key.nextGameVillageId),
    getValue<Village>(objectStore, Key.village),
    getValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby)
  ])
}

const deleteAllValue = async () => {
  const db = await connectDB()
  const transaction = db.transaction('licosDB', 'readwrite')
  const objectStore = transaction.objectStore('licosDB')

  return Promise.all([
    deleteValue(objectStore, Key.buildVillagePayload),
    deleteValue(objectStore, Key.isHost),
    deleteValue(objectStore, Key.lang),
    deleteValue(objectStore, Key.nextGameVillageId),
    deleteValue(objectStore, Key.village),
    deleteValue(objectStore, Key.whatToDoNextInLobby)
  ])
}

beforeEach(() => deleteAllValue())
describe('indexedDB/INIT', () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: {type: ActionTypes.indexedDB.INIT} = {
    type: ActionTypes.indexedDB.INIT
  }

  test('default', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    actionHandler(action)

    const [
      buildVillagePayload,
      isHost,
      lang,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(lang).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
  test('whatToDoNextInLobby: nothing', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')

    await updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.nothing)
    actionHandler(action)

    const [
      buildVillagePayload,
      isHost,
      lang,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(lang).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
  test('whatToDoNextInLobby: leaveWaitingPage', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const village = {
      lobbyType: lobby.Lobby.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }
    const payload: lobby.Payload$leaveWaitingPage = {
      lobby: village.lobbyType,
      token: village.token,
      type: lobby.PayloadType.leaveWaitingPage,
      villageId: village.villageId
    }

    await Promise.all([
      updateValue<Village>(objectStore, Key.village, village),
      updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.leaveWaitingPage)
    ])
    await actionHandler(action)
    const [
      buildVillagePayload,
      isHost,
      lang,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(lang).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.socket.SEND
    })
  })
  test('whatToDoNextInLobby: selectNextVillage', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const village = {
      lobbyType: lobby.Lobby.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }

    await Promise.all([
      updateValue<number>(objectStore, Key.nextGameVillageId, 4),
      updateValue<Village>(objectStore, Key.village, village),
      updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.selectNextVillage)
    ])
    await actionHandler(action)
    const [
      buildVillagePayload,
      isHost,
      lang,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(lang).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toEqual(village)
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      lobby: village.lobbyType,
      type: ActionTypes.global.CHANGE_LOBBY
    })
    expect(dispatch).toHaveBeenCalledWith({
      id: 4,
      type: ActionTypes.global.SELECT_VILLAGE
    })
  })
  test('whatToDoNextInLobby: selectVillage', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const village = {
      lobbyType: lobby.Lobby.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }

    await Promise.all([
      updateValue<Village>(objectStore, Key.village, village),
      updateValue<WhatToDoNextInLobby>(objectStore, Key.whatToDoNextInLobby, WhatToDoNextInLobby.selectVillage)
    ])
    actionHandler(action)
    const [
      buildVillagePayload,
      isHost,
      lang,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(lang).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toEqual(village)
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      lobby: village.lobbyType,
      type: ActionTypes.global.CHANGE_LOBBY
    })
    expect(dispatch).toHaveBeenCalledWith({
      id: village.villageId,
      type: ActionTypes.global.SELECT_VILLAGE
    })
  })
})
test('LEAVE_WAITING_PAGE', async () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.LEAVE_WAITING_PAGE
  }
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const db = await connectDB()
  const transaction = db.transaction('licosDB', 'readwrite')
  const objectStore = transaction.objectStore('licosDB')
  const village = {
    lobbyType: lobby.Lobby.human,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
    villageId: 3
  }

  await updateValue<Village>(objectStore, Key.village, village)
  actionHandler(action)
  const [
    buildVillagePayload,
    isHost,
    lang,
    nextGameVillageId,
    villageInfo,
    whatToDoNextInLobby
  ] = await getAllValue()

  expect(buildVillagePayload).toBeUndefined()
  expect(isHost).toBeUndefined()
  expect(lang).toBeUndefined()
  expect(nextGameVillageId).toBeUndefined()
  expect(villageInfo).toBeUndefined()
  expect(whatToDoNextInLobby).toBeUndefined()
})
describe('socket/MESSAGE', () => {
  describe('played', () => {
    const store = fakeStore()
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: lobby.Payload = {
      lang: lobby.Language.en,
      type: lobby.PayloadType.played
    }
    const action: SocketMessage = {
      payload,
      type: ActionTypes.socket.MESSAGE
    }
    const dispatch = jest.fn()

    store.dispatch = dispatch
    test('validate the JSON', async () => {
      expect.hasAssertions()
      const ajv = new Ajv()
      const schema = await fetch(`${SERVER2CLIENT}/played.json`)
        .then(res => res.json())
      const validate = ajv.validate(schema, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', async () => {
      actionHandler(action)
      const [
        buildVillagePayload,
        isHost,
        lang,
        nextGameVillageId,
        villageInfo,
        whatToDoNextInLobby
      ] = await getAllValue()

      expect(buildVillagePayload).toBeUndefined()
      expect(isHost).toBeUndefined()
      expect(lang).toBe(payload.lang)
      expect(nextGameVillageId).toBeUndefined()
      expect(villageInfo).toBeUndefined()
      expect(whatToDoNextInLobby).toBeUndefined()
      expect(dispatch).toHaveBeenCalled()
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.global.SHOW_VILLAGE
      })
    })
  })
  describe('waitingPage', () => {
    const avatarToken = {
      humanPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      onymousAudience: '3F2504E0-4F89-11D3-9A0C-0305E82C3311',
      robotPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
    }
    const store = fakeStore({
      token: {
        'human player': avatarToken.humanPlayer,
        'lobby': lobby.Lobby.human,
        'onymous audience': avatarToken.onymousAudience,
        'robot player': avatarToken.robotPlayer
      }
    })
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const dispatch = jest.fn()

    store.dispatch = dispatch
    describe('isHost: true', () => {
      const payload = {
        ... waitingPage,
        players: [
          {
            avatarImage: '/assets/images/avatar/default/user.png',
            isAnonymous: true,
            isHost: true,
            isMe: true,
            name: 'Anonymous',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
          },
          {
            avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
            isAnonymous: true,
            isHost: false,
            isMe: false,
            name: 'Cathy',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
          },
          {
            avatarImage: '/assets/images/avatar/default/user.png',
            isAnonymous: true,
            isHost: false,
            isMe: false,
            name: 'Anonymous',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
          },
          {
            avatarImage: '/assets/images/avatar/default/user.png',
            isAnonymous: true,
            isHost: false,
            isMe: false,
            name: 'Anonymous',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
          },
          {
            avatarImage: '/assets/images/avatar/default/user.png',
            isAnonymous: true,
            isHost: false,
            isMe: false,
            name: 'Anonymous',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
          },
          {
            avatarImage: '/assets/images/avatar/default/user.png',
            isAnonymous: true,
            isHost: false,
            isMe: false,
            name: 'Anonymous',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
          },
          {
            avatarImage: '/assets/images/avatar/default/user.png',
            isAnonymous: true,
            isHost: false,
            isMe: false,
            name: 'Anonymous',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
          },
          {
            avatarImage: '/assets/images/avatar/default/user.png',
            isAnonymous: true,
            isHost: false,
            isMe: false,
            name: 'Anonymous',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
          }
        ]
      }
      const action: SocketMessage = {
        payload,
        type: ActionTypes.socket.MESSAGE
      }

      test('validate the JSON', async () => {
        expect.hasAssertions()
        const ajv = new Ajv()
        const schema = await fetch(`${SERVER2CLIENT}/waitingPage.json`)
          .then(res => res.json())
        const validate = ajv.validate(schema, payload)

        if (!validate) {
          console.error(ajv.errors)
        }
        expect(validate).toBe(true)
      })
      test('dispatch correctly', async () => {
        actionHandler(action)
        const [
          buildVillagePayload,
          isHost,
          lang,
          nextGameVillageId,
          villageInfo,
          whatToDoNextInLobby
        ] = await getAllValue()

        expect(buildVillagePayload).toBeUndefined()
        expect(isHost).toBe(true)
        expect(lang).toBeUndefined()
        expect(nextGameVillageId).toBeUndefined()
        expect(villageInfo).toEqual({
          lobbyType: lobby.Lobby.human,
          token: avatarToken.humanPlayer,
          villageId: 1
        })
        expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectVillage)
      })
    })
    describe('isHost: false', () => {
      const payload = waitingPage
      const action: SocketMessage = {
        payload,
        type: ActionTypes.socket.MESSAGE
      }

      test('validate the JSON', async () => {
        expect.hasAssertions()
        const ajv = new Ajv()
        const schema = await fetch(`${SERVER2CLIENT}/waitingPage.json`)
          .then(res => res.json())
        const validate = ajv.validate(schema, payload)

        if (!validate) {
          console.error(ajv.errors)
        }
        expect(validate).toBe(true)
      })
      test('dispatch correctly', async () => {
        actionHandler(action)
        const [
          buildVillagePayload,
          isHost,
          lang,
          nextGameVillageId,
          villageInfo,
          whatToDoNextInLobby
        ] = await getAllValue()

        expect(buildVillagePayload).toBeUndefined()
        expect(isHost).toBe(false)
        expect(lang).toBeUndefined()
        expect(nextGameVillageId).toBeUndefined()
        expect(villageInfo).toEqual({
          lobbyType: lobby.Lobby.human,
          token: avatarToken.humanPlayer,
          villageId: 1
        })
        expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectVillage)
      })
    })
  })
})
describe('socket/SEND', () => {
  describe('buildVillage', () => {
    const avatarToken = {
      humanPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      onymousAudience: '3F2504E0-4F89-11D3-9A0C-0305E82C3311',
      robotPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
    }
    const store = fakeStore()
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: lobby.Payload = {
      avatar: lobby.Avatar.random,
      comment: '',
      hostPlayer: {
        isAnonymous: true,
        isHuman: true,
        name: 'Anonymous'
      },
      id: -1,
      idForSearching: -1,
      name: 'Cursed Village',
      playerSetting: {
        current: -1,
        human: {
          current: -1,
          max: 15
        },
        number: 15,
        robot: {
          current: -1,
          min: 0
        }
      },
      roleSetting: getCastFromNumberOfPlayers(15)[lobby.Member.A],
      token: avatarToken.humanPlayer,
      type: lobby.PayloadType.buildVillage
    }
    const action: SocketSend = {
      payload,
      type: ActionTypes.socket.SEND
    }
    const dispatch = jest.fn()

    store.dispatch = dispatch
    test('validate the JSON', async () => {
      expect.hasAssertions()
      const ajv = new Ajv()
      const schema = await fetch(`${CLIENT2SERVER}/buildVillage.json`)
        .then(res => res.json())
      const validate = ajv.validate(schema, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', async () => {
      actionHandler(action)
      const [
        buildVillagePayload,
        isHost,
        lang,
        nextGameVillageId,
        villageInfo,
        whatToDoNextInLobby
      ] = await getAllValue()

      expect(buildVillagePayload).toEqual(payload)
      expect(isHost).toBeUndefined()
      expect(lang).toBeUndefined()
      expect(nextGameVillageId).toBeUndefined()
      expect(villageInfo).toBeUndefined()
      expect(whatToDoNextInLobby).toBeUndefined()
    })
  })
})
