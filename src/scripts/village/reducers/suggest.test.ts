import {firstMorning, flavorText, myMessageOnChat} from './fakeServer'
import reducer, {initialState} from './suggest'
import {Agent} from '../constants/Agent'
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
            id: Agent.a.en,
            name: Agent.a
          },
          {
            id: Agent.b.en,
            name: Agent.b
          },
          {
            id: Agent.c.en,
            name: Agent.c
          },
          {
            id: Agent.d.en,
            name: Agent.d
          },
          {
            id: Agent.e.en,
            name: Agent.e
          },
          {
            id: Agent.f.en,
            name: Agent.f
          },
          {
            id: Agent.g.en,
            name: Agent.g
          },
          {
            id: Agent.h.en,
            name: Agent.h
          },
          {
            id: Agent.i.en,
            name: Agent.i
          },
          {
            id: Agent.j.en,
            name: Agent.j
          },
          {
            id: Agent.k.en,
            name: Agent.k
          },
          {
            id: Agent.l.en,
            name: Agent.l
          },
          {
            id: Agent.m.en,
            name: Agent.m
          },
          {
            id: Agent.n.en,
            name: Agent.n
          },
          {
            id: Agent.o.en,
            name: Agent.o
          },
          {
            id: 'hunter',
            name: {
              'en': 'Hunter',
              'ja': 'ハンター'
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
