import * as ActionTypes from '../constants/ActionTypes'
import {night, noon} from './fakeServer'
import reducer, {State, initialState} from './commandSelection'
import {Agent} from '../constants/Agent'
import {ImagePath} from '../constants/ImagePath'
import {socket} from '../actions'
import {village} from '../types'

test('CHANGE_PHASE', () => {
  expect(
    reducer(
      initialState,
      {
        from: village.Phase.noon,
        to: village.Phase.night,
        type: ActionTypes.global.CHANGE_PHASE
      }
    )
  ).toStrictEqual({
    ... initialState,
    fixed: false
  })
})
test('SELECT_YES', () => {
  const allIds: State['allIds'] = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15'
  ]
  const byId: State['byId'] = {
    '2': {
      '@id': 'https://licos.online/state/0.2/village#3/character#2',
      'id': '2',
      'image': ImagePath.Agent.b,
      'name': Agent.b
    },
    '3': {
      '@id': 'https://licos.online/state/0.2/village#3/character#3',
      'id': '3',
      'image': ImagePath.Agent.c,
      'name': Agent.c
    },
    '4': {
      '@id': 'https://licos.online/state/0.2/village#3/character#4',
      'id': '4',
      'image': ImagePath.Agent.d,
      'name': Agent.d
    },
    '5': {
      '@id': 'https://licos.online/state/0.2/village#3/character#5',
      'id': '5',
      'image': ImagePath.Agent.e,
      'name': Agent.e
    },
    '6': {
      '@id': 'https://licos.online/state/0.2/village#3/character#6',
      'id': '6',
      'image': ImagePath.Agent.f,
      'name': Agent.f
    },
    '7': {
      '@id': 'https://licos.online/state/0.2/village#3/character#7',
      'id': '7',
      'image': ImagePath.Agent.g,
      'name': Agent.g
    },
    '8': {
      '@id': 'https://licos.online/state/0.2/village#3/character#8',
      'id': '8',
      'image': ImagePath.Agent.h,
      'name': Agent.h
    },
    '9': {
      '@id': 'https://licos.online/state/0.2/village#3/character#9',
      'id': '9',
      'image': ImagePath.Agent.i,
      'name': Agent.i
    },
    '10': {
      '@id': 'https://licos.online/state/0.2/village#3/character#10',
      'id': '10',
      'image': ImagePath.Agent.j,
      'name': Agent.j
    },
    '11': {
      '@id': 'https://licos.online/state/0.2/village#3/character#11',
      'id': '11',
      'image': ImagePath.Agent.k,
      'name': Agent.k
    },
    '12': {
      '@id': 'https://licos.online/state/0.2/village#3/character#12',
      'id': '12',
      'image': ImagePath.Agent.l,
      'name': Agent.l
    },
    '13': {
      '@id': 'https://licos.online/state/0.2/village#3/character#13',
      'id': '13',
      'image': ImagePath.Agent.m,
      'name': Agent.m
    },
    '14': {
      '@id': 'https://licos.online/state/0.2/village#3/character#14',
      'id': '14',
      'image': ImagePath.Agent.n,
      'name': Agent.n
    },
    '15': {
      '@id': 'https://licos.online/state/0.2/village#3/character#15',
      'id': '15',
      'image': ImagePath.Agent.o,
      'name': Agent.o
    }
  }

  expect(
    reducer(
      {
        allIds,
        byId,
        fixed: false
      },
      {
        agentId: '2',
        type: ActionTypes.global.SELECT_YES
      }
    )
  ).toStrictEqual({
    allIds: [
      '2'
    ],
    byId,
    fixed: true
  })
})
describe('socket/MESSAGE', () => {
  describe('systemMessage', () => {
    test('phase: noon', () => {
      const allIds: State['allIds'] = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
      ]
      const byId: State['byId'] = {
        '2': {
          '@id': 'https://licos.online/state/0.2/village#3/character#2',
          'id': '2',
          'image': ImagePath.Agent.b,
          'name': Agent.b
        },
        '3': {
          '@id': 'https://licos.online/state/0.2/village#3/character#3',
          'id': '3',
          'image': ImagePath.Agent.c,
          'name': Agent.c
        },
        '4': {
          '@id': 'https://licos.online/state/0.2/village#3/character#4',
          'id': '4',
          'image': ImagePath.Agent.d,
          'name': Agent.d
        },
        '5': {
          '@id': 'https://licos.online/state/0.2/village#3/character#5',
          'id': '5',
          'image': ImagePath.Agent.e,
          'name': Agent.e
        },
        '6': {
          '@id': 'https://licos.online/state/0.2/village#3/character#6',
          'id': '6',
          'image': ImagePath.Agent.f,
          'name': Agent.f
        },
        '7': {
          '@id': 'https://licos.online/state/0.2/village#3/character#7',
          'id': '7',
          'image': ImagePath.Agent.g,
          'name': Agent.g
        },
        '8': {
          '@id': 'https://licos.online/state/0.2/village#3/character#8',
          'id': '8',
          'image': ImagePath.Agent.h,
          'name': Agent.h
        },
        '9': {
          '@id': 'https://licos.online/state/0.2/village#3/character#9',
          'id': '9',
          'image': ImagePath.Agent.i,
          'name': Agent.i
        },
        '10': {
          '@id': 'https://licos.online/state/0.2/village#3/character#10',
          'id': '10',
          'image': ImagePath.Agent.j,
          'name': Agent.j
        },
        '11': {
          '@id': 'https://licos.online/state/0.2/village#3/character#11',
          'id': '11',
          'image': ImagePath.Agent.k,
          'name': Agent.k
        },
        '12': {
          '@id': 'https://licos.online/state/0.2/village#3/character#12',
          'id': '12',
          'image': ImagePath.Agent.l,
          'name': Agent.l
        },
        '13': {
          '@id': 'https://licos.online/state/0.2/village#3/character#13',
          'id': '13',
          'image': ImagePath.Agent.m,
          'name': Agent.m
        },
        '14': {
          '@id': 'https://licos.online/state/0.2/village#3/character#14',
          'id': '14',
          'image': ImagePath.Agent.n,
          'name': Agent.n
        },
        '15': {
          '@id': 'https://licos.online/state/0.2/village#3/character#15',
          'id': '15',
          'image': ImagePath.Agent.o,
          'name': Agent.o
        }
      }

      expect(
        reducer(
          initialState,
          socket.message(noon)
        )
      ).toStrictEqual({
        allIds,
        byId,
        fixed: false
      })
    })
    test('phase: night', () => {
      const allIds: State['allIds'] = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15'
      ]
      const byId: State['byId'] = {
        '2': {
          '@id': 'https://licos.online/state/0.2/village#3/character#2',
          'id': '2',
          'image': ImagePath.Agent.b,
          'name': Agent.b
        },
        '3': {
          '@id': 'https://licos.online/state/0.2/village#3/character#3',
          'id': '3',
          'image': ImagePath.Agent.c,
          'name': Agent.c
        },
        '4': {
          '@id': 'https://licos.online/state/0.2/village#3/character#4',
          'id': '4',
          'image': ImagePath.Agent.d,
          'name': Agent.d
        },
        '5': {
          '@id': 'https://licos.online/state/0.2/village#3/character#5',
          'id': '5',
          'image': ImagePath.Agent.e,
          'name': Agent.e
        },
        '6': {
          '@id': 'https://licos.online/state/0.2/village#3/character#6',
          'id': '6',
          'image': ImagePath.Agent.f,
          'name': Agent.f
        },
        '7': {
          '@id': 'https://licos.online/state/0.2/village#3/character#7',
          'id': '7',
          'image': ImagePath.Agent.g,
          'name': Agent.g
        },
        '9': {
          '@id': 'https://licos.online/state/0.2/village#3/character#9',
          'id': '9',
          'image': ImagePath.Agent.i,
          'name': Agent.i
        },
        '10': {
          '@id': 'https://licos.online/state/0.2/village#3/character#10',
          'id': '10',
          'image': ImagePath.Agent.j,
          'name': Agent.j
        },
        '11': {
          '@id': 'https://licos.online/state/0.2/village#3/character#11',
          'id': '11',
          'image': ImagePath.Agent.k,
          'name': Agent.k
        },
        '12': {
          '@id': 'https://licos.online/state/0.2/village#3/character#12',
          'id': '12',
          'image': ImagePath.Agent.l,
          'name': Agent.l
        },
        '13': {
          '@id': 'https://licos.online/state/0.2/village#3/character#13',
          'id': '13',
          'image': ImagePath.Agent.m,
          'name': Agent.m
        },
        '14': {
          '@id': 'https://licos.online/state/0.2/village#3/character#14',
          'id': '14',
          'image': ImagePath.Agent.n,
          'name': Agent.n
        },
        '15': {
          '@id': 'https://licos.online/state/0.2/village#3/character#15',
          'id': '15',
          'image': ImagePath.Agent.o,
          'name': Agent.o
        }
      }

      expect(
        reducer(
          initialState,
          socket.message(night)
        )
      ).toStrictEqual({
        allIds,
        byId,
        fixed: false
      })
    })
  })
})
