// @flow
import {SHOW_MAIN, indexedDB, socket} from './constants/ActionTypes'
import App from './containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {changeToken} from './actions'
import {composeWithDevTools} from 'redux-devtools-extension'
import config from '../../../config'
import {createStore} from 'redux'
import middleware from './middlewares'
import reducer from './reducers'

const store =
  config.env === 'production' ?
    createStore(
      reducer,
      middleware
    ) :
    createStore(
      reducer,
      composeWithDevTools(middleware)
    )

store.dispatch({
  type: SHOW_MAIN
})
const elem = document.getElementById('script')

if (!elem) {
  throw Error('Not found: script element')
}
if (!elem || !elem.dataset || !elem.dataset.humanPlayerToken) {
  throw Error('Not found: data-human-player-token')
}
store.dispatch(changeToken({
  lobby: 'human player',
  token: elem.dataset.humanPlayerToken
}))
if (!elem || !elem.dataset || !elem.dataset.robotPlayerToken) {
  throw Error('Not found: data-robot-player-token')
}
store.dispatch(changeToken({
  lobby: 'robot player',
  token: elem.dataset.robotPlayerToken
}))
if (!elem || !elem.dataset || !elem.dataset.onymousAudienceToken) {
  throw Error('Not found: data-onymous-audience-token')
}
store.dispatch(changeToken({
  lobby: 'onymous audience',
  token: elem.dataset.onymousAudienceToken
}))

const root = document.getElementById('root')

if (!root) {
  throw Error('Not found: root element')
}
store.dispatch({
  type: socket.INIT
})
store.dispatch({
  type: indexedDB.INIT
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
