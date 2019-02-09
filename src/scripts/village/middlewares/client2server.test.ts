/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import {ChangePredictionBoard, PostChat, Ready, SelectYes, socket} from '../actions'
import {firstMorning, flavorText, myMessageOnChat} from '../reducers/fakeServer'
import {VERSION} from '../constants/Version'
import {VILLAGER} from '../constants/Role'
import {initialState as agents} from '../reducers/agents'
import {initialState as base} from '../reducers/base'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './client2server'
import {initialState as roles} from '../reducers/roles'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('CHANGE_PREDICTION_BOARD', () => {
  const store = fakeStore({
    agents: {
      ... agents,
      all: [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#0',
          'id': 0,
          'image': 'https://werewolf.world/image/0.2/Gert.jpg',
          'isMine': false,
          'name': {
            'en': 'Gert',
            'ja': 'ゲルト'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#2',
          'id': 2,
          'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
          'isMine': false,
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#3',
          'id': 3,
          'image': 'https://werewolf.world/image/0.2/Simson.jpg',
          'isMine': false,
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#4',
          'id': 4,
          'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
          'isMine': false,
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#5',
          'id': 5,
          'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
          'isMine': false,
          'name': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#6',
          'id': 6,
          'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
          'isMine': false,
          'name': {
            'en': 'Dieter',
            'ja': 'ディーター'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#7',
          'id': 7,
          'image': 'https://werewolf.world/image/0.2/Peter.jpg',
          'isMine': false,
          'name': {
            'en': 'Peter',
            'ja': 'ペーター'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#8',
          'id': 8,
          'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
          'isMine': false,
          'name': {
            'en': 'Lisa',
            'ja': 'リーザ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#9',
          'id': 9,
          'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
          'isMine': false,
          'name': {
            'en': 'Alvin',
            'ja': 'アルビン'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#10',
          'id': 10,
          'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
          'isMine': false,
          'name': {
            'en': 'Catalina',
            'ja': 'カタリナ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#11',
          'id': 11,
          'image': 'https://werewolf.world/image/0.2/Otto.jpg',
          'isMine': false,
          'name': {
            'en': 'Otto',
            'ja': 'オットー'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#12',
          'id': 12,
          'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
          'isMine': false,
          'name': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#13',
          'id': 13,
          'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
          'isMine': false,
          'name': {
            'en': 'Pamela',
            'ja': 'パメラ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#14',
          'id': 14,
          'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
          'isMine': false,
          'name': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          },
          'status': 'alive'
        }
      ],
      mine: {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': 'alive'
      }
    },
    base: {
      ... base,
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': 'private',
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'characterLimit': 10,
        'id': 3,
        'lang': 'ja',
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    roles: {
      ... roles,
      all: [
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#villager',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'negative'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/villager.jpg',
          'isMine': false,
          'name': {
            'en': 'Villager',
            'ja': '村人'
          },
          'numberOfAgents': 6
        },
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#seer',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'positive'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/seer.jpg',
          'isMine': true,
          'name': {
            'en': 'Seer',
            'ja': '占い師'
          },
          'numberOfAgents': 1
        },
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#medium',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'negative'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/medium.jpg',
          'isMine': false,
          'name': {
            'en': 'Medium',
            'ja': '霊媒師'
          },
          'numberOfAgents': 1
        },
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'negative'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/hunter.jpg',
          'isMine': false,
          'name': {
            'en': 'Hunter',
            'ja': '狩人'
          },
          'numberOfAgents': 1
        },
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#mason',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'negative'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/mason.jpg',
          'isMine': false,
          'name': {
            'en': 'Mason',
            'ja': '共有者'
          },
          'numberOfAgents': 2
        },
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#madman',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'negative'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/madman.jpg',
          'isMine': false,
          'name': {
            'en': 'Madman',
            'ja': '狂人'
          },
          'numberOfAgents': 1
        },
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'negative'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
          'isMine': false,
          'name': {
            'en': 'Werewolf',
            'ja': '人狼'
          },
          'numberOfAgents': 2
        },
        {
          '@context': village.Context.Role,
          '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1',
              'agent': {
                '@context': village.Context.Agent,
                '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': village.Phase.morning,
              'polarity': 'negative'
            }
          ],
          'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
          'isMine': false,
          'name': {
            'en': 'Werehamster',
            'ja': 'ハムスター人間'
          },
          'numberOfAgents': 1
        }
      ],
      mine: {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
      }
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
    roleId: VILLAGER,
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
    'clientTimestamp': expect.any(String),
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
      'characterLimit': 10,
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
      fetch(`${BASE_URI}/boardMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/board.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/role.json`)
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
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload,
      type: ActionTypes.socket.SEND
    })
  })
})
describe('POST_CHAT', () => {
  const store = fakeStore({
    agents: {
      ... agents,
      all: [],
      mine: {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': 'alive'
      }
    },
    base: {
      ... base,
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': 'private',
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'characterLimit': 10,
        'id': 3,
        'lang': 'ja',
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    roles: {
      ... roles,
      all: [],
      mine: {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
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
    'clientTimestamp': expect.any(String),
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
      'characterLimit': 10,
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
      fetch(`${BASE_URI}/playerMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
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
    actionHandler(action)
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
    type: 'ready',
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
    agents: {
      ... agents,
      all: [
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#0',
          'id': 0,
          'image': 'https://werewolf.world/image/0.2/Gert.jpg',
          'isMine': false,
          'name': {
            'en': 'Gert',
            'ja': 'ゲルト'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#1',
          'id': 1,
          'image': 'https://werewolf.world/image/0.2/Walter.jpg',
          'isMine': true,
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#2',
          'id': 2,
          'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
          'isMine': false,
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#3',
          'id': 3,
          'image': 'https://werewolf.world/image/0.2/Simson.jpg',
          'isMine': false,
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#4',
          'id': 4,
          'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
          'isMine': false,
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#5',
          'id': 5,
          'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
          'isMine': false,
          'name': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#6',
          'id': 6,
          'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
          'isMine': false,
          'name': {
            'en': 'Dieter',
            'ja': 'ディーター'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#7',
          'id': 7,
          'image': 'https://werewolf.world/image/0.2/Peter.jpg',
          'isMine': false,
          'name': {
            'en': 'Peter',
            'ja': 'ペーター'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#8',
          'id': 8,
          'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
          'isMine': false,
          'name': {
            'en': 'Lisa',
            'ja': 'リーザ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#9',
          'id': 9,
          'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
          'isMine': false,
          'name': {
            'en': 'Alvin',
            'ja': 'アルビン'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#10',
          'id': 10,
          'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
          'isMine': false,
          'name': {
            'en': 'Catalina',
            'ja': 'カタリナ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#11',
          'id': 11,
          'image': 'https://werewolf.world/image/0.2/Otto.jpg',
          'isMine': false,
          'name': {
            'en': 'Otto',
            'ja': 'オットー'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#12',
          'id': 12,
          'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
          'isMine': false,
          'name': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#13',
          'id': 13,
          'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
          'isMine': false,
          'name': {
            'en': 'Pamela',
            'ja': 'パメラ'
          },
          'status': 'alive'
        },
        {
          '@context': village.Context.Agent,
          '@id': 'https://licos.online/state/0.2/village#3/agent#14',
          'id': 14,
          'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
          'isMine': false,
          'name': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          },
          'status': 'alive'
        }
      ],
      mine: {
        '@context': village.Context.Agent,
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'id': 1,
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'status': 'alive'
      }
    },
    base: {
      ... base,
      '@id': 'https://licos.online/state/0.2/village#3',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'intensionalDisclosureRange': 'private',
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'characterLimit': 10,
        'id': 3,
        'lang': 'ja',
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    roles: {
      ... roles,
      all: [],
      mine: {
        '@context': village.Context.Role,
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'isMine': true,
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1
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
    'clientTimestamp': expect.any(String),
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
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'village': {
      '@context': village.Context.Village,
      '@id': 'https://licos.online/state/0.2/village',
      'characterLimit': 10,
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
      fetch(`${BASE_URI}/voteMessage.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/agent.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/base.json`)
        .then(res => res.json()),
      fetch(`${BASE_URI}/chat.json`)
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
    actionHandler(action)
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
      type: 'receivedFlavorTextMessage',
      villageId
    }

    test('validate the JSON of play', async () => {
      const ajv = new Ajv()

      expect.hasAssertions()
      await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedFlavorTextMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
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
      type: 'receivedPlayerMessage',
      villageId
    }

    test('validate the JSON of play', async () => {
      const ajv = new Ajv()

      expect.hasAssertions()
      await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedPlayerMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/base.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
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
      type: 'receivedSystemMessage',
      villageId
    }

    test('validate the JSON of play', async () => {
      const ajv = new Ajv()

      expect.hasAssertions()
      await Promise.all([
        fetch(`${BASE_URI}/receipt/receivedSystemMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/village.json`)
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
      actionHandler(action)
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        payload,
        type: ActionTypes.socket.SEND
      })
    })
  })
})
