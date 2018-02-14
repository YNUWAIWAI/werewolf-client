import Chat from './Chat'
import Prediction from './Prediction'
import React from 'react'
import ReactDOM from 'react-dom'

export default function Activity(props) {
  return (
    <div id="activity-container" class="activity-container">
      <Chat />
      <Prediction />
    </div>
  )
}
