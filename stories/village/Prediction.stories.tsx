/* global village */
import * as React from 'react'
import Prediction, {Props} from '../../src/scripts/village/components/organisms/Prediction'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from '../language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Prediction', module)
  .add('15 players(spec is invisible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        'initial': 'A',
        'name': 'Adil',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        'initial': 'B',
        'name': 'Borya',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        'initial': 'C',
        'name': 'Chacha',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        'initial': 'D',
        'name': 'Devdatta',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        'initial': 'E',
        'name': 'Ekrem',
        'status': village.AgentStatus.alive
      },
      {
        'id': 6,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        'initial': 'F',
        'name': 'Fernando',
        'status': village.AgentStatus.alive
      },
      {
        'id': 7,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        'initial': 'G',
        'name': 'Gavriil',
        'status': village.AgentStatus.alive
      },
      {
        'id': 8,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        'initial': 'H',
        'name': 'Henrik',
        'status': village.AgentStatus.alive
      },
      {
        'id': 9,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        'initial': 'I',
        'name': 'Ileanna',
        'status': village.AgentStatus.alive
      },
      {
        'id': 10,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        'initial': 'J',
        'name': 'Jasmin',
        'status': village.AgentStatus.alive
      },
      {
        'id': 11,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        'initial': 'K',
        'name': 'Kaiji',
        'status': village.AgentStatus.alive
      },
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        'initial': 'L',
        'name': 'Louise',
        'status': village.AgentStatus.alive
      },
      {
        'id': 13,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        'initial': 'M',
        'name': 'Marthe',
        'status': village.AgentStatus.alive
      },
      {
        'id': 14,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        'initial': 'N',
        'name': 'Nanyamka',
        'status': village.AgentStatus.alive
      },
      {
        'id': 15,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        'initial': 'O',
        'name': 'Oliwia',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfAgents': 4
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        'name': '霊媒師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        'name': '狩人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        'name': '共有者',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        'name': 'ハムスター人間',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: Props['table'] = {
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
          state: village.BoardState.CROSS
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
          state: village.BoardState.CIRCLE
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--app">
            <div className="vi--activity">
              <Prediction
                handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
                playerStatus={playerStatus}
                roleStatus={roleStatus}
                spec={spec}
                table={table}
              />
            </div>
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('5 players(spec is invisible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        'initial': 'A',
        'name': 'Adil',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        'initial': 'B',
        'name': 'Borya',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        'initial': 'C',
        'name': 'Chacha',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        'initial': 'D',
        'name': 'Devdatta',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        'initial': 'E',
        'name': 'Ekrem',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: Props['table'] = {
      '1': {
        madman: {
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
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
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
          state: village.BoardState.TRIANGLE
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
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--app">
            <div className="vi--activity">
              <Prediction
                handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
                playerStatus={playerStatus}
                roleStatus={roleStatus}
                spec={spec}
                table={table}
              />
            </div>
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('15 players(spec is visible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        'initial': 'A',
        'name': 'Adil',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        'initial': 'B',
        'name': 'Borya',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        'initial': 'C',
        'name': 'Chacha',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        'initial': 'D',
        'name': 'Devdatta',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        'initial': 'E',
        'name': 'Ekrem',
        'status': village.AgentStatus.alive
      },
      {
        'id': 6,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/f_50x50.png',
        'initial': 'F',
        'name': 'Fernando',
        'status': village.AgentStatus.alive
      },
      {
        'id': 7,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/g_50x50.png',
        'initial': 'G',
        'name': 'Gavriil',
        'status': village.AgentStatus.alive
      },
      {
        'id': 8,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/h_50x50.png',
        'initial': 'H',
        'name': 'Henrik',
        'status': village.AgentStatus.alive
      },
      {
        'id': 9,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/i_50x50.png',
        'initial': 'I',
        'name': 'Ileanna',
        'status': village.AgentStatus.alive
      },
      {
        'id': 10,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/j_50x50.png',
        'initial': 'J',
        'name': 'Jasmin',
        'status': village.AgentStatus.alive
      },
      {
        'id': 11,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/k_50x50.png',
        'initial': 'K',
        'name': 'Kaiji',
        'status': village.AgentStatus.alive
      },
      {
        'id': 12,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/l_50x50.png',
        'initial': 'L',
        'name': 'Louise',
        'status': village.AgentStatus.alive
      },
      {
        'id': 13,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/m_50x50.png',
        'initial': 'M',
        'name': 'Marthe',
        'status': village.AgentStatus.alive
      },
      {
        'id': 14,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/n_50x50.png',
        'initial': 'N',
        'name': 'Nanyamka',
        'status': village.AgentStatus.alive
      },
      {
        'id': 15,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/o_50x50.png',
        'initial': 'O',
        'name': 'Oliwia',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfAgents': 4
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        'name': '霊媒師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        'name': '狩人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        'name': '共有者',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        'name': 'ハムスター人間',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: true
    }
    const table: Props['table'] = {
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
          state: village.BoardState.CROSS
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
          state: village.BoardState.CIRCLE
        },
        seer: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          date: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
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
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--app">
            <div className="vi--activity">
              <Prediction
                handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
                playerStatus={playerStatus}
                roleStatus={roleStatus}
                spec={spec}
                table={table}
              />
            </div>
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
  .add('5 players(spec is visible)', () => {
    const playerStatus: Props['playerStatus'] = [
      {
        'id': 1,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/a_50x50.png',
        'initial': 'A',
        'name': 'Adil',
        'status': village.AgentStatus.alive
      },
      {
        'id': 2,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/b_50x50.png',
        'initial': 'B',
        'name': 'Borya',
        'status': village.AgentStatus.alive
      },
      {
        'id': 3,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/c_50x50.png',
        'initial': 'C',
        'name': 'Chacha',
        'status': village.AgentStatus.alive
      },
      {
        'id': 4,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/d_50x50.png',
        'initial': 'D',
        'name': 'Devdatta',
        'status': village.AgentStatus.alive
      },
      {
        'id': 5,
        'image': 'https://werewolf.world/image/0.3/agent_icons/50x50/e_50x50.png',
        'initial': 'E',
        'name': 'Ekrem',
        'status': village.AgentStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfAgents': 2
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfAgents': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfAgents': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: true
    }
    const table: Props['table'] = {
      '1': {
        madman: {
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
        werewolf: {
          date: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
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
          state: village.BoardState.TRIANGLE
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
        werewolf: {
          date: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      }
    }
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <div className="vi--app">
            <div className="vi--activity">
              <Prediction
                handleBoardClick={(agentId, roleId) => action(`handleBoardClick [${agentId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
                playerStatus={playerStatus}
                roleStatus={roleStatus}
                spec={spec}
                table={table}
              />
            </div>
          </div>
        </IntlProvider>
      </Provider>

    return story
  })
