// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {day, night} from './fakeServer'
import reducer, {initialState} from './commandSelection'

test('CHANGE_PHASE', () => {
  expect(
    reducer(
      initialState,
      {
        from: 'day',
        to: 'night',
        type: ActionTypes.CHANGE_PHASE
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
      id: 2,
      image: 'https://werewolf.world/image/0.2/Moritz.jpg',
      name: {
        en: 'Moritz',
        ja: 'モーリッツ'
      }
    },
    {
      id: 3,
      image: 'https://werewolf.world/image/0.2/Simson.jpg',
      name: {
        en: 'Simson',
        ja: 'ジムゾン'
      }
    },
    {
      id: 4,
      image: 'https://werewolf.world/image/0.2/Thomas.jpg',
      name: {
        en: 'Thomas',
        ja: 'トーマス'
      }
    },
    {
      id: 5,
      image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
      name: {
        en: 'Nicholas',
        ja: 'ニコラス'
      }
    },
    {
      id: 6,
      image: 'https://werewolf.world/image/0.2/Dieter.jpg',
      name: {
        en: 'Dieter',
        ja: 'ディーター'
      }
    },
    {
      id: 7,
      image: 'https://werewolf.world/image/0.2/Peter.jpg',
      name: {
        en: 'Peter',
        ja: 'ペーター'
      }
    },
    {
      id: 8,
      image: 'https://werewolf.world/image/0.2/Lisa.jpg',
      name: {
        en: 'Lisa',
        ja: 'リーザ'
      }
    },
    {
      id: 9,
      image: 'https://werewolf.world/image/0.2/Alvin.jpg',
      name: {
        en: 'Alvin',
        ja: 'アルビン'
      }
    },
    {
      id: 10,
      image: 'https://werewolf.world/image/0.2/Catalina.jpg',
      name: {
        en: 'Catalina',
        ja: 'カタリナ'
      }
    },
    {
      id: 11,
      image: 'https://werewolf.world/image/0.2/Otto.jpg',
      name: {
        en: 'Otto',
        ja: 'オットー'
      }
    },
    {
      id: 12,
      image: 'https://werewolf.world/image/0.2/Joachim.jpg',
      name: {
        en: 'Joachim',
        ja: 'ヨアヒム'
      }
    },
    {
      id: 13,
      image: 'https://werewolf.world/image/0.2/Pamela.jpg',
      name: {
        en: 'Pamela',
        ja: 'パメラ'
      }
    },
    {
      id: 14,
      image: 'https://werewolf.world/image/0.2/Jacob.jpg',
      name: {
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
        type: ActionTypes.SELECT_YES
      }
    )
  ).toEqual({
    agents: [
      {
        id: 2,
        image: 'https://werewolf.world/image/0.2/Moritz.jpg',
        name: {
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
          {
            payload: day,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual({
        agents: [
          {
            id: 2,
            image: 'https://werewolf.world/image/0.2/Moritz.jpg',
            name: {
              en: 'Moritz',
              ja: 'モーリッツ'
            }
          },
          {
            id: 3,
            image: 'https://werewolf.world/image/0.2/Simson.jpg',
            name: {
              en: 'Simson',
              ja: 'ジムゾン'
            }
          },
          {
            id: 4,
            image: 'https://werewolf.world/image/0.2/Thomas.jpg',
            name: {
              en: 'Thomas',
              ja: 'トーマス'
            }
          },
          {
            id: 5,
            image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
            name: {
              en: 'Nicholas',
              ja: 'ニコラス'
            }
          },
          {
            id: 6,
            image: 'https://werewolf.world/image/0.2/Dieter.jpg',
            name: {
              en: 'Dieter',
              ja: 'ディーター'
            }
          },
          {
            id: 7,
            image: 'https://werewolf.world/image/0.2/Peter.jpg',
            name: {
              en: 'Peter',
              ja: 'ペーター'
            }
          },
          {
            id: 8,
            image: 'https://werewolf.world/image/0.2/Lisa.jpg',
            name: {
              en: 'Lisa',
              ja: 'リーザ'
            }
          },
          {
            id: 9,
            image: 'https://werewolf.world/image/0.2/Alvin.jpg',
            name: {
              en: 'Alvin',
              ja: 'アルビン'
            }
          },
          {
            id: 10,
            image: 'https://werewolf.world/image/0.2/Catalina.jpg',
            name: {
              en: 'Catalina',
              ja: 'カタリナ'
            }
          },
          {
            id: 11,
            image: 'https://werewolf.world/image/0.2/Otto.jpg',
            name: {
              en: 'Otto',
              ja: 'オットー'
            }
          },
          {
            id: 12,
            image: 'https://werewolf.world/image/0.2/Joachim.jpg',
            name: {
              en: 'Joachim',
              ja: 'ヨアヒム'
            }
          },
          {
            id: 13,
            image: 'https://werewolf.world/image/0.2/Pamela.jpg',
            name: {
              en: 'Pamela',
              ja: 'パメラ'
            }
          },
          {
            id: 14,
            image: 'https://werewolf.world/image/0.2/Jacob.jpg',
            name: {
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
          {
            payload: night,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual({
        agents: [
          {
            id: 2,
            image: 'https://werewolf.world/image/0.2/Moritz.jpg',
            name: {
              en: 'Moritz',
              ja: 'モーリッツ'
            }
          },
          {
            id: 3,
            image: 'https://werewolf.world/image/0.2/Simson.jpg',
            name: {
              en: 'Simson',
              ja: 'ジムゾン'
            }
          },
          {
            id: 4,
            image: 'https://werewolf.world/image/0.2/Thomas.jpg',
            name: {
              en: 'Thomas',
              ja: 'トーマス'
            }
          },
          {
            id: 5,
            image: 'https://werewolf.world/image/0.2/Nicholas.jpg',
            name: {
              en: 'Nicholas',
              ja: 'ニコラス'
            }
          },
          {
            id: 6,
            image: 'https://werewolf.world/image/0.2/Dieter.jpg',
            name: {
              en: 'Dieter',
              ja: 'ディーター'
            }
          },
          {
            id: 7,
            image: 'https://werewolf.world/image/0.2/Peter.jpg',
            name: {
              en: 'Peter',
              ja: 'ペーター'
            }
          },
          {
            id: 9,
            image: 'https://werewolf.world/image/0.2/Alvin.jpg',
            name: {
              en: 'Alvin',
              ja: 'アルビン'
            }
          },
          {
            id: 10,
            image: 'https://werewolf.world/image/0.2/Catalina.jpg',
            name: {
              en: 'Catalina',
              ja: 'カタリナ'
            }
          },
          {
            id: 11,
            image: 'https://werewolf.world/image/0.2/Otto.jpg',
            name: {
              en: 'Otto',
              ja: 'オットー'
            }
          },
          {
            id: 12,
            image: 'https://werewolf.world/image/0.2/Joachim.jpg',
            name: {
              en: 'Joachim',
              ja: 'ヨアヒム'
            }
          },
          {
            id: 13,
            image: 'https://werewolf.world/image/0.2/Pamela.jpg',
            name: {
              en: 'Pamela',
              ja: 'パメラ'
            }
          },
          {
            id: 14,
            image: 'https://werewolf.world/image/0.2/Jacob.jpg',
            name: {
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
