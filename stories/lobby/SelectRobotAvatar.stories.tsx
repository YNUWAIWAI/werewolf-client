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
            allIds: ['a1', 'a2', 'a3'],
            byId: {
              'a1': {
                authorized: lobby.Authorized.no,
                automation: lobby.Automation.full,
                checked: false,
                name: 'avatar1',
                testStatus: lobby.TestStatus.notPassed
              },
              'a2': {
                authorized: lobby.Authorized.yes,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar2',
                testStatus: lobby.TestStatus.passed
              },
              'a3': {
                authorized: lobby.Authorized.waitForAcceptance,
                automation: lobby.Automation.semi,
                checked: false,
                name: 'avatar3',
                testStatus: lobby.TestStatus.passed
              }
            }
          },
          menuItems: [
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.SHOW_MAIN]
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
