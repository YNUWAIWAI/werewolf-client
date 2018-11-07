// @flow
import {PROLOGUE, indexedDB, socket} from './constants/ActionTypes'
import App from './containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {addLocaleData} from 'react-intl'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux'
import en from 'react-intl/locale-data/en'
import ja from 'react-intl/locale-data/ja'
import middleware from './middlewares'
import reducer from './reducers'


const store = createStore(
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
addLocaleData([... en, ... ja])

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
)
