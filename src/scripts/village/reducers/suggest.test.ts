import {firstMorning, flavorText, myMessageOnChat} from './fakeServer'
import reducer, {initialState} from './suggest'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('firstMorning', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning)
      )
    ).toEqual(
      {
        data: [
          {
            id: 'Alvin',
            name: {
              'en': 'Alvin',
              'ja': 'アルビン'
            }
          },
          {
            id: 'Catalina',
            name: {
              'en': 'Catalina',
              'ja': 'カタリナ'
            }
          },
          {
            id: 'Dieter',
            name: {
              'en': 'Dieter',
              'ja': 'ディーター'
            }
          },
          {
            id: 'Gert',
            name: {
              'en': 'Gert',
              'ja': 'ゲルト'
            }
          },
          {
            id: 'Jacob',
            name: {
              'en': 'Jacob',
              'ja': 'ヤコブ'
            }
          },
          {
            id: 'Joachim',
            name: {
              'en': 'Joachim',
              'ja': 'ヨアヒム'
            }
          },
          {
            id: 'Lisa',
            name: {
              'en': 'Lisa',
              'ja': 'リーザ'
            }
          },
          {
            id: 'Moritz',
            name: {
              'en': 'Moritz',
              'ja': 'モーリッツ'
            }
          },
          {
            id: 'Nicholas',
            name: {
              'en': 'Nicholas',
              'ja': 'ニコラス'
            }
          },
          {
            id: 'Otto',
            name: {
              'en': 'Otto',
              'ja': 'オットー'
            }
          },
          {
            id: 'Pamela',
            name: {
              'en': 'Pamela',
              'ja': 'パメラ'
            }
          },
          {
            id: 'Peter',
            name: {
              'en': 'Peter',
              'ja': 'ペーター'
            }
          },
          {
            id: 'Simson',
            name: {
              'en': 'Simson',
              'ja': 'ジムゾン'
            }
          },
          {
            id: 'Thomas',
            name: {
              'en': 'Thomas',
              'ja': 'トーマス'
            }
          },
          {
            id: 'Walter',
            name: {
              'en': 'Walter',
              'ja': 'ヴァルター'
            }
          },
          {
            id: 'hunter',
            name: {
              'en': 'Hunter',
              'ja': '狩人'
            }
          },
          {
            id: 'madman',
            name: {
              'en': 'Madman',
              'ja': '狂人'
            }
          },
          {
            id: 'mason',
            name: {
              'en': 'Mason',
              'ja': '共有者'
            }
          },
          {
            id: 'master',
            name: {
              'en': 'Master',
              'ja': 'マスター'
            }
          },
          {
            id: 'medium',
            name: {
              'en': 'Medium',
              'ja': '霊媒師'
            }
          },
          {
            id: 'seer',
            name: {
              'en': 'Seer',
              'ja': '占い師'
            }
          },
          {
            id: 'villager',
            name: {
              'en': 'Villager',
              'ja': '村人'
            }
          },
          {
            id: 'werehamster',
            name: {
              'en': 'Werehamster',
              'ja': 'ハムスター人間'
            }
          },
          {
            id: 'werewolf',
            name: {
              'en': 'Werewolf',
              'ja': '人狼'
            }
          }
        ]
      }
    )
  })
  test('flavorText', () => {
    expect(
      reducer(
        initialState,
        socket.message(flavorText)
      )
    ).toEqual(
      initialState
    )
  })
  test('myMessageOnChat', () => {
    expect(
      reducer(
        initialState,
        socket.message(myMessageOnChat)
      )
    ).toEqual(
      initialState
    )
  })
})
