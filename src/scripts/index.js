import {createStore} from 'redux'
import App from './containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import middleware from './middlewares'
import reducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(
  reducer,
  composeWithDevTools(middleware)
)

store.dispatch({
  type: 'INIT'
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// import {connectWebSocket} from './module/websocket.js'
// document.addEventListener('DOMContentLoaded', connectWebSocket(url))
// document.getElementById('hide-button').addEventListener('click', () => {
//   document.getElementById('hide-button').classList.toggle('hide')
//   document.getElementById('hide-button-icon').classList.toggle('hide')
//   document.getElementById('activity-container').classList.toggle('expand')
//   document.getElementById('command').classList.toggle('hide')
// })
