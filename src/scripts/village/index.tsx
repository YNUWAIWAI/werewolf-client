/* eslint no-process-env: 0 */
import * as ActionTypes from './constants/ActionTypes'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './containers/App'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux'
import {init} from './actions'
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

init()

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
