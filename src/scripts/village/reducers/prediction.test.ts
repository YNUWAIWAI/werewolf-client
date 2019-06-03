/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {
  firstMorning,
  firstMorning3,
  firstMorning4,
  firstMorning5,
  flavorText
} from './fakeServer'
import reducer, {initialState} from './prediction'
import Agent from '../constants/Agent'
import ImagePath from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('flavor text', () => {
    expect(
      reducer(
        initialState,
        socket.message(flavorText)
      )
    ).toEqual(initialState)
  })
  test('my role is seer (numberOfAgents === 1)', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#2',
            'id': 2,
            'image': ImagePath.Agent.b,
            'name': Agent.b,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': ImagePath.Agent.c,
            'name': Agent.c,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#4',
            'id': 4,
            'image': ImagePath.Agent.d,
            'name': Agent.d,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#5',
            'id': 5,
            'image': ImagePath.Agent.e,
            'name': Agent.e,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#6',
            'id': 6,
            'image': ImagePath.Agent.f,
            'name': Agent.f,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#7',
            'id': 7,
            'image': ImagePath.Agent.g,
            'name': Agent.g,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#8',
            'id': 8,
            'image': ImagePath.Agent.h,
            'name': Agent.h,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#9',
            'id': 9,
            'image': ImagePath.Agent.i,
            'name': Agent.i,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#10',
            'id': 10,
            'image': ImagePath.Agent.j,
            'name': Agent.j,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#11',
            'id': 11,
            'image': ImagePath.Agent.k,
            'name': Agent.k,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#12',
            'id': 12,
            'image': ImagePath.Agent.l,
            'name': Agent.l,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#13',
            'id': 13,
            'image': ImagePath.Agent.m,
            'name': Agent.m,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#14',
            'id': 14,
            'image': ImagePath.Agent.n,
            'name': Agent.n,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#15',
            'id': 15,
            'image': ImagePath.Agent.o,
            'name': Agent.o,
            'status': village.AgentStatus.alive
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#villager',
            'id': 'villager',
            'image': ImagePath.Role.villager,
            'name': Role.villager,
            'numberOfAgents': 6
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#seer',
            'id': 'seer',
            'image': ImagePath.Role.seer,
            'name': Role.seer,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#medium',
            'id': 'medium',
            'image': ImagePath.Role.medium,
            'name': Role.medium,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
            'id': 'hunter',
            'image': ImagePath.Role.hunter,
            'name': Role.hunter,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#mason',
            'id': 'mason',
            'image': ImagePath.Role.mason,
            'name': Role.mason,
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#madman',
            'id': 'madman',
            'image': ImagePath.Role.madman,
            'name': Role.madman,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
            'id': 'werewolf',
            'image': ImagePath.Role.werewolf,
            'name': Role.werewolf,
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
            'id': 'werehamster',
            'image': ImagePath.Role.werehamster,
            'name': Role.werehamster,
            'numberOfAgents': 1
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '1': {
            hunter: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            madman: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            villager: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            werehamster: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            werewolf: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            }
          },
          '2': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '3': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '4': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '5': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '6': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '7': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '8': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '9': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '10': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '11': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '12': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '13': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '14': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '15': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          }
        }
      }
    )
  })
  test('my role is villager', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning3)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#2',
            'id': 2,
            'image': ImagePath.Agent.b,
            'name': Agent.b,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': ImagePath.Agent.c,
            'name': Agent.c,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#4',
            'id': 4,
            'image': ImagePath.Agent.d,
            'name': Agent.d,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#5',
            'id': 5,
            'image': ImagePath.Agent.e,
            'name': Agent.e,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#6',
            'id': 6,
            'image': ImagePath.Agent.f,
            'name': Agent.f,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#7',
            'id': 7,
            'image': ImagePath.Agent.g,
            'name': Agent.g,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#8',
            'id': 8,
            'image': ImagePath.Agent.h,
            'name': Agent.h,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#9',
            'id': 9,
            'image': ImagePath.Agent.i,
            'name': Agent.i,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#10',
            'id': 10,
            'image': ImagePath.Agent.j,
            'name': Agent.j,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#11',
            'id': 11,
            'image': ImagePath.Agent.k,
            'name': Agent.k,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#12',
            'id': 12,
            'image': ImagePath.Agent.l,
            'name': Agent.l,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#13',
            'id': 13,
            'image': ImagePath.Agent.m,
            'name': Agent.m,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#14',
            'id': 14,
            'image': ImagePath.Agent.n,
            'name': Agent.n,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#15',
            'id': 15,
            'image': ImagePath.Agent.o,
            'name': Agent.o,
            'status': village.AgentStatus.alive
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#villager',
            'id': 'villager',
            'image': ImagePath.Role.villager,
            'name': Role.villager,
            'numberOfAgents': 6
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#seer',
            'id': 'seer',
            'image': ImagePath.Role.seer,
            'name': Role.seer,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#medium',
            'id': 'medium',
            'image': ImagePath.Role.medium,
            'name': Role.medium,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
            'id': 'hunter',
            'image': ImagePath.Role.hunter,
            'name': Role.hunter,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#mason',
            'id': 'mason',
            'image': ImagePath.Role.mason,
            'name': Role.mason,
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#madman',
            'id': 'madman',
            'image': ImagePath.Role.madman,
            'name': Role.madman,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
            'id': 'werewolf',
            'image': ImagePath.Role.werewolf,
            'name': Role.werewolf,
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
            'id': 'werehamster',
            'image': ImagePath.Role.werehamster,
            'name': Role.werehamster,
            'numberOfAgents': 1
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '1': {
            hunter: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            madman: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            werehamster: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            werewolf: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            }
          },
          '2': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '3': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '4': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '5': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '6': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '7': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '8': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '9': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '10': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '11': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '12': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '13': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '14': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '15': {
            hunter: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werehamster: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          }
        }
      }
    )
  })
  test('ignore the role that is not exists', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning4)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#1',
            'id': 1,
            'image': ImagePath.Agent.a,
            'name': Agent.a,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#2',
            'id': 2,
            'image': ImagePath.Agent.b,
            'name': Agent.b,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#3',
            'id': 3,
            'image': ImagePath.Agent.c,
            'name': Agent.c,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/agent#4',
            'id': 4,
            'image': ImagePath.Agent.d,
            'name': Agent.d,
            'status': village.AgentStatus.alive
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#villager',
            'id': 'villager',
            'image': ImagePath.Role.villager,
            'name': Role.villager,
            'numberOfAgents': 3
          },
          {
            '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
            'id': 'werewolf',
            'image': ImagePath.Role.werewolf,
            'name': Role.werewolf,
            'numberOfAgents': 1
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '1': {
            villager: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            werewolf: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            }
          },
          '2': {
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '3': {
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '4': {
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          }
        }
      }
    )
  })
  test('my role is mason', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning5)
      )
    ).toEqual(
      {
        playerStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#7',
            'id': 7,
            'image': ImagePath.Agent.a,
            'name': Agent.a,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#5',
            'id': 5,
            'image': ImagePath.Agent.f,
            'name': Agent.f,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#2',
            'id': 2,
            'image': ImagePath.Agent.g,
            'name': Agent.g,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#4',
            'id': 4,
            'image': ImagePath.Agent.h,
            'name': Agent.h,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#6',
            'id': 6,
            'image': ImagePath.Agent.j,
            'name': Agent.j,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#3',
            'id': 3,
            'image': ImagePath.Agent.o,
            'name': Agent.o,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#0',
            'id': 0,
            'image': ImagePath.Agent.r,
            'name': Agent.r,
            'status': village.AgentStatus.alive
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/agent#1',
            'id': 1,
            'image': ImagePath.Agent.s,
            'name': Agent.s,
            'status': village.AgentStatus.alive
          }
        ],
        roleStatus: [
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#villager',
            'id': 'villager',
            'image': ImagePath.Role.villager,
            'name': Role.villager,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#seer',
            'id': 'seer',
            'image': ImagePath.Role.seer,
            'name': Role.seer,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#medium',
            'id': 'medium',
            'image': ImagePath.Role.medium,
            'name': Role.medium,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#mason',
            'id': 'mason',
            'image': ImagePath.Role.mason,
            'name': Role.mason,
            'numberOfAgents': 2
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#madman',
            'id': 'madman',
            'image': ImagePath.Role.madman,
            'name': Role.madman,
            'numberOfAgents': 1
          },
          {
            '@id': 'https://licos.online/state/0.2/village#29/role#werewolf',
            'id': 'werewolf',
            'image': ImagePath.Role.werewolf,
            'name': Role.werewolf,
            'numberOfAgents': 2
          }
        ],
        spec: {
          role: village.RoleId.villager,
          visible: false
        },
        table: {
          '0': {
            madman: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            medium: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            werewolf: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            }
          },
          '1': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.CIRCLE
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '2': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: 'X'
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '3': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '4': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: 'Δ'
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '5': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          },
          '6': {
            madman: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.CIRCLE
            },
            medium: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            seer: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            villager: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            werewolf: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            }
          },
          '7': {
            madman: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            mason: {
              date: 1,
              fixed: true,
              state: village.BoardState.FILL
            },
            medium: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            seer: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            villager: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            },
            werewolf: {
              date: 1,
              fixed: false,
              state: village.BoardState.QUESTION
            }
          }
        }
      }
    )
  })
})
test('CHANGE_PREDICTION_BOARD', () => {
  const playerStatus = [
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#0',
      'id': 0,
      'image': 'https://werewolf.world/image/0.2/Gert.jpg',
      'name': {
        en: 'Gert',
        ja: 'ゲルト'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#1',
      'id': 1,
      'image': ImagePath.Agent.a,
      'name': {
        en: 'Walter',
        ja: 'ヴァルター'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#2',
      'id': 2,
      'image': ImagePath.Agent.b,
      'name': {
        en: 'Moritz',
        ja: 'モーリッツ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#3',
      'id': 3,
      'image': ImagePath.Agent.c,
      'name': {
        en: 'Simson',
        ja: 'ジムゾン'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#4',
      'id': 4,
      'image': ImagePath.Agent.d,
      'name': {
        en: 'Thomas',
        ja: 'トーマス'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#5',
      'id': 5,
      'image': ImagePath.Agent.e,
      'name': {
        en: 'Nicholas',
        ja: 'ニコラス'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#6',
      'id': 6,
      'image': ImagePath.Agent.f,
      'name': {
        en: 'Dieter',
        ja: 'ディーター'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#7',
      'id': 7,
      'image': ImagePath.Agent.g,
      'name': {
        en: 'Peter',
        ja: 'ペーター'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#8',
      'id': 8,
      'image': ImagePath.Agent.h,
      'name': {
        en: 'Lisa',
        ja: 'リーザ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#9',
      'id': 9,
      'image': ImagePath.Agent.i,
      'name': {
        en: 'Alvin',
        ja: 'アルビン'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#10',
      'id': 10,
      'image': ImagePath.Agent.j,
      'name': {
        en: 'Catalina',
        ja: 'カタリナ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#11',
      'id': 11,
      'image': ImagePath.Agent.k,
      'name': {
        en: 'Otto',
        ja: 'オットー'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#12',
      'id': 12,
      'image': ImagePath.Agent.l,
      'name': {
        en: 'Joachim',
        ja: 'ヨアヒム'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#13',
      'id': 13,
      'image': ImagePath.Agent.m,
      'name': {
        en: 'Pamela',
        ja: 'パメラ'
      },
      'status': village.AgentStatus.alive
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/agent#14',
      'id': 14,
      'image': ImagePath.Agent.n,
      'name': {
        en: 'Jacob',
        ja: 'ヤコブ'
      },
      'status': village.AgentStatus.alive
    }
  ]
  const roleStatus = [
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#villager',
      'id': village.RoleId.villager,
      'image': ImagePath.Role.villager,
      'name': {
        en: 'Villager',
        ja: '村人'
      },
      'numberOfAgents': 6
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#seer',
      'id': village.RoleId.seer,
      'image': ImagePath.Role.seer,
      'name': {
        en: 'Seer',
        ja: '占い師'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#medium',
      'id': village.RoleId.medium,
      'image': ImagePath.Role.medium,
      'name': {
        en: 'Medium',
        ja: '霊媒師'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#hunter',
      'id': village.RoleId.hunter,
      'image': ImagePath.Role.hunter,
      'name': {
        en: 'Hunter',
        ja: '狩人'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#mason',
      'id': village.RoleId.mason,
      'image': ImagePath.Role.mason,
      'name': {
        en: 'Mason',
        ja: '共有者'
      },
      'numberOfAgents': 2
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#madman',
      'id': village.RoleId.madman,
      'image': ImagePath.Role.madman,
      'name': {
        en: 'Madman',
        ja: '狂人'
      },
      'numberOfAgents': 1
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#werewolf',
      'id': village.RoleId.werewolf,
      'image': ImagePath.Role.werewolf,
      'name': {
        en: 'Werewolf',
        ja: '人狼'
      },
      'numberOfAgents': 2
    },
    {
      '@id': 'https://licos.online/state/0.2/village#3/role#werehamster',
      'id': village.RoleId.werehamster,
      'image': ImagePath.Role.werehamster,
      'name': {
        en: 'Werehamster',
        ja: 'ハムスター人間'
      },
      'numberOfAgents': 1
    }
  ]
  const table = {
    '0': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '1': {
      hunter: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      madman: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      mason: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      medium: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.CIRCLE
      },
      villager: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      werehamster: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      werewolf: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      }
    },
    '2': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '3': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '4': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '5': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '6': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '7': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '8': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '9': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '10': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '11': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '12': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '13': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    },
    '14': {
      hunter: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      madman: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      mason: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      medium: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      seer: {
        date: 1,
        fixed: true,
        state: village.BoardState.FILL
      },
      villager: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werehamster: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      },
      werewolf: {
        date: 1,
        fixed: false,
        state: village.BoardState.QUESTION
      }
    }
  }

  expect(
    reducer(
      {
        ... initialState,
        playerStatus,
        roleStatus,
        table
      },
      {
        nextState: village.BoardState.CIRCLE,
        playerId: 0,
        roleId: village.RoleId.villager,
        type: ActionTypes.global.CHANGE_PREDICTION_BOARD
      }
    )
  ).toEqual({
    ... initialState,
    playerStatus,
    roleStatus,
    table: {
      ... table,
      '0': {
        ... table['0'],
        [village.RoleId.villager]: {
          ... table['0'][village.RoleId.villager],
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
        type: ActionTypes.global.HIDE_PREDICTION_SPEC
      }
    )
  ).toEqual({
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
        type: ActionTypes.global.SHOW_PREDICTION_SPEC
      }
    )
  ).toEqual({
    ... initialState,
    spec: {
      role: village.RoleId.hunter,
      visible: true
    }
  })
})
