// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './roles'
import {firstMorning} from './fakeServer'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      {
        payload: firstMorning,
        type: ActionTypes.socket.MESSAGE
      }
    )
  ).toEqual({
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
    }
  })
})
