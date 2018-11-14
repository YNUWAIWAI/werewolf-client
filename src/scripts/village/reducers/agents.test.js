// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './agents'
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
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#0',
        'isMine': false,
        'name': {
          'en': 'Gert',
          'ja': 'ゲルト'
        },
        'image': 'https://werewolf.world/image/0.2/Gert.jpg',
        'id': 0,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#0/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#1',
        'isMine': true,
        'name': {
          'en': 'Walter',
          'ja': 'ヴァルター'
        },
        'image': 'https://werewolf.world/image/0.2/Walter.jpg',
        'id': 1,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'isMine': false,
        'name': {
          'en': 'Moritz',
          'ja': 'モーリッツ'
        },
        'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
        'id': 2,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#2/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#3',
        'isMine': false,
        'name': {
          'en': 'Simson',
          'ja': 'ジムゾン'
        },
        'image': 'https://werewolf.world/image/0.2/Simson.jpg',
        'id': 3,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#3/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#4',
        'isMine': false,
        'name': {
          'en': 'Thomas',
          'ja': 'トーマス'
        },
        'image': 'https://werewolf.world/image/0.2/Thomas.jpg',
        'id': 4,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#4/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#5',
        'isMine': false,
        'name': {
          'en': 'Nicholas',
          'ja': 'ニコラス'
        },
        'image': 'https://werewolf.world/image/0.2/Nicholas.jpg',
        'id': 5,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#5/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#6',
        'isMine': false,
        'name': {
          'en': 'Dieter',
          'ja': 'ディーター'
        },
        'image': 'https://werewolf.world/image/0.2/Dieter.jpg',
        'id': 6,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#6/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#7',
        'isMine': false,
        'name': {
          'en': 'Peter',
          'ja': 'ペーター'
        },
        'image': 'https://werewolf.world/image/0.2/Peter.jpg',
        'id': 7,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#7/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#8',
        'isMine': false,
        'name': {
          'en': 'Lisa',
          'ja': 'リーザ'
        },
        'image': 'https://werewolf.world/image/0.2/Lisa.jpg',
        'id': 8,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#8/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#9',
        'isMine': false,
        'name': {
          'en': 'Alvin',
          'ja': 'アルビン'
        },
        'image': 'https://werewolf.world/image/0.2/Alvin.jpg',
        'id': 9,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#9/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#10',
        'isMine': false,
        'name': {
          'en': 'Catalina',
          'ja': 'カタリナ'
        },
        'image': 'https://werewolf.world/image/0.2/Catalina.jpg',
        'id': 10,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#10/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#11',
        'isMine': false,
        'name': {
          'en': 'Otto',
          'ja': 'オットー'
        },
        'image': 'https://werewolf.world/image/0.2/Otto.jpg',
        'id': 11,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#11/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#12',
        'isMine': false,
        'name': {
          'en': 'Joachim',
          'ja': 'ヨアヒム'
        },
        'image': 'https://werewolf.world/image/0.2/Joachim.jpg',
        'id': 12,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#12/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#13',
        'isMine': false,
        'name': {
          'en': 'Pamela',
          'ja': 'パメラ'
        },
        'image': 'https://werewolf.world/image/0.2/Pamela.jpg',
        'id': 13,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#13/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      },
      {
        '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
        '@id': 'https://licos.online/state/0.2/village#3/agent#14',
        'isMine': false,
        'name': {
          'en': 'Jacob',
          'ja': 'ヤコブ'
        },
        'image': 'https://werewolf.world/image/0.2/Jacob.jpg',
        'id': 14,
        'status': 'alive',
        'update': {
          '@id': 'https://licos.online/state/0.2/village#3/agent#14/update',
          'phase': 'morning',
          'date': 1
        },
        'isAChoice': false
      }
    ],
    mine: {
      '@context': 'https://werewolf.world/context/0.2/agent.jsonld',
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'isMine': true,
      'name': {
        'en': 'Walter',
        'ja': 'ヴァルター'
      },
      'image': 'https://werewolf.world/image/0.2/Walter.jpg',
      'id': 1,
      'status': 'alive',
      'update': {
        '@id': 'https://licos.online/state/0.2/village#3/agent#1/update',
        'phase': 'morning',
        'date': 1
      },
      'isAChoice': false
    }
  })
})
