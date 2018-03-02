import App from './containers/App'
import {Provider} from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore} from 'redux'
import middleware from './middlewares'
import reducer from './reducers'

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
