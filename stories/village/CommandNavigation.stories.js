// @flow
import * as types from '../../src/scripts/village/constants/ActionTypes'
import CommandNavigation from '../../src/scripts/village/components/molecules/CommandNavigation'
import IntlProvider from '../../src/scripts/village/containers/IntlProviderContainer'
import React from 'react'
import {action} from '@storybook/addon-actions'
import {createStore} from 'redux'
import reducer from '../../src/scripts/village/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

const store = createStore(
  reducer
)

storiesOf('village|Command/CommandNavigation', module)
  .addDecorator(withKnobs)
  .addDecorator(story =>
    <IntlProvider store={store}>
      {story()}
    </IntlProvider>
  )
  .add('default', () => {
    const items = [
      {
        id: 'CommandPostMortemContainer.showResult',
        type: types.SHOW_RESULT
      },
      {
        id: 'CommandPostMortemContainer.returnToLobby',
        type: types.RETURN_TO_LOBBY
      }
    ]
    const story = <CommandNavigation handleClick={type => action(`handleClick: ${type}`)} items={items} />

    return story
  })
