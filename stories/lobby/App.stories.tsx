import * as React from 'react'
import App from '../../src/scripts/lobby/containers/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'
import {waitingPage} from './initialState'

storiesOf('lobby|App', module)
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
  .add('waitingPage', () => {
    const store = createStore(
      reducer,
      waitingPage
    )

    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
