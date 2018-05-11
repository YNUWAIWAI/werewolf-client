// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation, firstDayConversationVillager} from './fakeServer'
import reducer, {initialState} from './prediction'

test('SOCKET_MESSAGE my role is seer', () => {
  expect(
    reducer(
      initialState,
      {
        payload: firstDayConversation,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual(
    {
      playerStatus: [
        {
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'image': 'https://werewolf.world/image/0.1/Walter.jpg',
          'id': 1,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
          'id': 2,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'image': 'https://werewolf.world/image/0.1/Simson.jpg',
          'id': 3,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
          'id': 4,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          },
          'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
          'id': 5,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Dieter',
            'ja': 'ディーター'
          },
          'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
          'id': 6,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Peter',
            'ja': 'ペーター'
          },
          'image': 'https://werewolf.world/image/0.1/Peter.jpg',
          'id': 7,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Lisa',
            'ja': 'リーザ'
          },
          'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
          'id': 8,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Alvin',
            'ja': 'アルビン'
          },
          'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
          'id': 9,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Otto',
            'ja': 'オットー'
          },
          'image': 'https://werewolf.world/image/0.1/Otto.jpg',
          'id': 11,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          },
          'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
          'id': 12,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Pamela',
            'ja': 'パメラ'
          },
          'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
          'id': 13,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          },
          'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
          'id': 14,
          'status': 'alive'
        }
      ],
      roleStatus: [
        {
          'id': 'villager',
          'image': 'https://werewolf.world/image/0.1/villager.jpg',
          'numberOfAgents': 6,
          'tooltip': {
            'en': 'Villager',
            'ja': '村人'
          }
        },
        {
          'id': 'seer',
          'image': 'https://werewolf.world/image/0.1/seer.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Seer',
            'ja': '占い師'
          }
        },
        {
          'id': 'medium',
          'image': 'https://werewolf.world/image/0.1/medium.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Medium',
            'ja': '霊媒師'
          }
        },
        {
          'id': 'hunter',
          'image': 'https://werewolf.world/image/0.1/hunter.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Hunter',
            'ja': '狩人'
          }
        },
        {
          'id': 'mason',
          'image': 'https://werewolf.world/image/0.1/mason.jpg',
          'numberOfAgents': 2,
          'tooltip': {
            'en': 'Mason',
            'ja': '共有者'
          }
        },
        {
          'id': 'madman',
          'image': 'https://werewolf.world/image/0.1/madman.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Madman',
            'ja': '狂人'
          }
        },
        {
          'id': 'werewolf',
          'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
          'numberOfAgents': 2,
          'tooltip': {
            'en': 'Werewolf',
            'ja': '人狼'
          }
        },
        {
          'id': 'werehumster',
          'image': 'https://werewolf.world/image/0.1/werehumster.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Werehumster',
            'ja': 'ハムスター人間'
          }
        }
      ],
      table: {
        '1': {
          villager: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'O'
          },
          medium: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          hunter: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          mason: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          madman: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          werewolf: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          werehumster: {
            date: 1,
            fixed: true,
            state: 'fill'
          }
        },
        '2': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '3': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '4': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '5': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '6': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '7': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '8': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '9': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '11': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '12': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '13': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '14': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        }
      }
    }
  )
})
test('SOCKET_MESSAGE my role is villager', () => {
  expect(
    reducer(
      initialState,
      {
        payload: firstDayConversationVillager,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual(
    {
      playerStatus: [
        {
          'name': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'image': 'https://werewolf.world/image/0.1/Walter.jpg',
          'id': 1,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Moritz',
            'ja': 'モーリッツ'
          },
          'image': 'https://werewolf.world/image/0.1/Moritz.jpg',
          'id': 2,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Simson',
            'ja': 'ジムゾン'
          },
          'image': 'https://werewolf.world/image/0.1/Simson.jpg',
          'id': 3,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Thomas',
            'ja': 'トーマス'
          },
          'image': 'https://werewolf.world/image/0.1/Thomas.jpg',
          'id': 4,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Nicholas',
            'ja': 'ニコラス'
          },
          'image': 'https://werewolf.world/image/0.1/Nicholas.jpg',
          'id': 5,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Dieter',
            'ja': 'ディーター'
          },
          'image': 'https://werewolf.world/image/0.1/Dieter.jpg',
          'id': 6,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Peter',
            'ja': 'ペーター'
          },
          'image': 'https://werewolf.world/image/0.1/Peter.jpg',
          'id': 7,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Lisa',
            'ja': 'リーザ'
          },
          'image': 'https://werewolf.world/image/0.1/Lisa.jpg',
          'id': 8,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Alvin',
            'ja': 'アルビン'
          },
          'image': 'https://werewolf.world/image/0.1/Alvin.jpg',
          'id': 9,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Otto',
            'ja': 'オットー'
          },
          'image': 'https://werewolf.world/image/0.1/Otto.jpg',
          'id': 11,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Joachim',
            'ja': 'ヨアヒム'
          },
          'image': 'https://werewolf.world/image/0.1/Joachim.jpg',
          'id': 12,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Pamela',
            'ja': 'パメラ'
          },
          'image': 'https://werewolf.world/image/0.1/Pamela.jpg',
          'id': 13,
          'status': 'alive'
        },
        {
          'name': {
            'en': 'Jacob',
            'ja': 'ヤコブ'
          },
          'image': 'https://werewolf.world/image/0.1/Jacob.jpg',
          'id': 14,
          'status': 'alive'
        }
      ],
      roleStatus: [
        {
          'id': 'villager',
          'image': 'https://werewolf.world/image/0.1/villager.jpg',
          'numberOfAgents': 6,
          'tooltip': {
            'en': 'Villager',
            'ja': '村人'
          }
        },
        {
          'id': 'seer',
          'image': 'https://werewolf.world/image/0.1/seer.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Seer',
            'ja': '占い師'
          }
        },
        {
          'id': 'medium',
          'image': 'https://werewolf.world/image/0.1/medium.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Medium',
            'ja': '霊媒師'
          }
        },
        {
          'id': 'hunter',
          'image': 'https://werewolf.world/image/0.1/hunter.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Hunter',
            'ja': '狩人'
          }
        },
        {
          'id': 'mason',
          'image': 'https://werewolf.world/image/0.1/mason.jpg',
          'numberOfAgents': 2,
          'tooltip': {
            'en': 'Mason',
            'ja': '共有者'
          }
        },
        {
          'id': 'madman',
          'image': 'https://werewolf.world/image/0.1/madman.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Madman',
            'ja': '狂人'
          }
        },
        {
          'id': 'werewolf',
          'image': 'https://werewolf.world/image/0.1/werewolf.jpg',
          'numberOfAgents': 2,
          'tooltip': {
            'en': 'Werewolf',
            'ja': '人狼'
          }
        },
        {
          'id': 'werehumster',
          'image': 'https://werewolf.world/image/0.1/werehumster.jpg',
          'numberOfAgents': 1,
          'tooltip': {
            'en': 'Werehumster',
            'ja': 'ハムスター人間'
          }
        }
      ],
      table: {
        '1': {
          villager: {
            date: 1,
            fixed: true,
            state: 'O'
          },
          seer: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          medium: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          hunter: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          mason: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          madman: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          werewolf: {
            date: 1,
            fixed: true,
            state: 'fill'
          },
          werehumster: {
            date: 1,
            fixed: true,
            state: 'fill'
          }
        },
        '2': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '3': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '4': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '5': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '6': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '7': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '8': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '9': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '11': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '12': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '13': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        },
        '14': {
          villager: {
            date: 1,
            fixed: false,
            state: '?'
          },
          seer: {
            date: 1,
            fixed: false,
            state: '?'
          },
          medium: {
            date: 1,
            fixed: false,
            state: '?'
          },
          hunter: {
            date: 1,
            fixed: false,
            state: '?'
          },
          mason: {
            date: 1,
            fixed: false,
            state: '?'
          },
          madman: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werewolf: {
            date: 1,
            fixed: false,
            state: '?'
          },
          werehumster: {
            date: 1,
            fixed: false,
            state: '?'
          }
        }
      }
    }
  )
})
