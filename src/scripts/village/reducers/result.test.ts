import {
  firstMorning,
  result
} from './fakeServer'
import reducer, {initialState} from './result'
import {Character} from '../constants/Character'
import {ImagePath} from '../constants/ImagePath'
import {Role} from '../constants/Role'
import {message} from '../actions'
import {village} from '../types'

describe('socket/MESSAGE', () => {
  test('phase is not result', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(firstMorning)
      )
    ).toStrictEqual(initialState)
  })
  test('phase is result', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(result)
      )
    ).toStrictEqual({
      allIds: [
        '15',
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
        '1': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Suzuki',
          characterId: '1',
          characterImage: ImagePath.Character.b,
          characterName: Character.b,
          isMine: true,
          result: village.Result.win,
          roleImage: ImagePath.Role.seer,
          roleName: Role.seer,
          status: village.CharacterStatus.alive
        },
        '2': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Takahashi',
          characterId: '2',
          characterImage: ImagePath.Character.c,
          characterName: Character.c,
          isMine: false,
          result: village.Result.lose,
          roleImage: ImagePath.Role.werewolf,
          roleName: Role.werewolf,
          status: village.CharacterStatus.alive
        },
        '3': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Tanaka',
          characterId: '3',
          characterImage: ImagePath.Character.d,
          characterName: Character.d,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.hunter,
          roleName: Role.hunter,
          status: village.CharacterStatus.alive
        },
        '4': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Ito00',
          characterId: '4',
          characterImage: ImagePath.Character.e,
          characterName: Character.e,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.medium,
          roleName: Role.medium,
          status: village.CharacterStatus.alive
        },
        '5': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Watanabe',
          characterId: '5',
          characterImage: ImagePath.Character.f,
          characterName: Character.f,
          isMine: false,
          result: village.Result.lose,
          roleImage: ImagePath.Role.werehamster,
          roleName: Role.werehamster,
          status: village.CharacterStatus.deathByFear
        },
        '6': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Yamamoto',
          characterId: '6',
          characterImage: ImagePath.Character.g,
          characterName: Character.g,
          isMine: false,
          result: village.Result.lose,
          roleImage: ImagePath.Role.madman,
          roleName: Role.madman,
          status: village.CharacterStatus.deathByExecution
        },
        '7': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Nakamura',
          characterId: '7',
          characterImage: ImagePath.Character.h,
          characterName: Character.h,
          isMine: false,
          result: village.Result.lose,
          roleImage: ImagePath.Role.werewolf,
          roleName: Role.werewolf,
          status: village.CharacterStatus.unnaturalDeath
        },
        '8': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Kobayashi',
          characterId: '8',
          characterImage: ImagePath.Character.i,
          characterName: Character.i,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.unnaturalDeath
        },
        '9': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Yoshida',
          characterId: '9',
          characterImage: ImagePath.Character.j,
          characterName: Character.j,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.unnaturalDeath
        },
        '10': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Yamada',
          characterId: '10',
          characterImage: ImagePath.Character.k,
          characterName: Character.k,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.mason,
          roleName: Role.mason,
          status: village.CharacterStatus.unnaturalDeath
        },
        '11': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Sasaki',
          characterId: '11',
          characterImage: ImagePath.Character.l,
          characterName: Character.l,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.mason,
          roleName: Role.mason,
          status: village.CharacterStatus.unnaturalDeath
        },
        '12': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'yamaguchi',
          characterId: '12',
          characterImage: ImagePath.Character.m,
          characterName: Character.m,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.deathByAttack
        },
        '13': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'matsumoto',
          characterId: '13',
          characterImage: ImagePath.Character.n,
          characterName: Character.n,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.alive
        },
        '14': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'inoue',
          characterId: '14',
          characterImage: ImagePath.Character.o,
          characterName: Character.o,
          isMine: false,
          result: village.Result.win,
          roleImage: ImagePath.Role.villager,
          roleName: Role.villager,
          status: village.CharacterStatus.alive
        },
        '15': {
          avatarImage: ImagePath.Character.r,
          avatarName: 'Sato0',
          characterId: '15',
          characterImage: ImagePath.Character.a,
          characterName: Character.a,
          isMine: false,
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
        kind: village.SummaryType.character,
        loserTeam: new Set([village.Team.werehamster, village.Team.werewolf]),
        myTeam: village.Team.villager,
        result: village.Result.win,
        winnerTeam: village.Team.villager
      },
      visible: true,
      winners: [
        '15',
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
