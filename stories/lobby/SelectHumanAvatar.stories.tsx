import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import IntlProvider from '../../src/scripts/lobby/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import SelectHumanAvatar from '../../src/scripts/lobby/containers/SelectHumanAvatarContainer'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('lobby|SelectHumanAvatar', module)
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        selectHumanAvatar: {
          avatar: {
            allIds: ['a1', 'a2'],
            byId: {
              'a1': {
                checked: false,
                name: 'avatar1'
              },
              'a2': {
                checked: false,
                name: 'avatar2'
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
          <SelectHumanAvatar />
        </IntlProvider>
      </Provider>

    return story
  })
