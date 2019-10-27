import * as React from 'react'
import * as village from './types'
import Result, {Props} from '../../src/scripts/village/components/organisms/Result'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Result', module)
  .add('15 players', () => {
    const characters: Props['characters'] = {
      character1: {
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
      character2: {
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
      character3: {
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
      character4: {
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
      character5: {
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
      character6: {
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
      character7: {
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
      character8: {
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
      character9: {
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
      character10: {
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
      character11: {
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
      character12: {
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
      character13: {
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
      character14: {
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
      character15: {
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
      'character2',
      'character5',
      'character6',
      'character7'
    ]
    const me: Props['me'] = 'character1'
    const summary: Props['summary'] = {
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      winnerTeam: village.Team.villager
    }
    const winners: Props['winners'] = [
      'character1',
      'character3',
      'character4',
      'character8',
      'character9',
      'character10',
      'character11',
      'character12',
      'character13',
      'character14',
      'character15'
    ]
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Result
            characters={characters}
            handleClickCloseButton={action('handleCloseClick')}
            losers={losers}
            me={me}
            summary={summary}
            visible
            winners={winners}
          />
        </IntlProvider>
      </Provider>

    return story
  })
  .add('5 players', () => {
    const characters: Props['characters'] = {
      character1: {
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
      character2: {
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
        avatarName: 'Takahashi',
        characterId: '2',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
        characterInitial: 'B',
        characterName: 'Borya',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: 'Werewolf',
        status: village.CharacterStatus.deathByExecution
      },
      character3: {
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
      character4: {
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
        avatarName: 'Ito',
        characterId: '4',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
        characterInitial: 'D',
        characterName: 'Devdatta',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        roleName: 'Medium',
        status: village.CharacterStatus.deathByExecution
      },
      character5: {
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
      }
    }
    const losers: Props['losers'] = [
      'character2',
      'character5'
    ]
    const me: Props['me'] = 'character1'
    const summary: Props['summary'] = {
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      winnerTeam: village.Team.villager
    }
    const winners: Props['winners'] = [
      'character1',
      'character3',
      'character4'
    ]
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <Result
            characters={characters}
            handleClickCloseButton={action('handleCloseClick')}
            losers={losers}
            me={me}
            summary={summary}
            visible
            winners={winners}
          />
        </IntlProvider>
      </Provider>

    return story
  })
