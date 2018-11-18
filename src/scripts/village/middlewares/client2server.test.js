// @flow
import * as ActionTypes from '../constants/ActionTypes'
import Ajv from 'ajv'
import {CIRCLE} from '../constants/State'
import {VERSION} from '../constants/Version'
import {VILLAGER} from '../constants/Role'
import {initialState as agents} from '../reducers/agents'
import {initialState as base} from '../reducers/base'
import {initialState as chat} from '../reducers/chat'
import {initialState as commandInputBox} from '../reducers/commandInputBox'
import {initialState as commandSelection} from '../reducers/commandSelection'
import fetch from 'node-fetch'
import {initialState as hideButton} from '../reducers/hideButton'
import {initialState as language} from '../reducers/language'
import middleware from './client2server'
import {initialState as modal} from '../reducers/modal'
import {initialState as obfucator} from '../reducers/obfucator'
import {initialState as prediction} from '../reducers/prediction'
import {initialState as result} from '../reducers/result'
import {initialState as roles} from '../reducers/roles'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('CHANGE_PREDICTION_BOARD', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    agents: {
      ... agents,
      all: [
        {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
      clientTimestamp: '2006-10-07T12:06:56.568+09:00',
      date: 1,
      intensionalDisclosureRange: 'private',
      phase: 'morning',
      phaseStartTime: '2006-10-07T12:06:56.568+09:00',
      phaseTimeLimit: 600,
      serverTimestamp: '2006-10-07T12:06:56.568+09:00',
      token: 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      village: {
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    chat,
    commandInputBox,
    commandSelection,
    hideButton,
    language,
    modal,
    obfucator,
    prediction,
    result,
    roles: {
      ... roles,
      all: [
        {
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#villager',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#villager/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#seer',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#seer/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#medium',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#medium/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#hunter/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#mason',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#mason/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#madman',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#madman/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#werewolf/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
          '@context': 'https://werewolf.world/context/0.2/role.jsonld',
          '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
          'board': [
            {
              '@context': 'https://werewolf.world/context/0.2/boardResult.jsonld',
              '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1',
              'agent': {
                '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
                '@id': 'https://licos.online/state/0.2/village#3/role#werehamster/board#1/agent#1',
                'id': 1,
                'image': 'https://werewolf.world/image/0.2/Walter.jpg',
                'name': {
                  'en': 'Walter',
                  'ja': 'ヴァルター'
                }
              },
              'date': 1,
              'phase': 'morning',
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
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    nextState: CIRCLE,
    playerId: 2,
    roleId: VILLAGER,
    type: ActionTypes.CHANGE_PREDICTION_BOARD
  }
  const payload = {
    '@context': [
      'https://werewolf.world/context/0.2/base.jsonld',
      'https://werewolf.world/context/0.2/board.jsonld'
    ],
    '@id': 'https://werewolf.world/resource/0.2/boardMessage',
    'village': {
      '@context': 'https://werewolf.world/context/0.2/village.jsonld',
      '@id': 'https://licos.online/state/0.2/village',
      'id': 3,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    },
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'phase': 'morning',
    'date': 1,
    'phaseTimeLimit': 600,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'clientTimestamp': expect.any(String),
    'directionality': 'client to server',
    'intensionalDisclosureRange': 'private',
    'extensionalDisclosureRange': [],
    'myAgent': {
      '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'role': {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    },
    'agent': {
      '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      }
    },
    'prediction': CIRCLE,
    'role': {
      '@context': 'https://werewolf.world/context/0.2/role.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'image': 'https://werewolf.world/image/0.2/villager.jpg',
      'name': {
        'en': 'Villager',
        'ja': '村人'
      }
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
  const dispatch = jest.fn()
  const getState = () => ({
    agents: {
      ... agents,
      all: [],
      mine: {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
      clientTimestamp: '2006-10-07T12:06:56.568+09:00',
      date: 1,
      intensionalDisclosureRange: 'private',
      phase: 'morning',
      phaseStartTime: '2006-10-07T12:06:56.568+09:00',
      phaseTimeLimit: 600,
      serverTimestamp: '2006-10-07T12:06:56.568+09:00',
      token: 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      village: {
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    chat,
    commandInputBox,
    commandSelection,
    hideButton,
    language,
    modal,
    obfucator,
    prediction,
    result,
    roles: {
      ... roles,
      all: [],
      mine: {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    kind: 'public',
    text: 'text',
    type: ActionTypes.POST_CHAT
  }
  const payload = {
    '@context': [
      'https://werewolf.world/context/0.2/base.jsonld',
      'https://werewolf.world/context/0.2/chat.jsonld'
    ],
    '@id': 'https://werewolf.world/resource/0.2/playerMessage',
    'village': {
      '@context': 'https://werewolf.world/context/0.2/village.jsonld',
      '@id': 'https://licos.online/state/0.2/village',
      'id': 3,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    },
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'phase': 'morning',
    'date': 1,
    'phaseTimeLimit': 600,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'clientTimestamp': expect.any(String),
    'directionality': 'client to server',
    'intensionalDisclosureRange': 'public',
    'extensionalDisclosureRange': [],
    'myAgent': {
      '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'role': {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    },
    'agent': {
      '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      }
    },
    'characterLimit': 140,
    'isMine': true,
    'isOver': false,
    'text': {
      '@language': 'ja',
      '@value': 'text'
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
describe('SELECT_YES', () => {
  const dispatch = jest.fn()
  const getState = () => ({
    agents: {
      ... agents,
      all: [
        {
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
          '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
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
      clientTimestamp: '2006-10-07T12:06:56.568+09:00',
      date: 1,
      intensionalDisclosureRange: 'private',
      phase: 'morning',
      phaseStartTime: '2006-10-07T12:06:56.568+09:00',
      phaseTimeLimit: 600,
      serverTimestamp: '2006-10-07T12:06:56.568+09:00',
      token: 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      village: {
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    },
    chat,
    commandInputBox,
    commandSelection,
    hideButton,
    language,
    modal,
    obfucator,
    prediction,
    result,
    roles: {
      ... roles,
      all: [],
      mine: {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
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
  const nextHandler = middleware({
    dispatch,
    getState
  })
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action = {
    agentId: 2,
    type: ActionTypes.SELECT_YES
  }
  const payload = {
    '@context': [
      'https://werewolf.world/context/0.2/base.jsonld',
      'https://werewolf.world/context/0.2/vote.jsonld'
    ],
    '@id': 'https://werewolf.world/resource/0.2/voteMessage',
    'village': {
      '@context': 'https://werewolf.world/context/0.2/village.jsonld',
      '@id': 'https://licos.online/state/0.2/village',
      'id': 3,
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    },
    'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    'phase': 'morning',
    'date': 1,
    'phaseTimeLimit': 600,
    'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
    'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
    'clientTimestamp': expect.any(String),
    'directionality': 'client to server',
    'intensionalDisclosureRange': 'private',
    'extensionalDisclosureRange': [],
    'myAgent': {
      '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'role': {
        '@context': 'https://werewolf.world/context/0.2/role.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/role#seer',
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        }
      }
    },
    'agent': {
      '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
      'name': {
        'en': 'Moritz',
        'ja': 'モーリッツ'
      }
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
