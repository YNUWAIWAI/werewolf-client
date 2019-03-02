/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {day, night} from './fakeServer'
import reducer, {initialState} from './commandSelection'
import {socket} from '../actions'

test('CHANGE_PHASE', () => {
  expect(
    reducer(
      initialState,
      {
        from: village.Phase.day,
        to: village.Phase.night,
        type: ActionTypes.global.CHANGE_PHASE
      }
    )
  ).toEqual({
    ... initialState,
    fixed: false
  })
})
test('SELECT_YES', () => {
  const agents = [
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
  ]

  expect(
    reducer(
      {
        agents,
        fixed: false
      },
      {
        agentId: 2,
        type: ActionTypes.global.SELECT_YES
      }
    )
  ).toEqual({
    agents: [
      {
        '@id': 'https://licos.online/state/0.2/village#3/agent#2',
        'id': 2,
        'image': 'https://werewolf.world/image/0.2/Moritz.jpg',
        'name': {
          en: 'Moritz',
          ja: 'モーリッツ'
        }
      }
    ],
    fixed: true
  })
})
describe('socket/MESSAGE', () => {
  describe('systemMessage', () => {
    test('phase: day', () => {
      expect(
        reducer(
          initialState,
          socket.message(day)
        )
      ).toEqual({
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
        fixed: false
      })
    })
    test('phase: night', () => {
      expect(
        reducer(
          initialState,
          socket.message(night)
        )
      ).toEqual({
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
        fixed: false
      })
    })
  })
})
