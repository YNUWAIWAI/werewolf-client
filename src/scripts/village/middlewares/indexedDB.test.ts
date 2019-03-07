/* global lobby, village */
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
import {ClickNavigationButton, socket} from '../actions'
import {Key, Village, WhatToDoNextInLobby, connectDB, deleteValue, getValue, updateValue} from '../../indexeddb'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {getCastFromNumberOfPlayers} from '../../lobby/util'
import middleware from './indexedDB'

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

const BASE_URI = `https://werewolf.world/schema/${VERSION}`
const CLIENT2SERVER = `https://werewolf.world/lobby/schema/${VERSION}/client2server`

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
test('RETURN_TO_LOBBY', async () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ClickNavigationButton = {
    type: ActionTypes.Navigation.RETURN_TO_LOBBY
  }
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const db = await connectDB()
  const transaction = db.transaction('licosDB', 'readwrite')
  const objectStore = transaction.objectStore('licosDB')
  const v = {
    lobbyType: lobby.Lobby.human,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
    villageId: 3
  }
  const spy = jest.spyOn(window.location, 'replace')

  await updateValue<Village>(objectStore, Key.village, v)
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
  expect(villageInfo).toEqual(v)
  expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.leaveWaitingPage)
  expect(spy).toHaveBeenCalled()
})
describe('NEXT_GAME', () => {
  const avatarToken = {
    humanPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
    onymousAudience: '3F2504E0-4F89-11D3-9A0C-0305E82C3311',
    robotPlayer: '3F2504E0-4F89-11D3-9A0C-0305E82C3312'
  }
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ClickNavigationButton = {
    type: ActionTypes.Navigation.NEXT_GAME
  }
  const payload: village.Payload = {
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
    type: village.PayloadType.buildVillage
  }

  test('validate the JSON', async () => {
    const ajv = new Ajv()

    expect.hasAssertions()
    await fetch(`${CLIENT2SERVER}/buildVillage.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, payload)

        expect(validate).toBe(true)
      })
  })
  test('isHost: true', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')

    await Promise.all([
      updateValue<boolean>(objectStore, Key.isHost, true),
      updateValue<village.Payload$buildVillage>(objectStore, Key.buildVillagePayload, payload)
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

    expect(buildVillagePayload).toEqual(payload)
    expect(isHost).toBe(true)
    expect(lang).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectNextVillage)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.socket.SEND
    })
  })
  test('isHost: false', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const spy = jest.spyOn(window.location, 'replace')
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')

    await Promise.all([
      updateValue<boolean>(objectStore, Key.isHost, false),
      updateValue<village.Payload$buildVillage>(objectStore, Key.buildVillagePayload, payload)
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

    expect(buildVillagePayload).toEqual(payload)
    expect(isHost).toBe(false)
    expect(lang).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectNextVillage)
    expect(spy).toHaveBeenCalled()
  })
})
describe('indexedDB/INIT', () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: {type: ActionTypes.indexedDB.INIT} = {
    type: ActionTypes.indexedDB.INIT
  }

  test('isHost: true', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const v = {
      lobbyType: lobby.Lobby.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }

    await Promise.all([
      updateValue<village.Language>(objectStore, Key.lang, village.Language.en),
      updateValue<boolean>(objectStore, Key.isHost, true),
      updateValue<Village>(objectStore, Key.village, v)
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
    expect(isHost).toBe(true)
    expect(lang).toBe('en')
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toEqual(v)
    expect(whatToDoNextInLobby).toBeUndefined()
    expect(dispatch).toHaveBeenCalledWith({
      language: village.Language.en,
      type: ActionTypes.global.CHANGE_LANGUAGE
    })
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.ACTIVATE_NEXT_BUTTON,
      villageId: -1
    })
    expect(dispatch).toHaveBeenCalledWith({
      token: v.token,
      type: ActionTypes.global.READY,
      villageId: v.villageId
    })
  })
  test('isHost: false', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const v = {
      lobbyType: lobby.Lobby.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }

    await Promise.all([
      updateValue<village.Language>(objectStore, Key.lang, village.Language.en),
      updateValue<boolean>(objectStore, Key.isHost, false),
      updateValue<Village>(objectStore, Key.village, v)
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
    expect(isHost).toBe(false)
    expect(lang).toBe('en')
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toEqual(v)
    expect(whatToDoNextInLobby).toBeUndefined()
    expect(dispatch).toHaveBeenCalledWith({
      language: village.Language.en,
      type: ActionTypes.global.CHANGE_LANGUAGE
    })
    expect(dispatch).toHaveBeenCalledWith({
      token: v.token,
      type: ActionTypes.global.READY,
      villageId: v.villageId
    })
  })
})
describe('socket/MESSAGE', () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const payload: village.Payload$nextGameInvitation = {
    '@payload': village.PayloadType.nextGameInvitation,
    'type': village.PayloadType.nextGameInvitation,
    'villageId': 3
  }
  const action = socket.message(payload)

  test('validate the JSON', async () => {
    const ajv = new Ajv()

    expect.hasAssertions()
    await Promise.all([
      fetch(`${BASE_URI}/invitation/nextGameInvitation.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/village.json`)
        .then(res => res.json())
    ])
      .then(schemas => {
        const [schema, ... rest] = schemas
        const validate = ajv
          .addSchema(rest)
          .validate(schema, {
            type: payload.type,
            villageId: payload.villageId
          })

        expect(validate).toBe(true)
      })
  })
  test('isHost: true', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const spy = jest.spyOn(window.location, 'replace')

    await updateValue<boolean>(objectStore, Key.isHost, true)
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
    expect(nextGameVillageId).toBe(3)
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBeUndefined()
    expect(spy).toHaveBeenCalled()
  })
  test('isHost: false', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')

    await updateValue<boolean>(objectStore, Key.isHost, false)
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
    expect(nextGameVillageId).toBe(3)
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBeUndefined()
  })
})
