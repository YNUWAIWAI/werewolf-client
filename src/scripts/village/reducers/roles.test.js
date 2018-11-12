// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './roles'
import {firstDayConversation} from './fakeServer'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      {
        payload: firstDayConversation,
        type: ActionTypes.socket.MESSAGE
      }
    )
  ).toEqual({
    all: [
      {
        '@id': 'https://werewolf.world/resource/0.2/villager',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/villager.jpg',
        'name': {
          'en': 'Villager',
          'ja': '村人'
        },
        'numberOfAgents': 6,
        'roleIsMine': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/seer',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'positive'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/seer.jpg',
        'name': {
          'en': 'Seer',
          'ja': '占い師'
        },
        'numberOfAgents': 1,
        'roleIsMine': true
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/medium',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/medium.jpg',
        'name': {
          'en': 'Medium',
          'ja': '霊媒師'
        },
        'numberOfAgents': 1,
        'roleIsMine': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/hunter',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/hunter.jpg',
        'name': {
          'en': 'Hunter',
          'ja': '狩人'
        },
        'numberOfAgents': 1,
        'roleIsMine': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/mason',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/mason.jpg',
        'name': {
          'en': 'Mason',
          'ja': '共有者'
        },
        'numberOfAgents': 2,
        'roleIsMine': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/madman',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/madman.jpg',
        'name': {
          'en': 'Madman',
          'ja': '狂人'
        },
        'numberOfAgents': 1,
        'roleIsMine': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/werewolf',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/werewolf.jpg',
        'name': {
          'en': 'Werewolf',
          'ja': '人狼'
        },
        'numberOfAgents': 2,
        'roleIsMine': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/werehamster',
        'board': [
          {
            'boardAgent': {
              '@id': 'https://werewolf.world/resource/0.2/Walter',
              'boardAgentId': 1,
              'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
              'boardAgentName': {
                'en': 'Walter',
                'ja': 'ヴァルター'
              }
            },
            'boardDate': 1,
            'boardPhase': 'day conversation',
            'boardPolarity': 'negative'
          }
        ],
        'image': 'https://werewolf.world/image/0.2/werehamster.jpg',
        'name': {
          'en': 'Werehamster',
          'ja': 'ハムスター人間'
        },
        'numberOfAgents': 1,
        'roleIsMine': false
      }
    ],
    mine: {
      '@id': 'https://werewolf.world/resource/0.2/seer',
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.2/Walter',
            'boardAgentId': 1,
            'boardAgentImage': 'https://werewolf.world/image/0.2/Walter.jpg',
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          'boardDate': 1,
          'boardPhase': 'day conversation',
          'boardPolarity': 'positive'
        }
      ],
      'image': 'https://werewolf.world/image/0.2/seer.jpg',
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'numberOfAgents': 1,
      'roleIsMine': true
    }
  })
})
