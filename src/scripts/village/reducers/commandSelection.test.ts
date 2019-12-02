import * as ActionTypes from '../constants/ActionTypes'
import {
  night,
  noon
} from './fakeServer'
import reducer, {
  State,
  initialState
} from './commandSelection'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {VERSION} from '../constants/Version'
import {message} from '../actions'
import {village} from '../types'

test('CHANGE_PHASE', () => {
  expect(
    reducer(
      initialState,
      {
        from: village.Phase.noon,
        to: village.Phase.night,
        type: ActionTypes.App.CHANGE_PHASE
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
      '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
      'id': '2',
      'image': ImagePath.Character.b,
      'name': Character.b
    },
    '3': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
      'id': '3',
      'image': ImagePath.Character.c,
      'name': Character.c
    },
    '4': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
      'id': '4',
      'image': ImagePath.Character.d,
      'name': Character.d
    },
    '5': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
      'id': '5',
      'image': ImagePath.Character.e,
      'name': Character.e
    },
    '6': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
      'id': '6',
      'image': ImagePath.Character.f,
      'name': Character.f
    },
    '7': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
      'id': '7',
      'image': ImagePath.Character.g,
      'name': Character.g
    },
    '8': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
      'id': '8',
      'image': ImagePath.Character.h,
      'name': Character.h
    },
    '9': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
      'id': '9',
      'image': ImagePath.Character.i,
      'name': Character.i
    },
    '10': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
      'id': '10',
      'image': ImagePath.Character.j,
      'name': Character.j
    },
    '11': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
      'id': '11',
      'image': ImagePath.Character.k,
      'name': Character.k
    },
    '12': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
      'id': '12',
      'image': ImagePath.Character.l,
      'name': Character.l
    },
    '13': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
      'id': '13',
      'image': ImagePath.Character.m,
      'name': Character.m
    },
    '14': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
      'id': '14',
      'image': ImagePath.Character.n,
      'name': Character.n
    },
    '15': {
      '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
      'id': '15',
      'image': ImagePath.Character.o,
      'name': Character.o
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
        characterId: '2',
        type: ActionTypes.App.SELECT_YES
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
describe('message/SYSTEM_MESSAGE', () => {
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
        '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
        'id': '2',
        'image': ImagePath.Character.b,
        'name': Character.b
      },
      '3': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
        'id': '3',
        'image': ImagePath.Character.c,
        'name': Character.c
      },
      '4': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
        'id': '4',
        'image': ImagePath.Character.d,
        'name': Character.d
      },
      '5': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
        'id': '5',
        'image': ImagePath.Character.e,
        'name': Character.e
      },
      '6': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
        'id': '6',
        'image': ImagePath.Character.f,
        'name': Character.f
      },
      '7': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
        'id': '7',
        'image': ImagePath.Character.g,
        'name': Character.g
      },
      '8': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
        'id': '8',
        'image': ImagePath.Character.h,
        'name': Character.h
      },
      '9': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
        'id': '9',
        'image': ImagePath.Character.i,
        'name': Character.i
      },
      '10': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
        'id': '10',
        'image': ImagePath.Character.j,
        'name': Character.j
      },
      '11': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
        'id': '11',
        'image': ImagePath.Character.k,
        'name': Character.k
      },
      '12': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
        'id': '12',
        'image': ImagePath.Character.l,
        'name': Character.l
      },
      '13': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
        'id': '13',
        'image': ImagePath.Character.m,
        'name': Character.m
      },
      '14': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
        'id': '14',
        'image': ImagePath.Character.n,
        'name': Character.n
      },
      '15': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
        'id': '15',
        'image': ImagePath.Character.o,
        'name': Character.o
      }
    }

    expect(
      reducer(
        initialState,
        message.systemMessage(noon)
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
        '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
        'id': '2',
        'image': ImagePath.Character.b,
        'name': Character.b
      },
      '3': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
        'id': '3',
        'image': ImagePath.Character.c,
        'name': Character.c
      },
      '4': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
        'id': '4',
        'image': ImagePath.Character.d,
        'name': Character.d
      },
      '5': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
        'id': '5',
        'image': ImagePath.Character.e,
        'name': Character.e
      },
      '6': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
        'id': '6',
        'image': ImagePath.Character.f,
        'name': Character.f
      },
      '7': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
        'id': '7',
        'image': ImagePath.Character.g,
        'name': Character.g
      },
      '9': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
        'id': '9',
        'image': ImagePath.Character.i,
        'name': Character.i
      },
      '10': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
        'id': '10',
        'image': ImagePath.Character.j,
        'name': Character.j
      },
      '11': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
        'id': '11',
        'image': ImagePath.Character.k,
        'name': Character.k
      },
      '12': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
        'id': '12',
        'image': ImagePath.Character.l,
        'name': Character.l
      },
      '13': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
        'id': '13',
        'image': ImagePath.Character.m,
        'name': Character.m
      },
      '14': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
        'id': '14',
        'image': ImagePath.Character.n,
        'name': Character.n
      },
      '15': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
        'id': '15',
        'image': ImagePath.Character.o,
        'name': Character.o
      }
    }

    expect(
      reducer(
        initialState,
        message.systemMessage(night)
      )
    ).toStrictEqual({
      allIds,
      byId,
      fixed: false
    })
  })
})
