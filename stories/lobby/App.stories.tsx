import * as React from 'react'
import {lobbyForHumanPlayer, waitingPage} from './initialState'
import App from '../../src/scripts/lobby/containers/App'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('lobby|App', module)
  .add('default', () => {
    const store = createStore(
      reducer,
      {
        obfucator: {
          loading: false,
          visible: false
        }
      }
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
  .add('lobbyForHumanPlayer', () => {
    const store = createStore(
      reducer,
      lobbyForHumanPlayer
    )

    const story =
      <Provider store={store}>
        <App />
      </Provider>

    return story
  })
