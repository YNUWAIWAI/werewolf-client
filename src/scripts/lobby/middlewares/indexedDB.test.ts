import * as ActionTypes from '../constants/ActionTypes'
import {
  Key,
  Village,
  WhatToDoNextInLobby,
  connectDB,
  deleteValue,
  getValue,
  updateValue
} from '../../indexeddb'
import {
  LOBBY_SCHEMA,
  VILLAGE_SCHEMA
} from '../constants/SchemaPath'
import {
  Socket,
  Transition,
  init,
  message
} from '../actions'
import Ajv from 'ajv'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {getCastFromNumberOfPlayers} from '../util'
import {lobby} from '../types'
import middleware from './indexedDB'
import {waitingPage} from '../reducers/fakeServer'

const getAllValue = async () => {
  const db = await connectDB()
  const transaction = db.transaction('licosDB', 'readwrite')
  const objectStore = transaction.objectStore('licosDB')

  return Promise.all([
    getValue<lobby.Payload$BuildVillage>(objectStore, Key.buildVillagePayload),
    getValue<boolean>(objectStore, Key.isHost),
    getValue<lobby.Language>(objectStore, Key.language),
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
    deleteValue(objectStore, Key.language),
    deleteValue(objectStore, Key.nextGameVillageId),
    deleteValue(objectStore, Key.village),
    deleteValue(objectStore, Key.whatToDoNextInLobby)
  ])
}

beforeEach(() => deleteAllValue())
describe('INIT', () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = init()

  test('default', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    actionHandler(action)

    const [
      buildVillagePayload,
      isHost,
      language,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(language).toBeUndefined()
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
      language,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(language).toBeUndefined()
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
      lobbyType: lobby.LobbyType.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }
    const payload: lobby.Payload$LeaveWaitingPage = {
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
      language,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(language).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)

    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.Socket.SEND
    })
  })
  test('whatToDoNextInLobby: selectNextVillage', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const village = {
      lobbyType: lobby.LobbyType.human,
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
      language,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(language).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toStrictEqual(village)
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      lobby: village.lobbyType,
      type: ActionTypes.App.CHANGE_LOBBY
    })
    expect(dispatch).toHaveBeenCalledWith({
      id: 4,
      type: ActionTypes.App.SELECT_VILLAGE
    })
  })
  test('whatToDoNextInLobby: selectVillage', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const village = {
      lobbyType: lobby.LobbyType.human,
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
      language,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(language).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toStrictEqual(village)
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.nothing)

    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      lobby: village.lobbyType,
      type: ActionTypes.App.CHANGE_LOBBY
    })
    expect(dispatch).toHaveBeenCalledWith({
      id: village.villageId,
      type: ActionTypes.App.SELECT_VILLAGE
    })
  })
})
test('LEAVE_WAITING_PAGE', async () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.App.LEAVE_WAITING_PAGE
  }
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const db = await connectDB()
  const transaction = db.transaction('licosDB', 'readwrite')
  const objectStore = transaction.objectStore('licosDB')
  const village = {
    lobbyType: lobby.LobbyType.human,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
    villageId: 3
  }

  await updateValue<Village>(objectStore, Key.village, village)
  actionHandler(action)
  const [
    buildVillagePayload,
    isHost,
    language,
    nextGameVillageId,
    villageInfo,
    whatToDoNextInLobby
  ] = await getAllValue()

  expect(buildVillagePayload).toBeUndefined()
  expect(isHost).toBeUndefined()
  expect(language).toBeUndefined()
  expect(nextGameVillageId).toBeUndefined()
  expect(villageInfo).toBeUndefined()
  expect(whatToDoNextInLobby).toBeUndefined()
})
describe('message/PLAYED', () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const payload: lobby.Payload$Played = {
    language: lobby.Language.en,
    type: lobby.PayloadType.played
  }
  const action = message.played(payload)
  const dispatch = jest.fn()

  store.dispatch = dispatch
  test('validate the JSON', async () => {
    expect.hasAssertions()
    const schemas = await Promise.all([
      LOBBY_SCHEMA.server2client.played,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const ajv = new Ajv({
      schemas
    })
    const validate = ajv.validate(LOBBY_SCHEMA.server2client.played, payload)

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
      language,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBeUndefined()
    expect(language).toBe(payload.language)
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBeUndefined()
    expect(dispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.App.SHOW_VILLAGE
    })
  })
})
describe('message/WAINTING_PAGE', () => {
  const avatarToken = {
    humanPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
    onymousAudience: '3F2504E0-4F89-11D3-9A0C-0305E82C3311',
    robotPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
  }
  const store = fakeStore({
    token: {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: avatarToken.humanPlayer,
      'lobby': lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: avatarToken.onymousAudience,
      [lobby.LobbyType.robot]: avatarToken.robotPlayer
    }
  })
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const dispatch = jest.fn()

  store.dispatch = dispatch
  describe('isHost: true', () => {
    const payload: lobby.Payload$WaitingPage = {
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
    const action = message.waitingPage(payload)

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        LOBBY_SCHEMA.server2client.waitingPage,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.village
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(LOBBY_SCHEMA.server2client.waitingPage, payload)

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
        language,
        nextGameVillageId,
        villageInfo,
        whatToDoNextInLobby
      ] = await getAllValue()

      expect(buildVillagePayload).toBeUndefined()
      expect(isHost).toBe(true)
      expect(language).toBeUndefined()
      expect(nextGameVillageId).toBeUndefined()
      expect(villageInfo).toStrictEqual({
        lobbyType: lobby.LobbyType.human,
        token: avatarToken.humanPlayer,
        villageId: 1
      })
      expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectVillage)
    })
  })
  describe('isHost: false', () => {
    const payload = waitingPage
    const action = message.waitingPage(payload)

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        LOBBY_SCHEMA.server2client.waitingPage,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.village
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(LOBBY_SCHEMA.server2client.waitingPage, payload)

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
        language,
        nextGameVillageId,
        villageInfo,
        whatToDoNextInLobby
      ] = await getAllValue()

      expect(buildVillagePayload).toBeUndefined()
      expect(isHost).toBe(false)
      expect(language).toBeUndefined()
      expect(nextGameVillageId).toBeUndefined()
      expect(villageInfo).toStrictEqual({
        lobbyType: lobby.LobbyType.human,
        token: avatarToken.humanPlayer,
        villageId: 1
      })
      expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectVillage)
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
    const payload: lobby.Payload$BuildVillage = {
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
    const action: Socket.Send = {
      payload,
      type: ActionTypes.Socket.SEND
    }
    const dispatch = jest.fn()

    store.dispatch = dispatch
    test('validate the JSON', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        LOBBY_SCHEMA.client2server.buildVillage,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.village
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(LOBBY_SCHEMA.client2server.buildVillage, payload)

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
        language,
        nextGameVillageId,
        villageInfo,
        whatToDoNextInLobby
      ] = await getAllValue()

      expect(buildVillagePayload).toStrictEqual(payload)
      expect(isHost).toBeUndefined()
      expect(language).toBeUndefined()
      expect(nextGameVillageId).toBeUndefined()
      expect(villageInfo).toBeUndefined()
      expect(whatToDoNextInLobby).toBeUndefined()
    })
  })
})
