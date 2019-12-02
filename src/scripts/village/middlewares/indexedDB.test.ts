import * as ActionTypes from '../constants/ActionTypes'
import {
  ClickNavigationButton,
  message
} from '../actions'
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
  lobby,
  village
} from '../types'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {getCastFromNumberOfPlayers} from '../../lobby/util'
import middleware from './indexedDB'

const BASE_URI = `https://werewolf.world/village/schema/${VERSION}`
const CLIENT2SERVER = `https://werewolf.world/lobby/schema/${VERSION}/client2server`

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
    lobbyType: lobby.LobbyType.human,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
    villageId: 3
  }

  await updateValue<Village>(objectStore, Key.village, v)
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
  expect(villageInfo).toStrictEqual(v)
  expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.leaveWaitingPage)
  expect(dispatch).toHaveBeenCalled()
  expect(dispatch).toHaveBeenCalledWith({
    type: ActionTypes.App.SHOW_LOBBY
  })
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
  const payload: village.Payload$BuildVillage = {
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
      updateValue<village.Payload$BuildVillage>(objectStore, Key.buildVillagePayload, payload)
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

    expect(buildVillagePayload).toStrictEqual(payload)
    expect(isHost).toBe(true)
    expect(language).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectNextVillage)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.Socket.SEND
    })
  })
  test('isHost: false', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')

    await Promise.all([
      updateValue<boolean>(objectStore, Key.isHost, false),
      updateValue<village.Payload$BuildVillage>(objectStore, Key.buildVillagePayload, payload)
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

    expect(buildVillagePayload).toStrictEqual(payload)
    expect(isHost).toBe(false)
    expect(language).toBeUndefined()
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBe(WhatToDoNextInLobby.selectNextVillage)
    expect(dispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.App.SHOW_LOBBY
    })
  })
})
describe('indexedDB/INIT', () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: {type: ActionTypes.IndexedDB.INIT} = {
    type: ActionTypes.IndexedDB.INIT
  }

  test('isHost: true', async () => {
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const db = await connectDB()
    const transaction = db.transaction('licosDB', 'readwrite')
    const objectStore = transaction.objectStore('licosDB')
    const v = {
      lobbyType: lobby.LobbyType.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }

    await Promise.all([
      updateValue<village.Language>(objectStore, Key.language, village.Language.en),
      updateValue<boolean>(objectStore, Key.isHost, true),
      updateValue<Village>(objectStore, Key.village, v)
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
    expect(isHost).toBe(true)
    expect(language).toBe('en')
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toStrictEqual(v)
    expect(whatToDoNextInLobby).toBeUndefined()
    expect(dispatch).toHaveBeenCalledWith({
      language: village.Language.en,
      type: ActionTypes.App.CHANGE_LANGUAGE
    })
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.App.ACTIVATE_NEXT_BUTTON,
      villageId: -1
    })
    expect(dispatch).toHaveBeenCalledWith({
      token: v.token,
      type: ActionTypes.App.READY,
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
      lobbyType: lobby.LobbyType.human,
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310',
      villageId: 3
    }

    await Promise.all([
      updateValue<village.Language>(objectStore, Key.language, village.Language.en),
      updateValue<boolean>(objectStore, Key.isHost, false),
      updateValue<Village>(objectStore, Key.village, v)
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
    expect(isHost).toBe(false)
    expect(language).toBe('en')
    expect(nextGameVillageId).toBeUndefined()
    expect(villageInfo).toStrictEqual(v)
    expect(whatToDoNextInLobby).toBeUndefined()
    expect(dispatch).toHaveBeenCalledWith({
      language: village.Language.en,
      type: ActionTypes.App.CHANGE_LANGUAGE
    })
    expect(dispatch).toHaveBeenCalledWith({
      token: v.token,
      type: ActionTypes.App.READY,
      villageId: v.villageId
    })
  })
})
describe('message/NEXT_GAME_INVITATION', () => {
  const store = fakeStore()
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const payload: village.Payload$NextGameInvitation = {
    '@payload': village.PayloadType.nextGameInvitation,
    'type': village.PayloadType.nextGameInvitation,
    'villageId': 3
  }
  const action = message.nextGameInvitation(payload)

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

    await updateValue<boolean>(objectStore, Key.isHost, true)
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
    expect(nextGameVillageId).toBe(3)
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBeUndefined()
    expect(dispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.App.SHOW_LOBBY
    })
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
      language,
      nextGameVillageId,
      villageInfo,
      whatToDoNextInLobby
    ] = await getAllValue()

    expect(buildVillagePayload).toBeUndefined()
    expect(isHost).toBe(false)
    expect(language).toBeUndefined()
    expect(nextGameVillageId).toBe(3)
    expect(villageInfo).toBeUndefined()
    expect(whatToDoNextInLobby).toBeUndefined()
  })
})
