/* eslint no-process-env: 0 */
import * as ActionTypes from './constants/ActionTypes'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers/App'
import {Provider} from 'react-redux'
import {changeToken} from './actions'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux'
import {lobby} from './types'
import middleware from './middlewares'
import reducer from './reducers'

const store =
  process.env.NODE_ENV === 'production' ?
    createStore(
      reducer,
      middleware
    ) :
    createStore(
      reducer,
      composeWithDevTools(middleware)
    )

store.dispatch({
  type: ActionTypes.App.SHOW_MAIN
})
const elem = document.getElementById('script')

if (!elem) {
  throw Error('Not found: script element')
}
if (!elem || !elem.dataset || !elem.dataset.humanPlayerToken) {
  throw Error('Not found: data-human-player-token')
}
store.dispatch(changeToken({
  lobby: lobby.LobbyType.human,
  token: elem.dataset.humanPlayerToken
}))
if (!elem || !elem.dataset || !elem.dataset.robotPlayerToken) {
  throw Error('Not found: data-robot-player-token')
}
store.dispatch(changeToken({
  lobby: lobby.LobbyType.robot,
  token: elem.dataset.robotPlayerToken
}))
if (!elem || !elem.dataset || !elem.dataset.onymousAudienceToken) {
  throw Error('Not found: data-onymous-audience-token')
}
store.dispatch(changeToken({
  lobby: lobby.LobbyType.onymousAudience,
  token: elem.dataset.onymousAudienceToken
}))

const root = document.getElementById('root')

if (!root) {
  throw Error('Not found: root element')
}
store.dispatch({
  type: ActionTypes.Socket.INIT
})
store.dispatch({
  type: ActionTypes.IndexedDB.INIT
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
