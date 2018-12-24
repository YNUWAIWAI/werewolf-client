// @flow
import {PROLOGUE, indexedDB, socket} from './constants/ActionTypes'
import App from './containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
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
  type: socket.INIT
})
store.dispatch({
  type: indexedDB.INIT
})
store.dispatch({
  type: PROLOGUE
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
