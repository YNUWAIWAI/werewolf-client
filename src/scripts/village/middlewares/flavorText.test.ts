import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import {initialState as agents} from '../reducers/agents'
import {initialState as base} from '../reducers/base'
import {initialState as chat} from '../reducers/chat'
import {initialState as commandInputBox} from '../reducers/commandInputBox'
import {initialState as commandSelection} from '../reducers/commandSelection'
import fetch from 'node-fetch'
import {initialState as hideButton} from '../reducers/hideButton'
import {initialState as language} from '../reducers/language'
import middleware from './flavorText'
import {initialState as modal} from '../reducers/modal'
import {initialState as obfucator} from '../reducers/obfucator'
import {initialState as prediction} from '../reducers/prediction'
import {initialState as result} from '../reducers/result'
import {initialState as roles} from '../reducers/roles'
import {socket} from '../actions'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('socket/MESSAGE', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    agents,
    base,
    chat,
    commandInputBox,
    commandSelection,
    hideButton,
    language,
    modal,
    obfucator,
    prediction,
    result,
    roles
  })
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const flavorTextPayload: village.Payload$playerMessage[] = [
    {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.Chat
      ],
      '@id': 'https://licos.online/state/0.2/village#3/flavorText#1/playerMessage',
      'agent': {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'name': {
          'en': 'Catalina',
          'ja': 'カタリナ'
        }
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
        '@language': village.Language.ja,
        '@value': '最初のフレーバーテキストです'
      },
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'lang': village.Language.ja,
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
      'agent': {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'name': {
          'en': 'Catalina',
          'ja': 'カタリナ'
        }
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
        '@language': village.Language.ja,
        '@value': '２番目のフレーバーテキストです'
      },
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'lang': village.Language.ja,
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
      'id': 3,
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    const ajv = new Ajv()

    expect.hasAssertions()
    await Promise.all([
      fetch(`${BASE_URI}/flavorTextMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/playerMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/time.json`)
        .then(res => res.json())
    ])
      .then(schemas => {
        const [schema, ... rest] = schemas
        const validate = ajv
          .addSchema(rest)
          .validate(schema, payload)

        expect(validate).toBe(true)
      })
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