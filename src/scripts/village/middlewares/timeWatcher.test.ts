import * as ActionTypes from '../constants/ActionTypes'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import {VILLAGE_SCHEMA} from '../constants/SchemaPath'
import {initialState as base} from '../reducers/base'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {message} from '../actions'
import middleware from './timeWatcher'
import {village} from '../types'

describe('message/SYSTEM_MESSAGE', () => {
  describe('phase: night -> morning, day: 0 -> 1', () => {
    const store = fakeStore({
      base: {
        ... base,
        day: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: village.Payload$SystemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/systemMessage`,
      'character': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      'village': {
        '@context': village.Context.Village,
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
          'maxLengthOfUnicodeCodePoints': 140,
          'maxNumberOfChatMessages': 10
        },
        'id': 3,
        'language': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfPlayers': 15
      }
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const [mainSchema, baseSchema, ... schemas] = await Promise.all([
        VILLAGE_SCHEMA.systemMessage,
        VILLAGE_SCHEMA.base,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.boardResult,
        VILLAGE_SCHEMA.character,
        VILLAGE_SCHEMA.chat,
        VILLAGE_SCHEMA.chatSettings,
        VILLAGE_SCHEMA.role,
        VILLAGE_SCHEMA.time,
        VILLAGE_SCHEMA.timestamp,
        VILLAGE_SCHEMA.village,
        VILLAGE_SCHEMA.votingResult
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const mergedSchema = {
        ... mainSchema,
        properties: {
          ... mainSchema.properties,
          ... baseSchema.definitions
        }
      }
      const ajv = new Ajv({
        schemas: [
          mergedSchema,
          baseSchema,
          ... schemas
        ]
      })
      const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(message.systemMessage(payload))
      expect(dispatch).toHaveBeenCalledTimes(2)
      expect(dispatch).toHaveBeenCalledWith({
        from: 'night',
        to: 'morning',
        type: ActionTypes.App.CHANGE_PHASE
      })
      expect(dispatch).toHaveBeenCalledWith({
        from: 0,
        to: 1,
        type: ActionTypes.App.CHANGE_DAY
      })
    })
  })
  describe('phase: night -> morning, day: 0', () => {
    const store = fakeStore({
      base: {
        ... base,
        day: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: village.Payload$SystemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/systemMessage`,
      'character': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 0,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      'village': {
        '@context': village.Context.Village,
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
          'maxLengthOfUnicodeCodePoints': 140,
          'maxNumberOfChatMessages': 10
        },
        'id': 3,
        'language': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfPlayers': 15
      }
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const [mainSchema, baseSchema, ... schemas] = await Promise.all([
        VILLAGE_SCHEMA.systemMessage,
        VILLAGE_SCHEMA.base,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.boardResult,
        VILLAGE_SCHEMA.character,
        VILLAGE_SCHEMA.chat,
        VILLAGE_SCHEMA.chatSettings,
        VILLAGE_SCHEMA.role,
        VILLAGE_SCHEMA.time,
        VILLAGE_SCHEMA.timestamp,
        VILLAGE_SCHEMA.village,
        VILLAGE_SCHEMA.votingResult
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const mergedSchema = {
        ... mainSchema,
        properties: {
          ... mainSchema.properties,
          ... baseSchema.definitions
        }
      }
      const ajv = new Ajv({
        schemas: [
          mergedSchema,
          baseSchema,
          ... schemas
        ]
      })
      const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(message.systemMessage(payload))
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        from: 'night',
        to: 'morning',
        type: ActionTypes.App.CHANGE_PHASE
      })
    })
  })
  describe('phase: night -> flavor text, day: 0', () => {
    const store = fakeStore({
      base: {
        ... base,
        day: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: village.Payload$FlavorTextMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.FlavorText
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/flavorTextMessage`,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 0,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'flavorText': [],
      'intensionalDisclosureRange': village.Channel.public,
      'phase': village.Phase.flavorText,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      'village': {
        '@context': village.Context.Village,
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
          'maxLengthOfUnicodeCodePoints': 140,
          'maxNumberOfChatMessages': 10
        },
        'id': 3,
        'language': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfPlayers': 15
      }
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const [mainSchema, baseSchema, ... schemas] = await Promise.all([
        VILLAGE_SCHEMA.systemMessage,
        VILLAGE_SCHEMA.base,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.boardResult,
        VILLAGE_SCHEMA.character,
        VILLAGE_SCHEMA.chat,
        VILLAGE_SCHEMA.chatSettings,
        VILLAGE_SCHEMA.role,
        VILLAGE_SCHEMA.time,
        VILLAGE_SCHEMA.timestamp,
        VILLAGE_SCHEMA.village,
        VILLAGE_SCHEMA.votingResult
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const mergedSchema = {
        ... mainSchema,
        properties: {
          ... mainSchema.properties,
          ... baseSchema.definitions
        }
      }
      const ajv = new Ajv({
        schemas: [
          mergedSchema,
          baseSchema,
          ... schemas
        ]
      })
      const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(message.systemMessage(payload))
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        from: 'night',
        to: 'flavor text',
        type: ActionTypes.App.CHANGE_PHASE
      })
    })
  })
  describe('phase: night, day: 0 -> 1', () => {
    const store = fakeStore({
      base: {
        ... base,
        day: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: village.Payload$SystemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/systemMessage`,
      'character': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.night,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      'village': {
        '@context': village.Context.Village,
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
          'maxLengthOfUnicodeCodePoints': 140,
          'maxNumberOfChatMessages': 10
        },
        'id': 3,
        'language': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfPlayers': 15
      }
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const [mainSchema, baseSchema, ... schemas] = await Promise.all([
        VILLAGE_SCHEMA.systemMessage,
        VILLAGE_SCHEMA.base,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.boardResult,
        VILLAGE_SCHEMA.character,
        VILLAGE_SCHEMA.chat,
        VILLAGE_SCHEMA.chatSettings,
        VILLAGE_SCHEMA.role,
        VILLAGE_SCHEMA.time,
        VILLAGE_SCHEMA.timestamp,
        VILLAGE_SCHEMA.village,
        VILLAGE_SCHEMA.votingResult
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const mergedSchema = {
        ... mainSchema,
        properties: {
          ... mainSchema.properties,
          ... baseSchema.definitions
        }
      }
      const ajv = new Ajv({
        schemas: [
          mergedSchema,
          baseSchema,
          ... schemas
        ]
      })
      const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(message.systemMessage(payload))
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        from: 0,
        to: 1,
        type: ActionTypes.App.CHANGE_DAY
      })
    })
  })
  describe('phase: night, day: 0', () => {
    const store = fakeStore({
      base: {
        ... base,
        day: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: village.Payload$SystemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/systemMessage`,
      'character': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'day': 0,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.night,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      'village': {
        '@context': village.Context.Village,
        '@id': `https://licos.online/state/${VERSION}/village`,
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': `https://licos.online/state/${VERSION}/village#3/chatSettings`,
          'maxLengthOfUnicodeCodePoints': 140,
          'maxNumberOfChatMessages': 10
        },
        'id': 3,
        'language': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfPlayers': 15
      }
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const [mainSchema, baseSchema, ... schemas] = await Promise.all([
        VILLAGE_SCHEMA.systemMessage,
        VILLAGE_SCHEMA.base,
        VILLAGE_SCHEMA.avatar,
        VILLAGE_SCHEMA.boardResult,
        VILLAGE_SCHEMA.character,
        VILLAGE_SCHEMA.chat,
        VILLAGE_SCHEMA.chatSettings,
        VILLAGE_SCHEMA.role,
        VILLAGE_SCHEMA.time,
        VILLAGE_SCHEMA.timestamp,
        VILLAGE_SCHEMA.village,
        VILLAGE_SCHEMA.votingResult
      ].map(
        schema => fetch(schema)
          .then(res => res.json())
      ))
      const mergedSchema = {
        ... mainSchema,
        properties: {
          ... mainSchema.properties,
          ... baseSchema.definitions
        }
      }
      const ajv = new Ajv({
        schemas: [
          mergedSchema,
          baseSchema,
          ... schemas
        ]
      })
      const validate = ajv.validate(VILLAGE_SCHEMA.systemMessage, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(message.systemMessage(payload))
      expect(dispatch).toHaveBeenCalledTimes(0)
    })
  })
})
