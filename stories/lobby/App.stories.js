// @flow
import App from '../../src/scripts/lobby/containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs/react'

storiesOf('lobby|App', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const store = createStore(
      reducer
    )

    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
