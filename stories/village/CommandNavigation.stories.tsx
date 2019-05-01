import * as ActionTypes from '../../src/scripts/village/constants/ActionTypes'
import * as React from 'react'
import CommandNavigation from '../../src/scripts/village/components/molecules/CommandNavigation'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import {Provider} from 'react-redux'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'

const store = createStore(
  reducer
)

storiesOf('village|Command/CommandNavigation', module)
  .addDecorator(story => (
    <Provider store={store}>
      <IntlProvider>
        {story()}
      </IntlProvider>
    </Provider>
  ))
  .add('default', () => {
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
    const story = <CommandNavigation handleClick={type => action(`handleClick: ${type}`)} items={items} />

    return story
  })
