import * as React from 'react'
import * as village from './types'
import Prediction, {Props} from '../../src/scripts/village/components/organisms/Prediction'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import language from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Prediction', module)
  .add('15 players(spec is invisible)', () => {
    const characterStatus: Props['characterStatus'] = [
      {
        'id': '1',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
        'initial': 'A',
        'isSilent': true,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.dead
      },
      {
        'id': '3',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '6',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
        'initial': 'F',
        'isSilent': true,
        'name': 'Fernando',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '7',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
        'initial': 'G',
        'isSilent': false,
        'name': 'Gavriil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '8',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/h_50x50.png',
        'initial': 'H',
        'isSilent': false,
        'name': 'Henrik',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '9',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
        'initial': 'I',
        'isSilent': false,
        'name': 'Ileanna',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '10',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/j_50x50.png',
        'initial': 'J',
        'isSilent': false,
        'name': 'Jasmin',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '11',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/k_50x50.png',
        'initial': 'K',
        'isSilent': false,
        'name': 'Kaiji',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '12',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/l_50x50.png',
        'initial': 'L',
        'isSilent': false,
        'name': 'Louise',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '13',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/m_50x50.png',
        'initial': 'M',
        'isSilent': false,
        'name': 'Marthe',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '14',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/n_50x50.png',
        'initial': 'N',
        'isSilent': false,
        'name': 'Nanyamka',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '15',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/o_50x50.png',
        'initial': 'O',
        'isSilent': false,
        'name': 'Oliwia',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfCharacters': 4
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        'name': '霊媒師',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        'name': '狩人',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        'name': '共有者',
        'numberOfCharacters': 2
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfCharacters': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        'name': 'ハムスター人間',
        'numberOfCharacters': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: Props['table'] = {
      '1': {
        hunter: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werehamster: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.CROSS
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.CIRCLE
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '10': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '15': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
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
                characterStatus={characterStatus}
                handleBoardClick={({characterId, roleId}) => action(`handleBoardClick [${characterId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
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
    const characterStatus: Props['characterStatus'] = [
      {
        'id': '1',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
        'initial': 'A',
        'isSilent': false,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '3',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfCharacters': 2
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfCharacters': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: false
    }
    const table: Props['table'] = {
      '1': {
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
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
                characterStatus={characterStatus}
                handleBoardClick={({characterId, roleId}) => action(`handleBoardClick [${characterId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
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
    const characterStatus: Props['characterStatus'] = [
      {
        'id': '1',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
        'initial': 'A',
        'isSilent': false,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '3',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '6',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/f_50x50.png',
        'initial': 'F',
        'isSilent': false,
        'name': 'Fernando',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '7',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/g_50x50.png',
        'initial': 'G',
        'isSilent': false,
        'name': 'Gavriil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '8',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/h_50x50.png',
        'initial': 'H',
        'isSilent': false,
        'name': 'Henrik',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '9',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/i_50x50.png',
        'initial': 'I',
        'isSilent': false,
        'name': 'Ileanna',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '10',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/j_50x50.png',
        'initial': 'J',
        'isSilent': false,
        'name': 'Jasmin',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '11',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/k_50x50.png',
        'initial': 'K',
        'isSilent': false,
        'name': 'Kaiji',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '12',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/l_50x50.png',
        'initial': 'L',
        'isSilent': false,
        'name': 'Louise',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '13',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/m_50x50.png',
        'initial': 'M',
        'isSilent': false,
        'name': 'Marthe',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '14',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/n_50x50.png',
        'initial': 'N',
        'isSilent': false,
        'name': 'Nanyamka',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '15',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/o_50x50.png',
        'initial': 'O',
        'isSilent': false,
        'name': 'Oliwia',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfCharacters': 4
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.medium,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/medium_50x50.png',
        'name': '霊媒師',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/hunter_50x50.png',
        'name': '狩人',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.mason,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/mason_50x50.png',
        'name': '共有者',
        'numberOfCharacters': 2
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfCharacters': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werehamster_50x50.png',
        'name': 'ハムスター人間',
        'numberOfCharacters': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: true
    }
    const table: Props['table'] = {
      '1': {
        hunter: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        mason: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        medium: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werehamster: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.CROSS
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.CIRCLE
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '6': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '7': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '8': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '9': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '10': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '11': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '12': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '13': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '14': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '15': {
        hunter: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        mason: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        medium: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werehamster: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
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
                characterStatus={characterStatus}
                handleBoardClick={({characterId, roleId}) => action(`handleBoardClick [${characterId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
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
    const characterStatus: Props['characterStatus'] = [
      {
        'id': '1',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/a_50x50.png',
        'initial': 'A',
        'isSilent': false,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/b_50x50.png',
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '3',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/c_50x50.png',
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/d_50x50.png',
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': 'https://werewolf.world/image/0.3/character_icons/50x50/e_50x50.png',
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/villager_50x50.png',
        'name': '村人',
        'numberOfCharacters': 2
      },
      {
        'id': village.RoleId.seer,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/seer_50x50.png',
        'name': '占い師',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.madman,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/madman_50x50.png',
        'name': '狂人',
        'numberOfCharacters': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': 'https://werewolf.world/image/0.3/role_icons/50x50withTI/werewolf_50x50.png',
        'name': '人狼',
        'numberOfCharacters': 1
      }
    ]
    const spec: Props['spec'] = {
      role: village.RoleId.villager,
      visible: true
    }
    const table: Props['table'] = {
      '1': {
        madman: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.CIRCLE
        },
        villager: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        werewolf: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        }
      },
      '2': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.TRIANGLE
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '3': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '4': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        }
      },
      '5': {
        madman: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        seer: {
          day: 1,
          fixed: true,
          state: village.BoardState.FILL
        },
        villager: {
          day: 1,
          fixed: false,
          state: village.BoardState.QUESTION
        },
        werewolf: {
          day: 1,
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
                characterStatus={characterStatus}
                handleBoardClick={({characterId, roleId}) => action(`handleBoardClick [${characterId}, ${roleId}]`)}
                handleMouseEnter={role => action(`handleMouseEnter ${role}`)}
                handleMouseLeave={action('handleMouseLeave')}
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
