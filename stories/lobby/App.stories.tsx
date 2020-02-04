import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import {
  lobbyForHumanPlayer,
  selectHumanAvatar,
  selectRobotAvatar,
  waitingPage
} from './initialState'
import App from '../../src/scripts/lobby/containers/App'
import {Provider} from 'react-redux'
import {createHashHistory} from 'history'
import {createRouterMiddleware} from '../../src/scripts/lobby/middlewares'
import {createStore} from 'redux'
import {language} from './language'
import {radios} from '@storybook/addon-knobs'
import reducer from '../../src/scripts/lobby/reducers'
import {storiesOf} from '@storybook/react'

storiesOf('lobby|App', module)
  .add('default', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })

    return story
  })
  .add('movie', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        language: radios(language.label, language.options, language.defaultValue),
        obfucator: {
          loading: false,
          visible: false
        }
      },
      createRouterMiddleware(history)
    )
    const story =
      <div style={{position: 'relative'}}>
        <Provider store={store}>
          <App history={history} />
        </Provider>
        <video autoPlay loop style={{position: 'fixed', top: 0, left: 0, width: '150%', zIndex: -1}}>
          <source src="./lobby-background-neurons.mp4" type="video/mp4" />
        </video>
      </div>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })

    return story
  })
  .add('waitingPage', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... waitingPage,
        language: radios(language.label, language.options, language.defaultValue)
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/human/waitingForPlayers')

    return story
  })
  .add('lobbyForHumanPlayer', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... lobbyForHumanPlayer,
        language: radios(language.label, language.options, language.defaultValue)
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/human/lobby')

    return story
  })
  .add('selectHumanAvatar', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... selectHumanAvatar,
        language: radios(language.label, language.options, language.defaultValue)
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/human/selectAvatar')

    return story
  })
  .add('selectRobotAvatar', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... selectRobotAvatar,
        language: radios(language.label, language.options, language.defaultValue)
      },
      createRouterMiddleware(history)
    )
    const story =
      <Provider store={store}>
        <App history={history} />
      </Provider>

    store.dispatch({
      type: ActionTypes.App.SHOW_MAIN
    })
    history.replace('/robot/selectAvatar')

    return story
  })
