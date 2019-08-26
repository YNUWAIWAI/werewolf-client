/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {day, night} from './fakeServer'
import reducer, {initialState} from './commandSelection'
import {Agent} from '../constants/Agent'
import ImagePath from '../constants/ImagePath'
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
      'image': ImagePath.Agent.b,
      'name': Agent.b
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'id': 3,
      'image': ImagePath.Agent.c,
      'name': Agent.c
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'id': 4,
      'image': ImagePath.Agent.d,
      'name': Agent.d
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'id': 5,
      'image': ImagePath.Agent.e,
      'name': Agent.e
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#6',
      'id': 6,
      'image': ImagePath.Agent.f,
      'name': Agent.f
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#7',
      'id': 7,
      'image': ImagePath.Agent.g,
      'name': Agent.g
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#8',
      'id': 8,
      'image': ImagePath.Agent.h,
      'name': Agent.h
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#9',
      'id': 9,
      'image': ImagePath.Agent.i,
      'name': Agent.i
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#10',
      'id': 10,
      'image': ImagePath.Agent.j,
      'name': Agent.j
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#11',
      'id': 11,
      'image': ImagePath.Agent.k,
      'name': Agent.k
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#12',
      'id': 12,
      'image': ImagePath.Agent.l,
      'name': Agent.l
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#13',
      'id': 13,
      'image': ImagePath.Agent.m,
      'name': Agent.m
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#14',
      'id': 14,
      'image': ImagePath.Agent.n,
      'name': Agent.n
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#15',
      'id': 15,
      'image': ImagePath.Agent.o,
      'name': Agent.o
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
        'image': ImagePath.Agent.b,
        'name': Agent.b
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
            'image': ImagePath.Agent.b,
            'name': Agent.b
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': ImagePath.Agent.c,
            'name': Agent.c
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#4',
            'id': 4,
            'image': ImagePath.Agent.d,
            'name': Agent.d
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#5',
            'id': 5,
            'image': ImagePath.Agent.e,
            'name': Agent.e
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#6',
            'id': 6,
            'image': ImagePath.Agent.f,
            'name': Agent.f
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#7',
            'id': 7,
            'image': ImagePath.Agent.g,
            'name': Agent.g
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#8',
            'id': 8,
            'image': ImagePath.Agent.h,
            'name': Agent.h
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#9',
            'id': 9,
            'image': ImagePath.Agent.i,
            'name': Agent.i
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#10',
            'id': 10,
            'image': ImagePath.Agent.j,
            'name': Agent.j
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#11',
            'id': 11,
            'image': ImagePath.Agent.k,
            'name': Agent.k
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#12',
            'id': 12,
            'image': ImagePath.Agent.l,
            'name': Agent.l
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#13',
            'id': 13,
            'image': ImagePath.Agent.m,
            'name': Agent.m
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#14',
            'id': 14,
            'image': ImagePath.Agent.n,
            'name': Agent.n
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#15',
            'id': 15,
            'image': ImagePath.Agent.o,
            'name': Agent.o
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
            'image': ImagePath.Agent.b,
            'name': Agent.b
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': ImagePath.Agent.c,
            'name': Agent.c
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#4',
            'id': 4,
            'image': ImagePath.Agent.d,
            'name': Agent.d
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#5',
            'id': 5,
            'image': ImagePath.Agent.e,
            'name': Agent.e
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#6',
            'id': 6,
            'image': ImagePath.Agent.f,
            'name': Agent.f
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#7',
            'id': 7,
            'image': ImagePath.Agent.g,
            'name': Agent.g
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#9',
            'id': 9,
            'image': ImagePath.Agent.i,
            'name': Agent.i
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#10',
            'id': 10,
            'image': ImagePath.Agent.j,
            'name': Agent.j
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#11',
            'id': 11,
            'image': ImagePath.Agent.k,
            'name': Agent.k
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#12',
            'id': 12,
            'image': ImagePath.Agent.l,
            'name': Agent.l
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#13',
            'id': 13,
            'image': ImagePath.Agent.m,
            'name': Agent.m
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#14',
            'id': 14,
            'image': ImagePath.Agent.n,
            'name': Agent.n
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#15',
            'id': 15,
            'image': ImagePath.Agent.o,
            'name': Agent.o
          }
        ],
        fixed: false
      })
    })
  })
})
