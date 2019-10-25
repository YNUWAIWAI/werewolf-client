import * as React from 'react'
import Result, {Props} from './Result'
import {shallow} from 'enzyme'
import {village} from '../../types'

const characters: Props['characters'] = {
  '1': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/o_50x50.png',
    avatarName: 'Suzuki',
    characterId: '1',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
    characterInitial: 'A',
    characterName: 'Adil',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
    roleName: 'Seer',
    status: village.CharacterStatus.alive
  },
  '2': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
    avatarName: 'Takahashi',
    characterId: '2',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
    characterInitial: 'B',
    characterName: 'Borya',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
    roleName: 'Werewolf',
    status: village.CharacterStatus.alive
  },
  '3': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/r_50x50.png',
    avatarName: 'Tanaka',
    characterId: '3',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
    characterInitial: 'C',
    characterName: 'Chacha',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
    roleName: 'Hunter',
    status: village.CharacterStatus.alive
  },
  '4': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
    avatarName: 'Ito',
    characterId: '4',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
    characterInitial: 'D',
    characterName: 'Devdatta',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
    roleName: 'Medium',
    status: village.CharacterStatus.alive
  },
  '5': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/s_50x50.png',
    avatarName: 'Watanabe',
    characterId: '5',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
    characterInitial: 'E',
    characterName: 'Ekrem',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
    roleName: 'Werehamster',
    status: village.CharacterStatus.deathByFear
  },
  '6': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/n_50x50.png',
    avatarName: 'Yamamoto',
    characterId: '6',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
    characterInitial: 'F',
    characterName: 'Fernando',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
    roleName: 'Madman',
    status: village.CharacterStatus.deathByExecution
  },
  '7': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
    avatarName: 'Nakamura',
    characterId: '7',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
    characterInitial: 'G',
    characterName: 'Gavriil',
    result: village.Result.lose,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
    roleName: 'Werewolf',
    status: village.CharacterStatus.unnaturalDeath
  },
  '8': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
    avatarName: 'Kobayashi',
    characterId: '8',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/h_50x50.png',
    characterInitial: 'H',
    characterName: 'Henrik',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
    roleName: 'Villager',
    status: village.CharacterStatus.unnaturalDeath
  },
  '9': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
    avatarName: 'Yoshida',
    characterId: '9',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
    characterInitial: 'I',
    characterName: 'Ileanna',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
    roleName: 'Villager',
    status: village.CharacterStatus.unnaturalDeath
  },
  '10': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/t_50x50.png',
    avatarName: 'Yamada',
    characterId: '10',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/j_50x50.png',
    characterInitial: 'J',
    characterName: 'Jasmin',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
    roleName: 'Mason',
    status: village.CharacterStatus.unnaturalDeath
  },
  '11': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
    avatarName: 'Sasaki',
    characterId: '11',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/k_50x50.png',
    characterInitial: 'K',
    characterName: 'Kaiji',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
    roleName: 'Mason',
    status: village.CharacterStatus.unnaturalDeath
  },
  '12': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/k_50x50.png',
    avatarName: 'Yamaguchi',
    characterId: '12',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/l_50x50.png',
    characterInitial: 'L',
    characterName: 'Louise',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
    roleName: 'Villager',
    status: village.CharacterStatus.deathByAttack
  },
  '13': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/l_50x50.png',
    avatarName: 'Matsumoto',
    characterId: '13',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/m_50x50.png',
    characterInitial: 'M',
    characterName: 'Marthe',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
    roleName: 'Villager',
    status: village.CharacterStatus.alive
  },
  '14': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/j_50x50.png',
    avatarName: 'Inoue',
    characterId: '14',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/n_50x50.png',
    characterInitial: 'N',
    characterName: 'Nanyamka',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
    roleName: 'Villager',
    status: village.CharacterStatus.alive
  },
  '15': {
    avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
    avatarName: 'Sato',
    characterId: '15',
    characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/o_50x50.png',
    characterInitial: 'O',
    characterName: 'Oliwia',
    result: village.Result.win,
    roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
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
const me: Props['me'] = 'agent1'
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
