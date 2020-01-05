import * as ActionTypes from '../constants/ActionTypes'
import Ajv from 'ajv'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {VERSION} from '../constants/Version'
import {VILLAGE_SCHEMA} from '../constants/SchemaPath'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import {message} from '../actions'
import middleware from './flavorText'
import {village} from '../types'

describe('message/FLAVOR_TEXT_MESSAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const flavorTextPayload: village.Payload$ChatMessage[] = [
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/chatMessage`,
      'character': {
        '@context': village.Context.Character,
        '@id': `https://licos.online/state/${VERSION}/village#3/character`,
        'id': 1,
        'image': ImagePath.Character.a,
        'name': Character.a
      },
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'day': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 1,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': 5,
      'isFromServer': true,
      'isMine': false,
      'isOver': false,
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'text': {
        '@language': village.Language.en,
        '@value': '最初のフレーバーテキストです'
      },
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
    },
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': `https://licos.online/state/${VERSION}/village#3/chatMessage`,
      'character': {
        '@context': village.Context.Character,
        '@id': `https://licos.online/state/${VERSION}/village#3/character`,
        'id': 1,
        'image': ImagePath.Character.a,
        'name': Character.a
      },
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'day': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 1,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': 5,
      'isFromServer': true,
      'isMine': false,
      'isOver': false,
      'maxLengthOfUnicodeCodePoints': 140,
      'maxNumberOfChatMessages': 10,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'text': {
        '@language': village.Language.en,
        '@value': '２番目のフレーバーテキストです'
      },
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
  ]
  const payload: village.Payload$FlavorTextMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.FlavorText
    ],
    '@id': `https://licos.online/state/${VERSION}/village#3/flavorTextMessage`,
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'day': 1,
    'directionality': village.Directionality.serverToClient,
    'extensionalDisclosureRange': [],
    'flavorText': flavorTextPayload,
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
    const [mainSchema, subSchema, baseSchema, ... schemas] = await Promise.all([
      VILLAGE_SCHEMA.flavorTextMessage,
      VILLAGE_SCHEMA.chatMessage,
      VILLAGE_SCHEMA.base,
      VILLAGE_SCHEMA.character,
      VILLAGE_SCHEMA.avatar,
      VILLAGE_SCHEMA.chat,
      VILLAGE_SCHEMA.chatSettings,
      VILLAGE_SCHEMA.role,
      VILLAGE_SCHEMA.time,
      VILLAGE_SCHEMA.village
    ].map(
      schema => fetch(schema)
        .then(res => res.json())
    ))
    const mergedMainSchema = {
      ... mainSchema,
      properties: {
        ... mainSchema.properties,
        ... baseSchema.definitions
      }
    }
    const mergedSubSchema = {
      ... subSchema,
      properties: {
        ... subSchema.properties,
        ... baseSchema.definitions
      }
    }
    const ajv = new Ajv({
      schemas: [
        mergedMainSchema,
        mergedSubSchema,
        baseSchema,
        ... schemas
      ]
    })
    const validate = ajv.validate(VILLAGE_SCHEMA.flavorTextMessage, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    jest.useFakeTimers()
    actionHandler(message.flavorTextMessage(payload))
    jest.runAllTimers()
    expect(dispatch).toHaveBeenCalledTimes(2)
    flavorTextPayload.forEach(item => {
      expect(dispatch).toHaveBeenCalledWith({
        payload: item,
        type: ActionTypes.Socket.MESSAGE
      })
    })
  })
})
