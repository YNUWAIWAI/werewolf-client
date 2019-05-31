/* global village */
import * as React from 'react'
import Result, {Props} from '../../src/scripts/village/components/organisms/Result'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Result', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
  .add('15 players', () => {
    const agents: Props['agents'] = {
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        agentName: 'Adil',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        avatarName: 'Suzuki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        roleName: 'Seer',
        status: village.AgentStatus.alive
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        agentName: 'Borya',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        avatarName: 'Takahashi',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: 'Werewolf',
        status: village.AgentStatus.alive
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        agentName: 'Chacha',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/r_50x50.png',
        avatarName: 'Tanaka',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        roleName: 'Hunter',
        status: village.AgentStatus.alive
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        agentName: 'Devdatta',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        avatarName: 'Ito',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        roleName: 'Medium',
        status: village.AgentStatus.alive
      },
      agent5: {
        agentId: 5,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        agentName: 'Ekrem',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/s_50x50.png',
        avatarName: 'Watanabe',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        roleName: 'Werehamster',
        status: village.AgentStatus.deathByFear
      },
      agent6: {
        agentId: 6,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        agentName: 'Fernando',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        avatarName: 'Yamamoto',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        roleName: 'Madman',
        status: village.AgentStatus.deathByExecution
      },
      agent7: {
        agentId: 7,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        agentName: 'Gavriil',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        avatarName: 'Nakamura',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: 'Werewolf',
        status: village.AgentStatus.unnaturalDeath
      },
      agent8: {
        agentId: 8,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        agentName: 'Henrik',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        avatarName: 'Kobayashi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.unnaturalDeath
      },
      agent9: {
        agentId: 9,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        agentName: 'Ileanna',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        avatarName: 'Yoshida',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.unnaturalDeath
      },
      agent10: {
        agentId: 10,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        agentName: 'Jasmin',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/t_50x50.png',
        avatarName: 'Yamada',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        roleName: 'Mason',
        status: village.AgentStatus.unnaturalDeath
      },
      agent11: {
        agentId: 11,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        agentName: 'Kaiji',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        avatarName: 'Sasaki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        roleName: 'Mason',
        status: village.AgentStatus.unnaturalDeath
      },
      agent12: {
        agentId: 12,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        agentName: 'Louise',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        avatarName: 'Yamaguchi',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.deathByAttack
      },
      agent13: {
        agentId: 13,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        agentName: 'Marthe',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        avatarName: 'Matsumoto',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.alive
      },
      agent14: {
        agentId: 14,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        agentName: 'Nanyamka',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        avatarName: 'Inoue',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.alive
      },
      agent15: {
        agentId: 15,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        agentName: 'Oliwia',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        avatarName: 'Sato',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        roleName: 'Villager',
        status: village.AgentStatus.alive
      }
    }
    const losers: Props['losers'] = [
      'agent2',
      'agent5',
      'agent6',
      'agent7'
    ]
    const me: Props['me'] = 'agent1'
    const summary: Props['summary'] = {
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      winnerTeam: village.Team.villager
    }
    const winners: Props['winners'] = [
      'agent1',
      'agent3',
      'agent4',
      'agent8',
      'agent9',
      'agent10',
      'agent11',
      'agent12',
      'agent13',
      'agent14',
      'agent15'
    ]
    const story =
      <Result
        agents={agents}
        handleClickCloseButton={action('handleCloseClick')}
        losers={losers}
        me={me}
        summary={summary}
        visible
        winners={winners}
      />

    return story
  })
  .add('5 players', () => {
    const agents: Props['agents'] = {
      agent1: {
        agentId: 1,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        agentName: 'Adil',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        avatarName: 'Suzuki',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        roleName: 'Seer',
        status: village.AgentStatus.alive
      },
      agent2: {
        agentId: 2,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        agentName: 'Borya',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        avatarName: 'Takahashi',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        roleName: 'Werewolf',
        status: village.AgentStatus.deathByExecution
      },
      agent3: {
        agentId: 3,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        agentName: 'Chacha',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/r_50x50.png',
        avatarName: 'Tanaka',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        roleName: 'Hunter',
        status: village.AgentStatus.alive
      },
      agent4: {
        agentId: 4,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        agentName: 'Devdatta',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        avatarName: 'Ito',
        result: village.Result.win,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        roleName: 'Medium',
        status: village.AgentStatus.deathByExecution
      },
      agent5: {
        agentId: 5,
        agentImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        agentName: 'Ekrem',
        avatarImage: 'https://werewolf.world/image/0.3/agent_icons/50x50/s_50x50.png',
        avatarName: 'Watanabe',
        result: village.Result.lose,
        roleImage: 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        roleName: 'Werehamster',
        status: village.AgentStatus.deathByFear
      }
    }
    const losers: Props['losers'] = [
      'agent2',
      'agent5'
    ]
    const me: Props['me'] = 'agent1'
    const summary: Props['summary'] = {
      loserTeam: new Set([village.Team.werewolf, village.Team.werehamster]),
      myTeam: village.Team.villager,
      winnerTeam: village.Team.villager
    }
    const winners: Props['winners'] = [
      'agent1',
      'agent3',
      'agent4'
    ]
    const story =
      <Result
        agents={agents}
        handleClickCloseButton={action('handleCloseClick')}
        losers={losers}
        me={me}
        summary={summary}
        visible
        winners={winners}
      />

    return story
  })
