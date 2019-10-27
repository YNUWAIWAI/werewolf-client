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
        characterId: '1',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
        characterInitial: 'A',
        characterName: 'Adil',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/o_50x50.png',
        avatarName: 'Suzuki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        roleName: 'Seer',
        status: village.AgentStatus.alive
      },
      character2: {
        characterId: '2',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
        characterInitial: 'B',
        characterName: 'Borya',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
        avatarName: 'Takahashi',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: 'Werewolf',
        status: village.AgentStatus.alive
      },
      character3: {
        characterId: '3',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
        characterInitial: 'C',
        characterName: 'Chacha',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/r_50x50.png',
        avatarName: 'Tanaka',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        roleName: 'Hunter',
        status: village.AgentStatus.alive
      },
      character4: {
        characterId: '4',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
        characterInitial: 'D',
        characterName: 'Devdatta',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
        avatarName: 'Ito',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        roleName: 'Medium',
        status: village.AgentStatus.alive
      },
      character5: {
        characterId: '5',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        characterInitial: 'E',
        characterName: 'Ekrem',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/s_50x50.png',
        avatarName: 'Watanabe',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        roleName: 'Werehamster',
        status: village.AgentStatus.deathByFear
      },
      character6: {
        characterId: '6',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
        characterInitial: 'F',
        characterName: 'Fernando',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/n_50x50.png',
        avatarName: 'Yamamoto',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        roleName: 'Madman',
        status: village.AgentStatus.deathByExecution
      },
      character7: {
        characterId: '7',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
        characterInitial: 'G',
        characterName: 'Gavriil',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        avatarName: 'Nakamura',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: 'Werewolf',
        status: village.AgentStatus.unnaturalDeath
      },
      character8: {
        characterId: '8',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/h_50x50.png',
        characterInitial: 'H',
        characterName: 'Henrik',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
        avatarName: 'Kobayashi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.unnaturalDeath
      },
      character9: {
        characterId: '9',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
        characterInitial: 'I',
        characterName: 'Ileanna',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
        avatarName: 'Yoshida',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.unnaturalDeath
      },
      character10: {
        characterId: '10',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/j_50x50.png',
        characterInitial: 'J',
        characterName: 'Jasmin',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/t_50x50.png',
        avatarName: 'Yamada',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        roleName: 'Mason',
        status: village.AgentStatus.unnaturalDeath
      },
      character11: {
        characterId: '11',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/k_50x50.png',
        characterInitial: 'K',
        characterName: 'Kaiji',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
        avatarName: 'Sasaki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        roleName: 'Mason',
        status: village.AgentStatus.unnaturalDeath
      },
      character12: {
        characterId: '12',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/l_50x50.png',
        characterInitial: 'L',
        characterName: 'Louise',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/k_50x50.png',
        avatarName: 'Yamaguchi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.deathByAttack
      },
      character13: {
        characterId: '13',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/m_50x50.png',
        characterInitial: 'M',
        characterName: 'Marthe',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/l_50x50.png',
        avatarName: 'Matsumoto',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.alive
      },
      character14: {
        characterId: '14',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/n_50x50.png',
        characterInitial: 'N',
        characterName: 'Nanyamka',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/j_50x50.png',
        avatarName: 'Inoue',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.alive
      },
      character15: {
        characterId: '15',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/o_50x50.png',
        characterInitial: 'O',
        characterName: 'Oliwia',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        avatarName: 'Sato',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.alive
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
        characterId: '1',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
        characterInitial: 'A',
        characterName: 'Adil',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/o_50x50.png',
        avatarName: 'Suzuki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        roleName: 'Seer',
        status: village.AgentStatus.alive
      },
      character2: {
        characterId: '2',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
        characterInitial: 'B',
        characterName: 'Borya',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
        avatarName: 'Takahashi',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: 'Werewolf',
        status: village.AgentStatus.deathByExecution
      },
      character3: {
        characterId: '3',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
        characterInitial: 'C',
        characterName: 'Chacha',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/r_50x50.png',
        avatarName: 'Tanaka',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        roleName: 'Hunter',
        status: village.AgentStatus.alive
      },
      character4: {
        characterId: '4',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
        characterInitial: 'D',
        characterName: 'Devdatta',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
        avatarName: 'Ito',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        roleName: 'Medium',
        status: village.AgentStatus.deathByExecution
      },
      character5: {
        characterId: '5',
        characterImage: 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        characterInitial: 'E',
        characterName: 'Ekrem',
        avatarImage: 'https://werewolf.world/image/0.3/character_icons/50x50/s_50x50.png',
        avatarName: 'Watanabe',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        roleName: 'Werehamster',
        status: village.AgentStatus.deathByFear
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
