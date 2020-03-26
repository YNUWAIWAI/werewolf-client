import * as React from 'react'
import Prediction, {Props} from '../../src/scripts/village/components/organisms/Prediction'
import {ImagePath} from '../../src/scripts/village/constants/ImagePath'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {village} from './types'

storiesOf('village|Prediction', module)
  .add('15 players(spec is invisible)', () => {
    const characterStatus: Props['characterStatus'] = [
      {
        'id': '1',
        'image': ImagePath.Character.a,
        'initial': 'A',
        'isSilent': true,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': ImagePath.Character.b,
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.dead
      },
      {
        'id': '3',
        'image': ImagePath.Character.c,
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': ImagePath.Character.d,
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': ImagePath.Character.e,
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '6',
        'image': ImagePath.Character.f,
        'initial': 'F',
        'isSilent': true,
        'name': 'Fernando',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '7',
        'image': ImagePath.Character.g,
        'initial': 'G',
        'isSilent': false,
        'name': 'Gavriil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '8',
        'image': ImagePath.Character.h,
        'initial': 'H',
        'isSilent': false,
        'name': 'Henrik',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '9',
        'image': ImagePath.Character.i,
        'initial': 'I',
        'isSilent': false,
        'name': 'Ileanna',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '10',
        'image': ImagePath.Character.j,
        'initial': 'J',
        'isSilent': false,
        'name': 'Jasmin',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '11',
        'image': ImagePath.Character.k,
        'initial': 'K',
        'isSilent': false,
        'name': 'Kaiji',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '12',
        'image': ImagePath.Character.l,
        'initial': 'L',
        'isSilent': false,
        'name': 'Louise',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '13',
        'image': ImagePath.Character.m,
        'initial': 'M',
        'isSilent': false,
        'name': 'Marthe',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '14',
        'image': ImagePath.Character.n,
        'initial': 'N',
        'isSilent': false,
        'name': 'Nanyamka',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '15',
        'image': ImagePath.Character.o,
        'initial': 'O',
        'isSilent': false,
        'name': 'Oliwia',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': ImagePath.Role.villager,
        'name': '村人',
        'numberOfPlayers': 4
      },
      {
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': '占い師',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.medium,
        'image': ImagePath.Role.medium,
        'name': '霊媒師',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': ImagePath.Role.hunter,
        'name': '狩人',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.mason,
        'image': ImagePath.Role.mason,
        'name': '共有者',
        'numberOfPlayers': 2
      },
      {
        'id': village.RoleId.madman,
        'image': ImagePath.Role.madman,
        'name': '狂人',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': ImagePath.Role.werewolf,
        'name': '人狼',
        'numberOfPlayers': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': ImagePath.Role.werehamster,
        'name': 'ハムスター人間',
        'numberOfPlayers': 1
      }
    ]
    const spec: Props['spec'] = {
      position: {
        left: 0,
        top: 0
      },
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
        'image': ImagePath.Character.a,
        'initial': 'A',
        'isSilent': false,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': ImagePath.Character.b,
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '3',
        'image': ImagePath.Character.c,
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': ImagePath.Character.d,
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': ImagePath.Character.e,
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': ImagePath.Role.villager,
        'name': '村人',
        'numberOfPlayers': 2
      },
      {
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': '占い師',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.madman,
        'image': ImagePath.Role.madman,
        'name': '狂人',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': ImagePath.Role.werewolf,
        'name': '人狼',
        'numberOfPlayers': 1
      }
    ]
    const spec: Props['spec'] = {
      position: {
        left: 0,
        top: 0
      },
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
        'image': ImagePath.Character.a,
        'initial': 'A',
        'isSilent': false,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': ImagePath.Character.b,
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '3',
        'image': ImagePath.Character.c,
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': ImagePath.Character.d,
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': ImagePath.Character.e,
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '6',
        'image': ImagePath.Character.f,
        'initial': 'F',
        'isSilent': false,
        'name': 'Fernando',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '7',
        'image': ImagePath.Character.g,
        'initial': 'G',
        'isSilent': false,
        'name': 'Gavriil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '8',
        'image': ImagePath.Character.h,
        'initial': 'H',
        'isSilent': false,
        'name': 'Henrik',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '9',
        'image': ImagePath.Character.i,
        'initial': 'I',
        'isSilent': false,
        'name': 'Ileanna',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '10',
        'image': ImagePath.Character.j,
        'initial': 'J',
        'isSilent': false,
        'name': 'Jasmin',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '11',
        'image': ImagePath.Character.k,
        'initial': 'K',
        'isSilent': false,
        'name': 'Kaiji',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '12',
        'image': ImagePath.Character.l,
        'initial': 'L',
        'isSilent': false,
        'name': 'Louise',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '13',
        'image': ImagePath.Character.m,
        'initial': 'M',
        'isSilent': false,
        'name': 'Marthe',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '14',
        'image': ImagePath.Character.n,
        'initial': 'N',
        'isSilent': false,
        'name': 'Nanyamka',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '15',
        'image': ImagePath.Character.o,
        'initial': 'O',
        'isSilent': false,
        'name': 'Oliwia',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': ImagePath.Role.villager,
        'name': '村人',
        'numberOfPlayers': 4
      },
      {
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': '占い師',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.medium,
        'image': ImagePath.Role.medium,
        'name': '霊媒師',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.hunter,
        'image': ImagePath.Role.hunter,
        'name': '狩人',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.mason,
        'image': ImagePath.Role.mason,
        'name': '共有者',
        'numberOfPlayers': 2
      },
      {
        'id': village.RoleId.madman,
        'image': ImagePath.Role.madman,
        'name': '狂人',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': ImagePath.Role.werewolf,
        'name': '人狼',
        'numberOfPlayers': 2
      },
      {
        'id': village.RoleId.werehamster,
        'image': ImagePath.Role.werehamster,
        'name': 'ハムスター人間',
        'numberOfPlayers': 1
      }
    ]
    const spec: Props['spec'] = {
      position: {
        left: 0,
        top: 0
      },
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
        'image': ImagePath.Character.a,
        'initial': 'A',
        'isSilent': false,
        'name': 'Adil',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '2',
        'image': ImagePath.Character.b,
        'initial': 'B',
        'isSilent': false,
        'name': 'Borya',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '3',
        'image': ImagePath.Character.c,
        'initial': 'C',
        'isSilent': false,
        'name': 'Chacha',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '4',
        'image': ImagePath.Character.d,
        'initial': 'D',
        'isSilent': false,
        'name': 'Devdatta',
        'status': village.CharacterStatus.alive
      },
      {
        'id': '5',
        'image': ImagePath.Character.e,
        'initial': 'E',
        'isSilent': false,
        'name': 'Ekrem',
        'status': village.CharacterStatus.alive
      }
    ]
    const roleStatus: Props['roleStatus'] = [
      {
        'id': village.RoleId.villager,
        'image': ImagePath.Role.villager,
        'name': '村人',
        'numberOfPlayers': 2
      },
      {
        'id': village.RoleId.seer,
        'image': ImagePath.Role.seer,
        'name': '占い師',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.madman,
        'image': ImagePath.Role.madman,
        'name': '狂人',
        'numberOfPlayers': 1
      },
      {
        'id': village.RoleId.werewolf,
        'image': ImagePath.Role.werewolf,
        'name': '人狼',
        'numberOfPlayers': 1
      }
    ]
    const spec: Props['spec'] = {
      position: {
        left: 0,
        top: 0
      },
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
