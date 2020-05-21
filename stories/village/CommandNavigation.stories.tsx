/* eslint-disable no-console */
import * as ActionTypes from '../../src/scripts/village/constants/ActionTypes'
import * as React from 'react'
import CommandNavigation from '../../src/scripts/village/components/molecules/CommandNavigation'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

storiesOf('village|Command/CommandNavigation', module)
  .addDecorator(story => (
    <div
      className={`vi ${radios(theme.label, theme.options, theme.defaultValue)}`}
    >
      {story()}
      <div className="vi--background" />
    </div>
  ))
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
            handleClick={type => console.log(`handleClick: ${type}`)}
            items={items}
            navigatable
          />
        </IntlProvider>
      </Provider>

    return story
  })
