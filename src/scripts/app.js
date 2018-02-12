import {connectWebSocket} from './module/websocket.js'
const url = document.getElementById('script').dataset.url
document.addEventListener('DOMContentLoaded', connectWebSocket(url))
document.getElementById('hide-button').addEventListener('click', () => {
  document.getElementById('hide-button').classList.toggle('hide')
  document.getElementById('hide-button-icon').classList.toggle('hide')
  document.getElementById('activity-container').classList.toggle('expand')
  document.getElementById('command').classList.toggle('hide')
})

import React from 'react'
import ReactDOM from 'react-dom'
import Info from './components/Info'
import ActivityContainer from './components/ActivityContainer'

ReactDOM.render(
  <React.Fragment>
    <Info />
    <ActivityContainer />
  </React.Fragment>,
  document.getElementById('root')
)
