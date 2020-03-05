import * as ActionTypes from '../../src/scripts/lobby/constants/ActionTypes'
import * as React from 'react'
import {
  lobbyForHumanPlayer,
  selectHumanAvatar,
  selectRobotAvatar,
  waitingPage
} from './initialState'
import {
  number,
  radios
} from '@storybook/addon-knobs'
import App from '../../src/scripts/lobby/App'
import {Provider} from 'react-redux'
import {createHashHistory} from 'history'
import {createRouterMiddleware} from '../../src/scripts/lobby/middlewares'
import {createStore} from 'redux'
import {language} from './language'
import reducer from '../../src/scripts/lobby/reducers'
import {sound} from './sound'
import {storiesOf} from '@storybook/react'
import {theme} from './theme'

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
        },
        sound: {
          volume: number(sound.label, sound.defaultValue, sound.options)
        },
        theme: radios(theme.label, theme.options, theme.defaultValue)
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
  .add('waitingPage', () => {
    const history = createHashHistory()
    const store = createStore(
      reducer,
      {
        ... waitingPage,
        language: radios(language.label, language.options, language.defaultValue),
        sound: {
          volume: number(sound.label, sound.defaultValue, sound.options)
        },
        theme: radios(theme.label, theme.options, theme.defaultValue)
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
        language: radios(language.label, language.options, language.defaultValue),
        sound: {
          volume: number(sound.label, sound.defaultValue, sound.options)
        },
        theme: radios(theme.label, theme.options, theme.defaultValue)
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
        language: radios(language.label, language.options, language.defaultValue),
        sound: {
          volume: number(sound.label, sound.defaultValue, sound.options)
        },
        theme: radios(theme.label, theme.options, theme.defaultValue)
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
        language: radios(language.label, language.options, language.defaultValue),
        sound: {
          volume: number(sound.label, sound.defaultValue, sound.options)
        },
        theme: radios(theme.label, theme.options, theme.defaultValue)
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
