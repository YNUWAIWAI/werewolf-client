// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './agents'
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
        '@id': 'https://werewolf.world/resource/0.2/Walter',
        'agentIsMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'id': 1,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Moritz',
        'agentIsMine': false,
        'name': {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        },
        'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
        'id': 2,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Simson',
        'agentIsMine': false,
        'name': {
          'en': 'Simson',
          'ja': 'ジムゾン'
        },
        'image': 'https://werewolf.world/image/0.2/Simson.jpg',
        'id': 3,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Thomas',
        'agentIsMine': false,
        'name': {
          'en': 'Thomas',
          'ja': 'トーマス'
        },
        'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
        'id': 4,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Nicholas',
        'agentIsMine': false,
        'name': {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        },
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
        'id': 5,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Dieter',
        'agentIsMine': false,
        'name': {
          'en': 'Dieter',
          'ja': 'ディーター'
        },
        'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
        'id': 6,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Peter',
        'agentIsMine': false,
        'name': {
          'en': 'Peter',
          'ja': 'ペーター'
        },
        'image': 'https://werewolf.world/image/0.2/Peter.jpg',
        'id': 7,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Lisa',
        'agentIsMine': false,
        'name': {
          'en': 'Lisa',
          'ja': 'リーザ'
        },
        'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
        'id': 8,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Alvin',
        'agentIsMine': false,
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
        'id': 9,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Otto',
        'agentIsMine': false,
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'image': 'https://werewolf.world/image/0.2/Otto.jpg',
        'id': 11,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Joachim',
        'agentIsMine': false,
        'name': {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        },
        'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
        'id': 12,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Pamela',
        'agentIsMine': false,
        'name': {
          'en': 'Pamela',
          'ja': 'パメラ'
        },
        'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
        'id': 13,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      },
      {
        '@id': 'https://werewolf.world/resource/0.2/Jacob',
        'agentIsMine': false,
        'name': {
          'en': 'Jacob',
          'ja': 'ヤコブ'
        },
        'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
        'id': 14,
        'status': 'alive',
        'statusUpdatePhase': 'day conversation',
        'statusUpdateDate': 1,
        'isAChoice': false
      }
    ],
    mine: {
      '@id': 'https://werewolf.world/resource/0.2/Walter',
      'agentIsMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'statusUpdatePhase': 'day conversation',
      'statusUpdateDate': 1,
      'isAChoice': false
    }
  })
})
