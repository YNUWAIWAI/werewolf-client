import * as ActionTypes from '../../src/scripts/village/constants/ActionTypes'
import * as React from 'react'
import CommandNavigation from '../../src/scripts/village/components/molecules/CommandNavigation'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('village|Command/CommandNavigation', module)
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue)
      }
    )
    const items = [
      {
        id: 'CommandNavigation.showResult',
        type: ActionTypes.Navigation.SHOW_RESULT
      },
      {
        id: 'CommandNavigation.returnToLobby',
        type: ActionTypes.Navigation.RETURN_TO_LOBBY
      }
    ]
    const story =
      <Provider store={store}>
        <IntlProvider>
          <CommandNavigation
            handleClick={type => action(`handleClick: ${type}`)}
            items={items}
          />
        </IntlProvider>
      </Provider>

    return story
  })
