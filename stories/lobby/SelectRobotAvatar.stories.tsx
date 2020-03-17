import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import {ImagePath} from '../../src/scripts/lobby/constants/ImagePath'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import SelectRobotAvatar from '../../src/scripts/lobby/containers/SelectRobotAvatarContainer'
import {createStore} from 'redux'
import {language} from './language'
import {lobby} from './types'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

storiesOf('lobby|SelectRobotAvatar', module)
  .addDecorator(story => {
    return (
      <div
        className={`lo ${radios(theme.label, theme.options, theme.defaultValue)}`}
      >
        {story()}
        <div className="lo--video" />
      </div>
    )
  })
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        selectRobotAvatar: {
          avatar: {
            allIds: ['3F2504E0-4F89-11D3-9A0C-0305E82C3300', '3F2504E0-4F89-11D3-9A0C-0305E82C3301', '3F2504E0-4F89-11D3-9A0C-0305E82C3302', '3F2504E0-4F89-11D3-9A0C-0305E82C3303', '3F2504E0-4F89-11D3-9A0C-0305E82C3304'],
            byId: {
              '3F2504E0-4F89-11D3-9A0C-0305E82C3300': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: true,
                isHover: false,
                isReadyForAcceptance: false,
                isTestPassed: false,
                language: lobby.Language.en,
                name: 'avatar1',
                status: lobby.AvatarStatus.awaitingAuthorization,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3301': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: true,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: false,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar2',
                status: lobby.AvatarStatus.awaitingCommunicationTest,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3302': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: true,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar3',
                status: lobby.AvatarStatus.connected,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3303': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: true,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar4',
                status: lobby.AvatarStatus.runningInTheBackground,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
              },
              '3F2504E0-4F89-11D3-9A0C-0305E82C3304': {
                checked: false,
                image: ImagePath.Character.a,
                isAuthorized: false,
                isFullyAutomated: false,
                isHover: false,
                isReadyForAcceptance: true,
                isTestPassed: true,
                language: lobby.Language.en,
                name: 'avatar5',
                status: lobby.AvatarStatus.runningInTheForeground,
                token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
              }
            }
          },
          command: [
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
          ],
          menuItems: [
            {
              id: 'Menu.createNewAvatar',
              types: [ActionTypes.App.SHOW_CREATE_NEW_AVATAR]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
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
