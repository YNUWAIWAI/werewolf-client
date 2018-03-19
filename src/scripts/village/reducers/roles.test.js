// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation} from './fakeServer'
import reducer from './roles'

test('initial state', () => {
  expect(reducer(undefined, {})).toEqual([])
})
test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      [],
      {
        payload: firstDayConversation,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual([
    {
      '@id': 'https://werewolf.world/resource/0.1/villager',
      'roleIsMine': false,
      'name': {
        'en': 'Villager',
        'ja': '村人'
      },
      'image': 'https://werewolf.world/image/0.1/villager.jpg',
      'numberOfAgents': 6,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/seer',
      'roleIsMine': true,
      'name': {
        'en': 'Seer',
        'ja': '占い師'
      },
      'image': 'https://werewolf.world/image/0.1/seer.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'positive',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/medium',
      'roleIsMine': false,
      'name': {
        'en': 'Medium',
        'ja': '霊媒師'
      },
      'image': 'https://werewolf.world/image/0.1/medium.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/hunter',
      'roleIsMine': false,
      'name': {
        'en': 'Hunter',
        'ja': '狩人'
      },
      'image': 'https://werewolf.world/image/0.1/hunter.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/mason',
      'roleIsMine': false,
      'name': {
        'en': 'Mason',
        'ja': '共有者'
      },
      'image': 'https://werewolf.world/image/0.1/mason.jpg',
      'numberOfAgents': 2,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/madman',
      'roleIsMine': false,
      'name': {
        'en': 'Madman',
        'ja': '狂人'
      },
      'image': 'https://werewolf.world/image/0.1/madman.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/werewolf',
      'roleIsMine': false,
      'name': {
        'en': 'Werewolf',
        'ja': '人狼'
      },
      'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
      'numberOfAgents': 2,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    },
    {
      '@id': 'https://werewolf.world/resource/0.1/werehumster',
      'roleIsMine': false,
      'name': {
        'en': 'Werehumster',
        'ja': 'ハムスター人間'
      },
      'image': 'https://werewolf.world/image/0.1/werehumster.jpg',
      'numberOfAgents': 1,
      'board': [
        {
          'boardAgent': {
            '@id': 'https://werewolf.world/resource/0.1/Walter',
            'boardAgentId': 1,
            'boardAgentName': {
              'en': 'Walter',
              'ja': 'ヴァルター'
            },
            'boardAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg'
          },
          'boardPolarity': 'negative',
          'boardPhase': 'day conversation',
          'boardDate': 1
        }
      ]
    }
  ])
})
