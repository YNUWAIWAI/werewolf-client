/* global village */
import {firstMorning, result} from './fakeServer'
import reducer, {initialState} from './result'
import Agent from '../constants/Agent'
import ImagePath from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('phase is not result', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning)
      )
    ).toEqual(initialState)
  })
  test('phase is result', () => {
    expect(
      reducer(
        initialState,
        socket.message(result)
      )
    ).toEqual({
      agents: {
        agent0: {
          agentId: '0',
          agentImage: ImagePath.Agent.a,
          agentName: Agent.a,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Sato',
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.AgentStatus.alive
        },
        agent1: {
          agentId: '1',
          agentImage: ImagePath.Agent.b,
          agentName: Agent.b,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Suzuki',
          result: village.Result.win,
          roleImage: ImagePath.Role.seer,
          roleName: Role.seer,
          status: village.AgentStatus.alive
        },
        agent2: {
          agentId: '2',
          agentImage: ImagePath.Agent.c,
          agentName: Agent.c,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Takahashi',
          result: village.Result.lose,
          roleImage: ImagePath.Role.werewolf,
          roleName: Role.werewolf,
          status: village.AgentStatus.alive
        },
        agent3: {
          agentId: '3',
          agentImage: ImagePath.Agent.d,
          agentName: Agent.d,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Tanaka',
          result: village.Result.win,
          roleImage: ImagePath.Role.hunter,
          roleName: Role.hunter,
          status: village.AgentStatus.alive
        },
        agent4: {
          agentId: '4',
          agentImage: ImagePath.Agent.e,
          agentName: Agent.e,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Ito',
          result: village.Result.win,
          roleImage: ImagePath.Role.medium,
          roleName: Role.medium,
          status: village.AgentStatus.alive
        },
        agent5: {
          agentId: '5',
          agentImage: ImagePath.Agent.f,
          agentName: Agent.f,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Watanabe',
          result: village.Result.lose,
          roleImage: ImagePath.Role.werehamster,
          roleName: Role.werehamster,
          status: village.AgentStatus.deathByFear
        },
        agent6: {
          agentId: '6',
          agentImage: ImagePath.Agent.g,
          agentName: Agent.g,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Yamamoto',
          result: village.Result.lose,
          roleImage: ImagePath.Role.madman,
          roleName: Role.madman,
          status: village.AgentStatus.deathByExecution
        },
        agent7: {
          agentId: '7',
          agentImage: ImagePath.Agent.h,
          agentName: Agent.h,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Nakamura',
          result: village.Result.lose,
          roleImage: ImagePath.Role.werewolf,
          roleName: Role.werewolf,
          status: village.AgentStatus.unnaturalDeath
        },
        agent8: {
          agentId: '8',
          agentImage: ImagePath.Agent.i,
          agentName: Agent.i,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Kobayashi',
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.AgentStatus.unnaturalDeath
        },
        agent9: {
          agentId: '9',
          agentImage: ImagePath.Agent.j,
          agentName: Agent.j,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Yoshida',
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.AgentStatus.unnaturalDeath
        },
        agent10: {
          agentId: '10',
          agentImage: ImagePath.Agent.k,
          agentName: Agent.k,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Yamada',
          result: village.Result.win,
          roleImage: ImagePath.Role.mason,
          roleName: Role.mason,
          status: village.AgentStatus.unnaturalDeath
        },
        agent11: {
          agentId: '11',
          agentImage: ImagePath.Agent.l,
          agentName: Agent.l,
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Sasaki',
          result: village.Result.win,
          roleImage: ImagePath.Role.mason,
          roleName: Role.mason,
          status: village.AgentStatus.unnaturalDeath
        },
        agent12: {
          agentId: '12',
          agentImage: ImagePath.Agent.m,
          agentName: Agent.m,
          avatarImage: ImagePath.Agent.r,
          avatarName: '山口',
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.AgentStatus.deathByAttack
        },
        agent13: {
          agentId: '13',
          agentImage: ImagePath.Agent.n,
          agentName: Agent.n,
          avatarImage: ImagePath.Agent.r,
          avatarName: '松本',
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.AgentStatus.alive
        },
        agent14: {
          agentId: '14',
          agentImage: ImagePath.Agent.o,
          agentName: Agent.o,
          avatarImage: ImagePath.Agent.r,
          avatarName: '井上',
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.AgentStatus.alive
        }
      },
      allIds: [
        'agent0',
        'agent1',
        'agent2',
        'agent3',
        'agent4',
        'agent5',
        'agent6',
        'agent7',
        'agent8',
        'agent9',
        'agent10',
        'agent11',
        'agent12',
        'agent13',
        'agent14'
      ],
      losers: [
        'agent2',
        'agent5',
        'agent6',
        'agent7'
      ],
      me: 'agent1',
      summary: {
        kind: 'player',
        loserTeam: new Set(['werewolf', 'werehamster']),
        myTeam: 'villager',
        result: village.Result.win,
        winnerTeam: 'villager'
      },
      visible: true,
      winners: [
        'agent0',
        'agent1',
        'agent3',
        'agent4',
        'agent8',
        'agent9',
        'agent10',
        'agent11',
        'agent12',
        'agent13',
        'agent14'
      ]
    })
  })
})
