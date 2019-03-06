/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import {ChangePredictionBoard, PostChat, Ready, SelectYes, socket} from '../actions'
import {firstMorning, flavorText, myMessageOnChat} from '../reducers/fakeServer'
import {VERSION} from '../constants/Version'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './client2server'

const clientTimestamp = new Date('2006-10-07T12:06:56.568+09:00').toISOString()
const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('CHANGE_PREDICTION_BOARD', () => {
  const store = fakeStore({
    base: {
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'chatSettings': {
          characterLimit: 140,
          limit: 10
        },
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'name': {
          en: 'Walter',
          ja: 'ヴァルター'
        }
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    },
    prediction: {
      playerStatus: [
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#0',
          'id': 0,
          'image': 'https://werewolf.world/image/0.2/Gert.jpg',
          'name': {
            'en': 'Gert',
            'ja': 'ゲルト'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#2',
          'id': 2,
          'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#3',
          'id': 3,
          'image': 'https://werewolf.world/image/0.2/Simson.jpg',
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#4',
          'id': 4,
          'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#5',
          'id': 5,
          'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
          'name': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#6',
          'id': 6,
          'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
          'name': {
            'en': 'Dieter',
            'ja': 'ディーター'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#7',
          'id': 7,
          'image': 'https://werewolf.world/image/0.2/Peter.jpg',
          'name': {
            'en': 'Peter',
            'ja': 'ペーター'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#8',
          'id': 8,
          'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
          'name': {
            'en': 'Lisa',
            'ja': 'リーザ'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#9',
          'id': 9,
          'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
          'name': {
            'en': 'Alvin',
            'ja': 'アルビン'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#10',
          'id': 10,
          'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
          'name': {
            'en': 'Catalina',
            'ja': 'カタリナ'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#11',
          'id': 11,
          'image': 'https://werewolf.world/image/0.2/Otto.jpg',
          'name': {
            'en': 'Otto',
            'ja': 'オットー'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#12',
          'id': 12,
          'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
          'name': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#13',
          'id': 13,
          'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
          'name': {
            'en': 'Pamela',
            'ja': 'パメラ'
          },
          'status': village.AgentStatus.alive
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#14',
          'id': 14,
          'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
          'name': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          },
          'status': village.AgentStatus.alive
        }
      ],
      roleStatus: [
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#villager',
          'id': village.RoleId.villager,
          'image': 'https://werewolf.world/image/0.2/villager.jpg',
          'name': {
            'en': 'Villager',
            'ja': '村人'
          },
          'numberOfAgents': 6
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#seer',
          'id': village.RoleId.seer,
          'image': 'https://werewolf.world/image/0.2/seer.jpg',
          'name': {
            'en': 'Seer',
            'ja': '占い師'
          },
          'numberOfAgents': 1
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#medium',
          'id': village.RoleId.medium,
          'image': 'https://werewolf.world/image/0.2/medium.jpg',
          'name': {
            'en': 'Medium',
            'ja': '霊媒師'
          },
          'numberOfAgents': 1
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
          'id': village.RoleId.hunter,
          'image': 'https://werewolf.world/image/0.2/hunter.jpg',
          'name': {
            'en': 'Hunter',
            'ja': '狩人'
          },
          'numberOfAgents': 1
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#mason',
          'id': village.RoleId.mason,
          'image': 'https://werewolf.world/image/0.2/mason.jpg',
          'name': {
            'en': 'Mason',
            'ja': '共有者'
          },
          'numberOfAgents': 2
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#madman',
          'id': village.RoleId.madman,
          'image': 'https://werewolf.world/image/0.2/madman.jpg',
          'name': {
            'en': 'Madman',
            'ja': '狂人'
          },
          'numberOfAgents': 1
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
          'id': village.RoleId.werewolf,
          'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
          'name': {
            'en': 'Werewolf',
            'ja': '人狼'
          },
          'numberOfAgents': 2
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
          'id': village.RoleId.werehamster,
          'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
          'name': {
            'en': 'Werehamster',
            'ja': 'ハムスター人間'
          },
          'numberOfAgents': 1
        }
      ],
      table: {}
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ChangePredictionBoard = {
    nextState: village.BoardState.CIRCLE,
    playerId: 2,
    roleId: village.RoleId.villager,
    type: ActionTypes.global.CHANGE_PREDICTION_BOARD
  }
  const payload: village.Payload$boardMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Board
    ],
    '@id': 'https://licos.online/state/0.2/village#3/boardMessage',
    'agent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      }
    },
    clientTimestamp,
    'date': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myAgent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    },
    'phase': village.Phase.morning,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'prediction': village.BoardState.CIRCLE,
    'role': {
      '@context': village.Context.Role,
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'name': {
        'en': 'Villager',
        'ja': '村人'
      }
    },
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
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/boardMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/avatar.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/board.json`)
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
    const validate = ajv.validate(`${BASE_URI}/boardMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    const spy = jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(clientTimestamp)

    actionHandler(action)
    expect(spy).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('POST_CHAT', () => {
  const store = fakeStore({
    base: {
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'chatSettings': {
          characterLimit: 140,
          limit: 10
        },
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        }
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: PostChat = {
    channel: village.InputChannel.public,
    text: 'text',
    type: ActionTypes.global.POST_CHAT
  }
  const payload: village.Payload$playerMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Chat
    ],
    '@id': 'https://licos.online/state/0.2/village#3/playerMessage',
    'agent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      }
    },
    'characterLimit': 140,
    clientTimestamp,
    'date': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.public,
    'isMine': true,
    'isOver': false,
    'myAgent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    },
    'phase': village.Phase.morning,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'phaseTimeLimit': 600,
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'text': {
      '@language': village.Language.en,
      '@value': 'text'
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
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
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
    const validate = ajv.validate(`${BASE_URI}/playerMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    const spy = jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(clientTimestamp)

    actionHandler(action)
    expect(spy).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('READY', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
  const villageId = 3
  const action: Ready = {
    token,
    type: ActionTypes.global.READY,
    villageId
  }
  const payload: village.Payload$ready = {
    token,
    type: village.PayloadType.ready,
    villageId
  }

  test('validate the JSON of play', async () => {
    const ajv = new Ajv()

    expect.hasAssertions()
    await fetch(`https://werewolf.world/lobby/schema/${VERSION}/client2server/ready.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, payload)

        expect(validate).toBe(true)
      })
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('SELECT_YES', () => {
  const store = fakeStore({
    base: {
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.day,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'chatSettings': {
          characterLimit: 140,
          limit: 10
        },
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    commandSelection: {
      agents: [
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#2',
          'id': 2,
          'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
          'name': {
            en: 'Moritz',
            ja: 'モーリッツ'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#3',
          'id': 3,
          'image': 'https://werewolf.world/image/0.2/Simson.jpg',
          'name': {
            en: 'Simson',
            ja: 'ジムゾン'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#4',
          'id': 4,
          'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
          'name': {
            en: 'Thomas',
            ja: 'トーマス'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#5',
          'id': 5,
          'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
          'name': {
            en: 'Nicholas',
            ja: 'ニコラス'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#6',
          'id': 6,
          'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
          'name': {
            en: 'Dieter',
            ja: 'ディーター'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#7',
          'id': 7,
          'image': 'https://werewolf.world/image/0.2/Peter.jpg',
          'name': {
            en: 'Peter',
            ja: 'ペーター'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#8',
          'id': 8,
          'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
          'name': {
            en: 'Lisa',
            ja: 'リーザ'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#9',
          'id': 9,
          'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
          'name': {
            en: 'Alvin',
            ja: 'アルビン'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#10',
          'id': 10,
          'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
          'name': {
            en: 'Catalina',
            ja: 'カタリナ'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#11',
          'id': 11,
          'image': 'https://werewolf.world/image/0.2/Otto.jpg',
          'name': {
            en: 'Otto',
            ja: 'オットー'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#12',
          'id': 12,
          'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
          'name': {
            en: 'Joachim',
            ja: 'ヨアヒム'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#13',
          'id': 13,
          'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
          'name': {
            en: 'Pamela',
            ja: 'パメラ'
          }
        },
        {
          '@id': 'https://licos.online/state/0.2/village#3/agent#14',
          'id': 14,
          'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
          'name': {
            en: 'Jacob',
            ja: 'ヤコブ'
          }
        }
      ],
      fixed: true
    },
    mine: {
      agent: {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        }
      },
      role: {
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: SelectYes = {
    agentId: 2,
    type: ActionTypes.global.SELECT_YES
  }
  const payload: village.Payload$voteMessage = {
    '@context': [
      village.BaseContext.Base,
      village.BaseContext.Vote
    ],
    '@id': 'https://licos.online/state/0.2/village#3/voteMessage',
    'agent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      }
    },
    clientTimestamp,
    'date': 1,
    'directionality': village.Directionality.clientToServer,
    'extensionalDisclosureRange': [],
    'intensionalDisclosureRange': village.Channel.private,
    'myAgent': {
      '@context': village.Context.Agent,
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'role': {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    },
    'phase': village.Phase.day,
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
      'lang': village.Language.ja,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    const [mainSchema, baseSchema, ... schemas] = await Promise.all([
      fetch(`${BASE_URI}/voteMessage.json`)
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
    const validate = ajv.validate(`${BASE_URI}/voteMessage.json`, payload)

    if (!validate) {
      console.error(ajv.errors)
    }
    expect(validate).toBe(true)
  })
  test('dispatch correctly', () => {
    const spy = jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(clientTimestamp)

    actionHandler(action)
    expect(spy).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('socket/MESSAGE', () => {
  describe('receivedFlavorTextMessage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const token = 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    const villageId = 3
    const action = socket.message(flavorText)
    const payload: village.Payload$receivedFlavorTextMessage = {
      date: 0,
      phase: village.Phase.flavorText,
      token,
      type: village.PayloadType.receivedFlavorTextMessage,
      villageId
    }

    test('validate the JSON of play', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedFlavorTextMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
          .then(res => res.json())
      ])
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(`${BASE_URI}/receipt/receivedFlavorTextMessage.json`, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload,
        type: ActionTypes.socket.SEND
      })
    })
  })
  describe('receivedPlayerMessage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const token = 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    const villageId = 3
    const action = socket.message(myMessageOnChat)
    const payload: village.Payload$receivedPlayerMessage = {
      clientTimestamp: '2006-10-07T12:06:56.568+09:00',
      serverTimestamp: '2006-10-07T12:06:56.568+09:00',
      token,
      type: village.PayloadType.receivedPlayerMessage,
      villageId
    }

    test('validate the JSON of play', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedPlayerMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/base.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
          .then(res => res.json())
      ])
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(`${BASE_URI}/receipt/receivedPlayerMessage.json`, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload,
        type: ActionTypes.socket.SEND
      })
    })
  })
  describe('receivedSystemMessage', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const token = 'eFVr3O93oLhmnE8OqTMl5VSVGIV'
    const villageId = 3
    const action = socket.message(firstMorning)
    const payload: village.Payload$receivedSystemMessage = {
      date: 1,
      phase: village.Phase.morning,
      token,
      type: village.PayloadType.receivedSystemMessage,
      villageId
    }

    test('validate the JSON of play', async () => {
      expect.hasAssertions()
      const schemas = await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedSystemMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
          .then(res => res.json())
      ])
      const ajv = new Ajv({
        schemas
      })
      const validate = ajv.validate(`${BASE_URI}/receipt/receivedSystemMessage.json`, payload)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
    })
    test('dispatch correctly', () => {
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload,
        type: ActionTypes.socket.SEND
      })
    })
  })
})
