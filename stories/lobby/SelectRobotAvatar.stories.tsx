import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import SelectRobotAvatar from '../../src/scripts/lobby/containers/SelectRobotAvatarContainer'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('lobby|SelectRobotAvatar', module)
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        selectRobotAvatar: {
          avatar: {
            allIds: ['a1', 'a2', 'a3', 'a4', 'a5'],
            byId: {
              'a1': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
                authorized: lobby.Authorized.no,
                automation: lobby.Automation.full,
                checked: false,
                name: 'avatar1',
                status: lobby.AvatarStatus.awaitingAuthorization,
                testStatus: lobby.TestStatus.notPassed
              },
              'a2': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
                authorized: lobby.Authorized.yes,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar2',
                status: lobby.AvatarStatus.awaitingCommunicationTest,
                testStatus: lobby.TestStatus.passed
              },
              'a3': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
                authorized: lobby.Authorized.waitForAcceptance,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar3',
                status: lobby.AvatarStatus.connected,
                testStatus: lobby.TestStatus.passed
              },
              'a4': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3303',
                authorized: lobby.Authorized.waitForAcceptance,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar4',
                status: lobby.AvatarStatus.runningInTheBackground,
                testStatus: lobby.TestStatus.passed
              },
              'a5': {
                accessToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3304',
                authorized: lobby.Authorized.waitForAcceptance,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar5',
                status: lobby.AvatarStatus.runningInTheForeground,
                testStatus: lobby.TestStatus.passed
              }
            }
          },
          createNewAvatarCommand: [
            {
              id: 'CreateNewAvatar.create',
              types: [ActionTypes.SelectRobotAvatar.CREATE]
            }
          ],
          menuItems: [
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ],
          selectAvatarCommand: [
            {
              id: 'AvatarSelectCommand.runInTheForeground',
              types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_FOREGROUND]
            },
            {
              id: 'AvatarSelectCommand.runInTheBackground',
              types: [ActionTypes.SelectRobotAvatar.RUN_IN_THE_BACKGROUND]
            },
            {
              id: 'AvatarSelectCommand.stop',
              types: [ActionTypes.SelectRobotAvatar.STOP]
            },
            {
              id: 'AvatarSelectCommand.delete',
              types: [ActionTypes.SelectRobotAvatar.DELETE]
            }
          ]
        }
      }
    )
    const story =
      <Provider store={store}>
        <IntlProvider>
          <SelectRobotAvatar />
        </IntlProvider>
      </Provider>

    return story
  })
