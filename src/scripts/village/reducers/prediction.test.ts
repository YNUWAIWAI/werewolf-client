import * as ActionTypes from '../constants/ActionTypes'
import {
  firstMorning,
  firstMorning3,
  firstMorning4,
  firstMorning5,
  flavorText
} from './fakeServer'
import reducer, {
  State,
  initialState
} from './prediction'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {VERSION} from '../constants/Version'
import {message} from '../actions'
import {village} from '../types'

describe('message/SYSTEM_MESSAGE', () => {
  test('flavor text', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(flavorText)
      )
    ).toStrictEqual(initialState)
  })
  test('my role is seer (numberOfPlayers === 1)', () => {
    const characterStatus: State['characterStatus'] = {
      allIds: [
        '1',
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
      ],
      byId: {
        '1': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
          'id': '1',
          'image': ImagePath.Character.a,
          'name': Character.a,
          'status': village.CharacterStatus.alive
        },
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
          'id': '2',
          'image': ImagePath.Character.b,
          'name': Character.b,
          'status': village.CharacterStatus.alive
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Character.c,
          'name': Character.c,
          'status': village.CharacterStatus.alive
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Character.d,
          'name': Character.d,
          'status': village.CharacterStatus.alive
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
          'id': '5',
          'image': ImagePath.Character.e,
          'name': Character.e,
          'status': village.CharacterStatus.alive
        },
        '6': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
          'id': '6',
          'image': ImagePath.Character.f,
          'name': Character.f,
          'status': village.CharacterStatus.alive
        },
        '7': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
          'id': '7',
          'image': ImagePath.Character.g,
          'name': Character.g,
          'status': village.CharacterStatus.alive
        },
        '8': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
          'id': '8',
          'image': ImagePath.Character.h,
          'name': Character.h,
          'status': village.CharacterStatus.alive
        },
        '9': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
          'id': '9',
          'image': ImagePath.Character.i,
          'name': Character.i,
          'status': village.CharacterStatus.alive
        },
        '10': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
          'id': '10',
          'image': ImagePath.Character.j,
          'name': Character.j,
          'status': village.CharacterStatus.alive
        },
        '11': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
          'id': '11',
          'image': ImagePath.Character.k,
          'name': Character.k,
          'status': village.CharacterStatus.alive
        },
        '12': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
          'id': '12',
          'image': ImagePath.Character.l,
          'name': Character.l,
          'status': village.CharacterStatus.alive
        },
        '13': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
          'id': '13',
          'image': ImagePath.Character.m,
          'name': Character.m,
          'status': village.CharacterStatus.alive
        },
        '14': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
          'id': '14',
          'image': ImagePath.Character.n,
          'name': Character.n,
          'status': village.CharacterStatus.alive
        },
        '15': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
          'id': '15',
          'image': ImagePath.Character.o,
          'name': Character.o,
          'status': village.CharacterStatus.alive
        }
      }
    }
    const roleStatus: State['roleStatus'] = {
      allIds: [
        village.RoleId.villager,
        village.RoleId.seer,
        village.RoleId.medium,
        village.RoleId.hunter,
        village.RoleId.mason,
        village.RoleId.madman,
        village.RoleId.werewolf,
        village.RoleId.werehamster
      ],
      byId: {
        [village.RoleId.villager]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfPlayers': 6
        },
        [village.RoleId.seer]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfPlayers': 1
        },
        [village.RoleId.medium]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
          'id': village.RoleId.medium,
          'image': ImagePath.Role.medium,
          'name': Role.medium,
          'numberOfPlayers': 1
        },
        [village.RoleId.hunter]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
          'id': village.RoleId.hunter,
          'image': ImagePath.Role.hunter,
          'name': Role.hunter,
          'numberOfPlayers': 1
        },
        [village.RoleId.mason]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
          'id': village.RoleId.mason,
          'image': ImagePath.Role.mason,
          'name': Role.mason,
          'numberOfPlayers': 2
        },
        [village.RoleId.madman]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfPlayers': 1
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfPlayers': 2
        },
        [village.RoleId.werehamster]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
          'id': village.RoleId.werehamster,
          'image': ImagePath.Role.werehamster,
          'name': Role.werehamster,
          'numberOfPlayers': 1
        }
      }
    }
    const spec: State['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: State['table'] = {
      '1': {
        hunter: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werehamster: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '10': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '15': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }

    expect(
      reducer(
        initialState,
        message.systemMessage(firstMorning)
      )
    ).toStrictEqual(
      {
        characterStatus,
        roleStatus,
        spec,
        table
      }
    )
  })
  test('my role is villager', () => {
    const characterStatus: State['characterStatus'] = {
      allIds: [
        '1',
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
      ],
      byId: {
        '1': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
          'id': '1',
          'image': ImagePath.Character.a,
          'name': Character.a,
          'status': village.CharacterStatus.alive
        },
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
          'id': '2',
          'image': ImagePath.Character.b,
          'name': Character.b,
          'status': village.CharacterStatus.alive
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Character.c,
          'name': Character.c,
          'status': village.CharacterStatus.alive
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Character.d,
          'name': Character.d,
          'status': village.CharacterStatus.alive
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
          'id': '5',
          'image': ImagePath.Character.e,
          'name': Character.e,
          'status': village.CharacterStatus.alive
        },
        '6': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
          'id': '6',
          'image': ImagePath.Character.f,
          'name': Character.f,
          'status': village.CharacterStatus.alive
        },
        '7': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
          'id': '7',
          'image': ImagePath.Character.g,
          'name': Character.g,
          'status': village.CharacterStatus.alive
        },
        '8': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
          'id': '8',
          'image': ImagePath.Character.h,
          'name': Character.h,
          'status': village.CharacterStatus.alive
        },
        '9': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
          'id': '9',
          'image': ImagePath.Character.i,
          'name': Character.i,
          'status': village.CharacterStatus.alive
        },
        '10': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
          'id': '10',
          'image': ImagePath.Character.j,
          'name': Character.j,
          'status': village.CharacterStatus.alive
        },
        '11': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
          'id': '11',
          'image': ImagePath.Character.k,
          'name': Character.k,
          'status': village.CharacterStatus.alive
        },
        '12': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
          'id': '12',
          'image': ImagePath.Character.l,
          'name': Character.l,
          'status': village.CharacterStatus.alive
        },
        '13': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
          'id': '13',
          'image': ImagePath.Character.m,
          'name': Character.m,
          'status': village.CharacterStatus.alive
        },
        '14': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
          'id': '14',
          'image': ImagePath.Character.n,
          'name': Character.n,
          'status': village.CharacterStatus.alive
        },
        '15': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
          'id': '15',
          'image': ImagePath.Character.o,
          'name': Character.o,
          'status': village.CharacterStatus.alive
        }
      }
    }
    const roleStatus: State['roleStatus'] = {
      allIds: [
        village.RoleId.villager,
        village.RoleId.seer,
        village.RoleId.medium,
        village.RoleId.hunter,
        village.RoleId.mason,
        village.RoleId.madman,
        village.RoleId.werewolf,
        village.RoleId.werehamster
      ],
      byId: {
        [village.RoleId.villager]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfPlayers': 6
        },
        [village.RoleId.seer]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfPlayers': 1
        },
        [village.RoleId.medium]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
          'id': village.RoleId.medium,
          'image': ImagePath.Role.medium,
          'name': Role.medium,
          'numberOfPlayers': 1
        },
        [village.RoleId.hunter]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
          'id': village.RoleId.hunter,
          'image': ImagePath.Role.hunter,
          'name': Role.hunter,
          'numberOfPlayers': 1
        },
        [village.RoleId.mason]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
          'id': village.RoleId.mason,
          'image': ImagePath.Role.mason,
          'name': Role.mason,
          'numberOfPlayers': 2
        },
        [village.RoleId.madman]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfPlayers': 1
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfPlayers': 2
        },
        [village.RoleId.werehamster]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
          'id': village.RoleId.werehamster,
          'image': ImagePath.Role.werehamster,
          'name': Role.werehamster,
          'numberOfPlayers': 1
        }
      }
    }
    const spec: State['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: State['table'] = {
      '1': {
        hunter: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        werehamster: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '10': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '15': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }

    expect(
      reducer(
        initialState,
        message.systemMessage(firstMorning3)
      )
    ).toStrictEqual(
      {
        characterStatus,
        roleStatus,
        spec,
        table
      }
    )
  })
  test('ignore the role that is not exists', () => {
    const characterStatus: State['characterStatus'] = {
      allIds: [
        '1',
        '2',
        '3',
        '4'
      ],
      byId: {
        '1': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
          'id': '1',
          'image': ImagePath.Character.a,
          'name': Character.a,
          'status': village.CharacterStatus.alive
        },
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
          'id': '2',
          'image': ImagePath.Character.b,
          'name': Character.b,
          'status': village.CharacterStatus.alive
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
          'id': '3',
          'image': ImagePath.Character.c,
          'name': Character.c,
          'status': village.CharacterStatus.alive
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
          'id': '4',
          'image': ImagePath.Character.d,
          'name': Character.d,
          'status': village.CharacterStatus.alive
        }
      }
    }
    const roleStatus: State['roleStatus'] = {
      allIds: [
        village.RoleId.villager,
        village.RoleId.werewolf
      ],
      byId: {
        [village.RoleId.villager]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfPlayers': 3
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfPlayers': 1
        }
      }
    }
    const spec: State['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: State['table'] = {
      '1': {
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }

    expect(
      reducer(
        initialState,
        message.systemMessage(firstMorning4)
      )
    ).toStrictEqual(
      {
        characterStatus,
        roleStatus,
        spec,
        table
      }
    )
  })
  test('my role is mason', () => {
    const characterStatus: State['characterStatus'] = {
      allIds: [
        '7',
        '5',
        '2',
        '4',
        '6',
        '3',
        '0',
        '1'
      ],
      byId: {
        '0': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#0`,
          'id': '0',
          'image': ImagePath.Character.r,
          'name': Character.r,
          'status': village.CharacterStatus.alive
        },
        '1': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#1`,
          'id': '1',
          'image': ImagePath.Character.s,
          'name': Character.s,
          'status': village.CharacterStatus.alive
        },
        '2': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#2`,
          'id': '2',
          'image': ImagePath.Character.g,
          'name': Character.g,
          'status': village.CharacterStatus.alive
        },
        '3': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#3`,
          'id': '3',
          'image': ImagePath.Character.o,
          'name': Character.o,
          'status': village.CharacterStatus.alive
        },
        '4': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#4`,
          'id': '4',
          'image': ImagePath.Character.h,
          'name': Character.h,
          'status': village.CharacterStatus.alive
        },
        '5': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#5`,
          'id': '5',
          'image': ImagePath.Character.f,
          'name': Character.f,
          'status': village.CharacterStatus.alive
        },
        '6': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#6`,
          'id': '6',
          'image': ImagePath.Character.j,
          'name': Character.j,
          'status': village.CharacterStatus.alive
        },
        '7': {
          '@id': `https://licos.online/state/${VERSION}/village#29/character#7`,
          'id': '7',
          'image': ImagePath.Character.a,
          'name': Character.a,
          'status': village.CharacterStatus.alive
        }
      }
    }
    const roleStatus: State['roleStatus'] = {
      allIds: [
        village.RoleId.villager,
        village.RoleId.seer,
        village.RoleId.medium,
        village.RoleId.mason,
        village.RoleId.madman,
        village.RoleId.werewolf
      ],
      byId: {
        [village.RoleId.villager]: {
          '@id': `https://licos.online/state/${VERSION}/village#29/role#villager`,
          'id': village.RoleId.villager,
          'image': ImagePath.Role.villager,
          'name': Role.villager,
          'numberOfPlayers': 1
        },
        [village.RoleId.seer]: {
          '@id': `https://licos.online/state/${VERSION}/village#29/role#seer`,
          'id': village.RoleId.seer,
          'image': ImagePath.Role.seer,
          'name': Role.seer,
          'numberOfPlayers': 1
        },
        [village.RoleId.medium]: {
          '@id': `https://licos.online/state/${VERSION}/village#29/role#medium`,
          'id': village.RoleId.medium,
          'image': ImagePath.Role.medium,
          'name': Role.medium,
          'numberOfPlayers': 1
        },
        [village.RoleId.mason]: {
          '@id': `https://licos.online/state/${VERSION}/village#29/role#mason`,
          'id': village.RoleId.mason,
          'image': ImagePath.Role.mason,
          'name': Role.mason,
          'numberOfPlayers': 2
        },
        [village.RoleId.madman]: {
          '@id': `https://licos.online/state/${VERSION}/village#29/role#madman`,
          'id': village.RoleId.madman,
          'image': ImagePath.Role.madman,
          'name': Role.madman,
          'numberOfPlayers': 1
        },
        [village.RoleId.werewolf]: {
          '@id': `https://licos.online/state/${VERSION}/village#29/role#werewolf`,
          'id': village.RoleId.werewolf,
          'image': ImagePath.Role.werewolf,
          'name': Role.werewolf,
          'numberOfPlayers': 2
        }
      }
    }
    const spec: State['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: State['table'] = {
      '0': {
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        medium: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '1': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.CIRCLE
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '2': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.CROSS
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        medium: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '7': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }

    expect(
      reducer(
        initialState,
        message.systemMessage(firstMorning5)
      )
    ).toStrictEqual(
      {
        characterStatus,
        roleStatus,
        spec,
        table
      }
    )
  })
})
test('CHANGE_PREDICTION_BOARD', () => {
  const characterStatus: State['characterStatus'] = {
    allIds: [
      '1',
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
    ],
    byId: {
      '1': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#1`,
        'id': '1',
        'image': ImagePath.Character.a,
        'name': Character.a,
        'status': village.CharacterStatus.alive
      },
      '2': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#2`,
        'id': '2',
        'image': ImagePath.Character.b,
        'name': Character.b,
        'status': village.CharacterStatus.alive
      },
      '3': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#3`,
        'id': '3',
        'image': ImagePath.Character.c,
        'name': Character.c,
        'status': village.CharacterStatus.alive
      },
      '4': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#4`,
        'id': '4',
        'image': ImagePath.Character.d,
        'name': Character.d,
        'status': village.CharacterStatus.alive
      },
      '5': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#5`,
        'id': '5',
        'image': ImagePath.Character.e,
        'name': Character.e,
        'status': village.CharacterStatus.alive
      },
      '6': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#6`,
        'id': '6',
        'image': ImagePath.Character.f,
        'name': Character.f,
        'status': village.CharacterStatus.alive
      },
      '7': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#7`,
        'id': '7',
        'image': ImagePath.Character.g,
        'name': Character.g,
        'status': village.CharacterStatus.alive
      },
      '8': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#8`,
        'id': '8',
        'image': ImagePath.Character.h,
        'name': Character.h,
        'status': village.CharacterStatus.alive
      },
      '9': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#9`,
        'id': '9',
        'image': ImagePath.Character.i,
        'name': Character.i,
        'status': village.CharacterStatus.alive
      },
      '10': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#10`,
        'id': '10',
        'image': ImagePath.Character.j,
        'name': Character.j,
        'status': village.CharacterStatus.alive
      },
      '11': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#11`,
        'id': '11',
        'image': ImagePath.Character.k,
        'name': Character.k,
        'status': village.CharacterStatus.alive
      },
      '12': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#12`,
        'id': '12',
        'image': ImagePath.Character.l,
        'name': Character.l,
        'status': village.CharacterStatus.alive
      },
      '13': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#13`,
        'id': '13',
        'image': ImagePath.Character.m,
        'name': Character.m,
        'status': village.CharacterStatus.alive
      },
      '14': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#14`,
        'id': '14',
        'image': ImagePath.Character.n,
        'name': Character.n,
        'status': village.CharacterStatus.alive
      },
      '15': {
        '@id': `https://licos.online/state/${VERSION}/village#3/character#15`,
        'id': '15',
        'image': ImagePath.Character.o,
        'name': Character.o,
        'status': village.CharacterStatus.alive
      }
    }
  }
  const roleStatus: State['roleStatus'] = {
    allIds: [
      village.RoleId.villager,
      village.RoleId.seer,
      village.RoleId.medium,
      village.RoleId.hunter,
      village.RoleId.mason,
      village.RoleId.madman,
      village.RoleId.werewolf,
      village.RoleId.werehamster
    ],
    byId: {
      [village.RoleId.villager]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#villager`,
        'id': village.RoleId.villager,
        'image': ImagePath.Role.villager,
        'name': Role.villager,
        'numberOfPlayers': 6
      },
      [village.RoleId.seer]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#seer`,
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': Role.seer,
        'numberOfPlayers': 1
      },
      [village.RoleId.medium]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#medium`,
        'id': village.RoleId.medium,
        'image': ImagePath.Role.medium,
        'name': Role.medium,
        'numberOfPlayers': 1
      },
      [village.RoleId.hunter]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#hunter`,
        'id': village.RoleId.hunter,
        'image': ImagePath.Role.hunter,
        'name': Role.hunter,
        'numberOfPlayers': 1
      },
      [village.RoleId.mason]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#mason`,
        'id': village.RoleId.mason,
        'image': ImagePath.Role.mason,
        'name': Role.mason,
        'numberOfPlayers': 2
      },
      [village.RoleId.madman]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#madman`,
        'id': village.RoleId.madman,
        'image': ImagePath.Role.madman,
        'name': Role.madman,
        'numberOfPlayers': 1
      },
      [village.RoleId.werewolf]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#werewolf`,
        'id': village.RoleId.werewolf,
        'image': ImagePath.Role.werewolf,
        'name': Role.werewolf,
        'numberOfPlayers': 2
      },
      [village.RoleId.werehamster]: {
        '@id': `https://licos.online/state/${VERSION}/village#3/role#werehamster`,
        'id': village.RoleId.werehamster,
        'image': ImagePath.Role.werehamster,
        'name': Role.werehamster,
        'numberOfPlayers': 1
      }
    }
  }
  const table: State['table'] = {
    '1': {
      hunter: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      madman: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      mason: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      medium: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.CIRCLE
      },
      villager: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      werehamster: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      werewolf: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      }
    },
    '2': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '3': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '4': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '5': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '6': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '7': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '8': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '9': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '10': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '11': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '12': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '13': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '14': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '15': {
      hunter: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        day: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        day: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    }
  }

  expect(
    reducer(
      {
        ... initialState,
        characterStatus,
        roleStatus,
        table
      },
      {
        characterId: '2',
        nextState: village.BoardState.CIRCLE,
        roleId: village.RoleId.villager,
        type: ActionTypes.App.CHANGE_PREDICTION_BOARD
      }
    )
  ).toStrictEqual({
    ... initialState,
    characterStatus,
    roleStatus,
    table: {
      ... table,
      '2': {
        ... table['2'],
        [village.RoleId.villager]: {
          ... table['2'][village.RoleId.villager],
          state: village.BoardState.CIRCLE
        }
      }
    }
  })
})
test('HIDE_PREDICTION_SPEC', () => {
  expect(
    reducer(
      {
        ... initialState,
        spec: {
          ... initialState.spec,
          visible: true
        }
      },
      {
        type: ActionTypes.App.HIDE_PREDICTION_SPEC
      }
    )
  ).toStrictEqual({
    ... initialState,
    spec: {
      ... initialState.spec,
      visible: false
    }
  })
})
test('SHOW_PREDICTION_SPEC', () => {
  expect(
    reducer(
      initialState,
      {
        role: village.RoleId.hunter,
        type: ActionTypes.App.SHOW_PREDICTION_SPEC
      }
    )
  ).toStrictEqual({
    ... initialState,
    spec: {
      role: village.RoleId.hunter,
      visible: true
    }
  })
})
