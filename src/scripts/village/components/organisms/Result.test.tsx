import * as React from 'react'
import Result, {Props} from './Result'
import {ImagePath} from '../../constants/ImagePath'
import {shallow} from 'enzyme'
import {village} from '../../types'

const characters: Props['characters'] = {
  '1': {
    avatarImage: ImagePath.Character.o,
    avatarName: 'Suzuki',
    characterId: '1',
    characterImage: ImagePath.Character.a,
    characterInitial: 'A',
    characterName: 'Adil',
    result: village.Result.win,
    roleImage: ImagePath.Role.seer,
    roleName: 'Seer',
    status: village.CharacterStatus.alive
  },
  '2': {
    avatarImage: ImagePath.Character.i,
    avatarName: 'Takahashi',
    characterId: '2',
    characterImage: ImagePath.Character.b,
    characterInitial: 'B',
    characterName: 'Borya',
    result: village.Result.lose,
    roleImage: ImagePath.Role.werewolf,
    roleName: 'Werewolf',
    status: village.CharacterStatus.alive
  },
  '3': {
    avatarImage: ImagePath.Character.r,
    avatarName: 'Tanaka',
    characterId: '3',
    characterImage: ImagePath.Character.c,
    characterInitial: 'C',
    characterName: 'Chacha',
    result: village.Result.win,
    roleImage: ImagePath.Role.hunter,
    roleName: 'Hunter',
    status: village.CharacterStatus.alive
  },
  '4': {
    avatarImage: ImagePath.Character.f,
    avatarName: 'Ito',
    characterId: '4',
    characterImage: ImagePath.Character.d,
    characterInitial: 'D',
    characterName: 'Devdatta',
    result: village.Result.win,
    roleImage: ImagePath.Role.medium,
    roleName: 'Medium',
    status: village.CharacterStatus.alive
  },
  '5': {
    avatarImage: ImagePath.Character.s,
    avatarName: 'Watanabe',
    characterId: '5',
    characterImage: ImagePath.Character.e,
    characterInitial: 'E',
    characterName: 'Ekrem',
    result: village.Result.lose,
    roleImage: ImagePath.Role.werehamster,
    roleName: 'Werehamster',
    status: village.CharacterStatus.deathByFear
  },
  '6': {
    avatarImage: ImagePath.Character.n,
    avatarName: 'Yamamoto',
    characterId: '6',
    characterImage: ImagePath.Character.f,
    characterInitial: 'F',
    characterName: 'Fernando',
    result: village.Result.lose,
    roleImage: ImagePath.Role.madman,
    roleName: 'Madman',
    status: village.CharacterStatus.deathByExecution
  },
  '7': {
    avatarImage: ImagePath.Character.e,
    avatarName: 'Nakamura',
    characterId: '7',
    characterImage: ImagePath.Character.g,
    characterInitial: 'G',
    characterName: 'Gavriil',
    result: village.Result.lose,
    roleImage: ImagePath.Role.werewolf,
    roleName: 'Werewolf',
    status: village.CharacterStatus.unnaturalDeath
  },
  '8': {
    avatarImage: ImagePath.Character.g,
    avatarName: 'Kobayashi',
    characterId: '8',
    characterImage: ImagePath.Character.h,
    characterInitial: 'H',
    characterName: 'Henrik',
    result: village.Result.win,
    roleImage: ImagePath.Role.villager,
    roleName: 'Villager',
    status: village.CharacterStatus.unnaturalDeath
  },
  '9': {
    avatarImage: ImagePath.Character.g,
    avatarName: 'Yoshida',
    characterId: '9',
    characterImage: ImagePath.Character.i,
    characterInitial: 'I',
    characterName: 'Ileanna',
    result: village.Result.win,
    roleImage: ImagePath.Role.villager,
    roleName: 'Villager',
    status: village.CharacterStatus.unnaturalDeath
  },
  '10': {
    avatarImage: ImagePath.Character.t,
    avatarName: 'Yamada',
    characterId: '10',
    characterImage: ImagePath.Character.j,
    characterInitial: 'J',
    characterName: 'Jasmin',
    result: village.Result.win,
    roleImage: ImagePath.Role.mason,
    roleName: 'Mason',
    status: village.CharacterStatus.unnaturalDeath
  },
  '11': {
    avatarImage: ImagePath.Character.c,
    avatarName: 'Sasaki',
    characterId: '11',
    characterImage: ImagePath.Character.k,
    characterInitial: 'K',
    characterName: 'Kaiji',
    result: village.Result.win,
    roleImage: ImagePath.Role.mason,
    roleName: 'Mason',
    status: village.CharacterStatus.unnaturalDeath
  },
  '12': {
    avatarImage: ImagePath.Character.k,
    avatarName: 'Yamaguchi',
    characterId: '12',
    characterImage: ImagePath.Character.l,
    characterInitial: 'L',
    characterName: 'Louise',
    result: village.Result.win,
    roleImage: ImagePath.Role.villager,
    roleName: 'Villager',
    status: village.CharacterStatus.deathByAttack
  },
  '13': {
    avatarImage: ImagePath.Character.l,
    avatarName: 'Matsumoto',
    characterId: '13',
    characterImage: ImagePath.Character.m,
    characterInitial: 'M',
    characterName: 'Marthe',
    result: village.Result.win,
    roleImage: ImagePath.Role.villager,
    roleName: 'Villager',
    status: village.CharacterStatus.alive
  },
  '14': {
    avatarImage: ImagePath.Character.j,
    avatarName: 'Inoue',
    characterId: '14',
    characterImage: ImagePath.Character.n,
    characterInitial: 'N',
    characterName: 'Nanyamka',
    result: village.Result.win,
    roleImage: ImagePath.Role.villager,
    roleName: 'Villager',
    status: village.CharacterStatus.alive
  },
  '15': {
    avatarImage: ImagePath.Character.e,
    avatarName: 'Sato',
    characterId: '15',
    characterImage: ImagePath.Character.o,
    characterInitial: 'O',
    characterName: 'Oliwia',
    result: village.Result.win,
    roleImage: ImagePath.Role.villager,
    roleName: 'Villager',
    status: village.CharacterStatus.alive
  }
}
const losers: Props['losers'] = [
  '2',
  '5',
  '6',
  '7'
]
const me: Props['me'] = '1'
const summary: Props['summary'] = {
  loserTeam: new Set([village.Team.werehamster, village.Team.werewolf]),
  myTeam: village.Team.villager,
  winnerTeam: village.Team.villager
}
const winners: Props['winners'] = [
  '1',
  '3',
  '4',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15'
]

describe('<Result />', () => {
  test('visible={true}', () => {
    const handleClickCloseButton = jest.fn()
    const wrapper = shallow(
      <Result
        characters={characters}
        handleClickCloseButton={handleClickCloseButton}
        losers={losers}
        me={me}
        summary={summary}
        visible
        winners={winners}
      />
    )

    expect(handleClickCloseButton).toHaveBeenCalledTimes(0)
    expect(wrapper.find('.vi--result').exists()).toBe(true)
  })
  test('visible={false}', () => {
    const handleClickCloseButton = jest.fn()
    const wrapper = shallow(
      <Result
        characters={characters}
        handleClickCloseButton={handleClickCloseButton}
        losers={losers}
        me={me}
        summary={summary}
        visible={false}
        winners={winners}
      />
    )

    expect(handleClickCloseButton).toHaveBeenCalledTimes(0)
    expect(wrapper.isEmptyRender()).toBe(false)
  })
})
