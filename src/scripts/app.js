import React from 'react'
import ReactDOM from 'react-dom'
import Info from './components/Info'
import Activity from './components/Activity'
import Command from './components/Command'
import HideButton from './components/HideButton'
import Modal from './components/Modal'
import Result from './components/Result'
import Obfucator from './components/Obfucator'

ReactDOM.render(
  <React.Fragment>
    <Info />
    <Activity />
    <Command />
    <HideButton />
    <Modal />
    <Result />
    <Obfucator />
  </React.Fragment>,
  document.getElementById('root')
)

import {connectWebSocket} from './module/websocket.js'
const url = document.getElementById('script').dataset.url
document.addEventListener('DOMContentLoaded', connectWebSocket(url))
document.getElementById('hide-button').addEventListener('click', () => {
  document.getElementById('hide-button').classList.toggle('hide')
  document.getElementById('hide-button-icon').classList.toggle('hide')
  document.getElementById('activity-container').classList.toggle('expand')
  document.getElementById('command').classList.toggle('hide')
})
