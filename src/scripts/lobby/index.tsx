/* eslint no-process-env: 0 */
import '../../styles/lobby'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  changeToken,
  init
} from './actions'
import App from './App'
import {Provider} from 'react-redux'
import {createHashHistory} from 'history'
import {createMiddleware} from './middlewares'
import {createStore} from 'redux'
import {lobby} from './types'
import reducer from './reducers'

const elem = document.getElementById('script')

if (!elem) {
  throw Error('Not found: script element')
}
if (!elem || !elem.dataset || !elem.dataset.humanPlayerToken) {
  throw Error('Not found: data-human-player-token')
}
if (!elem || !elem.dataset || !elem.dataset.url) {
  throw Error('Not found: data-url attribute')
}
const url = elem.dataset.url
const history = createHashHistory()
const store =
  createStore(
    reducer,
    createMiddleware({
      history,
      url
    })
  )

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

store.dispatch(init())
ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  root
)
