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
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './indexedDB'

(window as any).indexedDB = FDB;
(global as any).IDBCursor = FDBCursor;
(global as any).IDBCursorWithValue = FDBCursorWithValue;
(global as any).IDBDatabase = FDBDatabase;
(global as any).IDBFactory = FDBFactory;
(global as any).IDBIndex = FDBIndex;
(global as any).IDBKeyRange = FDBKeyRange;
(global as any).IDBObjectStore = FDBObjectStore;
(global as any).IDBOpenDBRequest = FDBOpenDBRequest;
(global as any).IDBRequest = FDBRequest;
(global as any).IDBTransaction = FDBTransaction;
(global as any).IDBVersionChangeEvent = FDBVersionChangeEvent

const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
const CLIENT2SERVER = `${BASE_URI}/client2server`
const ajv = new Ajv()

const getAllValue = async () => {
  const db = await connectDB()
  const transaction = db.transaction('licosDB', 'readwrite')
  const objectStore = transaction.objectStore('licosDB')

  return Promise.all([
    getValue<lobby.Payload$BuildVillage>(objectStore, Key.buildVillagePayload),
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

describe('indexedDB/INIT', () => {
  beforeEach(() => deleteAllValue())
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
  test('nothing', async () => {
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
  test('leaveWaitingPage', async () => {
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
  test('selectNextVillage', async () => {
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
  test('selectVillage', async () => {
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
      id: village.villageId,
      type: ActionTypes.global.SELECT_VILLAGE
    })
  })
})
