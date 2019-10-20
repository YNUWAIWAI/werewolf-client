import * as ActionTypes from '../constants/ActionTypes'
import * as village from '../types'
import {Agent} from '../constants/Agent'
import Ajv from 'ajv'
import {ImagePath} from '../constants/ImagePath'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './flavorText'
import {socket} from '../actions'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('socket/MESSAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const flavorTextPayload: village.Payload$playerMessage[] = [
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': 'https://licos.online/state/0.2/village#3/flavorText#1/playerMessage',
      '@payload': village.Message.playerMessage,
      'agent': {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent',
        'id': 1,
        'image': ImagePath.Agent120x120.a,
        'name': Agent.a
      },
      'characterLimit': 140,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'date': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 1,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': '5s',
      'isMine': false,
      'isOver': false,
      'limit': 10,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'text': {
        '@language': village.Language.en,
        '@value': '最初のフレーバーテキストです'
      },
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
          'characterLimit': 140,
          'limit': 10
        },
        'id': 3,
        'lang': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': 'https://licos.online/state/0.2/village#3/flavorText#2/playerMessage',
      '@payload': village.Message.playerMessage,
      'agent': {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent',
        'id': 1,
        'image': ImagePath.Agent120x120.a,
        'name': Agent.a
      },
      'characterLimit': 140,
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'counter': 0,
      'date': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'id': 1,
      'intensionalDisclosureRange': village.Channel.public,
      'interval': '5s',
      'isMine': false,
      'isOver': false,
      'limit': 10,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'text': {
        '@language': village.Language.en,
        '@value': '２番目のフレーバーテキストです'
      },
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'chatSettings': {
          '@context': village.Context.ChatSettings,
          '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
          'characterLimit': 140,
          'limit': 10
        },
        'id': 3,
        'lang': village.Language.en,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    }
  ]
  const payload: village.Payload$flavorTextMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.FlavorText
    ],
    '@id': 'https://licos.online/state/0.2/village#3/flavorTextMessage',
    'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
    'date': 1,
    'directionality': village.Directionality.serverToClient,
    'extensionalDisclosureRange': [],
    'flavorText': flavorTextPayload,
    'intensionalDisclosureRange': village.Channel.public,
    'phase': village.Phase.flavorText,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': 'https://licos.online/state/0.2/village',
      'chatSettings': {
        '@context': village.Context.ChatSettings,
        '@id': 'https://licos.online/state/0.2/village#3/chatSettings',
        'characterLimit': 140,
        'limit': 10
      },
      'id': 3,
      'lang': village.Language.en,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, subSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/flavorTextMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/playerMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chatSettings.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/role.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/time.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/village.json`)
        .then(res => res.json())
    ])
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
    const validate = ajv.validate(`${BASE_URI}/flavorTextMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    jest.useFakeTimers()
    actionHandler(socket.message(payload))
    jest.runAllTimers()
    expect(dispatch).toHaveBeenCalledTimes(2)
    flavorTextPayload.forEach(item => {
      expect(dispatch).toHaveBeenCalledWith({
        payload: item,
        type: ActionTypes.socket.MESSAGE
      })
    })
  })
})
