/* eslint no-process-env: 0 */
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {global, indexedDB, socket} from './constants/ActionTypes'
import App from './containers/App'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux'
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
  type: socket.INIT
})
store.dispatch({
  type: indexedDB.INIT
})
store.dispatch({
  type: global.PROLOGUE
})

const root = document.getElementById('root')

if (!root) {
  throw Error('Not found root element.')
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)

window.onbeforeunload = () => ''
