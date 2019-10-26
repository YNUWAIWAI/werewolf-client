import {firstMorning, result} from './fakeServer'
import reducer, {initialState} from './result'
import {Agent} from '../constants/Agent'
import {ImagePath} from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {socket} from '../actions'
import {village} from '../types'

describe('socket/MESSAGE', () => {
  test('phase is not result', () => {
    expect(
      reducer(
        initialState,
        socket.message(firstMorning)
      )
    ).toStrictEqual(initialState)
  })
  test('phase is result', () => {
    expect(
      reducer(
        initialState,
        socket.message(result)
      )
    ).toStrictEqual({
      allIds: [
        '0',
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
        '14'
      ],
      characters: {
        '0': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Sato',
          characterId: '0',
          characterImage: ImagePath.Agent.a,
          characterName: Agent.a,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.alive
        },
        '1': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Suzuki',
          characterId: '1',
          characterImage: ImagePath.Agent.b,
          characterName: Agent.b,
          result: village.Result.win,
          roleImage: ImagePath.Role.seer,
          roleName: Role.seer,
          status: village.CharacterStatus.alive
        },
        '2': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Takahashi',
          characterId: '2',
          characterImage: ImagePath.Agent.c,
          characterName: Agent.c,
          result: village.Result.lose,
          roleImage: ImagePath.Role.werewolf,
          roleName: Role.werewolf,
          status: village.CharacterStatus.alive
        },
        '3': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Tanaka',
          characterId: '3',
          characterImage: ImagePath.Agent.d,
          characterName: Agent.d,
          result: village.Result.win,
          roleImage: ImagePath.Role.hunter,
          roleName: Role.hunter,
          status: village.CharacterStatus.alive
        },
        '4': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Ito',
          characterId: '4',
          characterImage: ImagePath.Agent.e,
          characterName: Agent.e,
          result: village.Result.win,
          roleImage: ImagePath.Role.medium,
          roleName: Role.medium,
          status: village.CharacterStatus.alive
        },
        '5': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Watanabe',
          characterId: '5',
          characterImage: ImagePath.Agent.f,
          characterName: Agent.f,
          result: village.Result.lose,
          roleImage: ImagePath.Role.werehamster,
          roleName: Role.werehamster,
          status: village.CharacterStatus.deathByFear
        },
        '6': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Yamamoto',
          characterId: '6',
          characterImage: ImagePath.Agent.g,
          characterName: Agent.g,
          result: village.Result.lose,
          roleImage: ImagePath.Role.madman,
          roleName: Role.madman,
          status: village.CharacterStatus.deathByExecution
        },
        '7': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Nakamura',
          characterId: '7',
          characterImage: ImagePath.Agent.h,
          characterName: Agent.h,
          result: village.Result.lose,
          roleImage: ImagePath.Role.werewolf,
          roleName: Role.werewolf,
          status: village.CharacterStatus.unnaturalDeath
        },
        '8': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Kobayashi',
          characterId: '8',
          characterImage: ImagePath.Agent.i,
          characterName: Agent.i,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.unnaturalDeath
        },
        '9': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Yoshida',
          characterId: '9',
          characterImage: ImagePath.Agent.j,
          characterName: Agent.j,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.unnaturalDeath
        },
        '10': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Yamada',
          characterId: '10',
          characterImage: ImagePath.Agent.k,
          characterName: Agent.k,
          result: village.Result.win,
          roleImage: ImagePath.Role.mason,
          roleName: Role.mason,
          status: village.CharacterStatus.unnaturalDeath
        },
        '11': {
          avatarImage: ImagePath.Agent.r,
          avatarName: 'Sasaki',
          characterId: '11',
          characterImage: ImagePath.Agent.l,
          characterName: Agent.l,
          result: village.Result.win,
          roleImage: ImagePath.Role.mason,
          roleName: Role.mason,
          status: village.CharacterStatus.unnaturalDeath
        },
        '12': {
          avatarImage: ImagePath.Agent.r,
          avatarName: '山口',
          characterId: '12',
          characterImage: ImagePath.Agent.m,
          characterName: Agent.m,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.deathByAttack
        },
        '13': {
          avatarImage: ImagePath.Agent.r,
          avatarName: '松本',
          characterId: '13',
          characterImage: ImagePath.Agent.n,
          characterName: Agent.n,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.alive
        },
        '14': {
          avatarImage: ImagePath.Agent.r,
          avatarName: '井上',
          characterId: '14',
          characterImage: ImagePath.Agent.o,
          characterName: Agent.o,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.alive
        }
      },
      losers: [
        '2',
        '5',
        '6',
        '7'
      ],
      me: '1',
      summary: {
        kind: 'character',
        loserTeam: new Set([village.Team.werehamster, village.Team.werewolf]),
        myTeam: village.Team.villager,
        result: village.Result.win,
        winnerTeam: village.Team.villager
      },
      visible: true,
      winners: [
        '0',
        '1',
        '3',
        '4',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14'
      ]
    })
  })
})
