import App from './containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {SHOW_MAIN} from './constants/ActionTypes'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux'
import middleware from './middlewares'
import reducer from './reducers'

const store = createStore(
  reducer,
  composeWithDevTools(middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch({
  type: SHOW_MAIN
})
