import Chat from '../containers/ChatContainer'
import Prediction from './Prediction'
import React from 'react'

export default function Activity(props) {
  return (
    <div id="activity-container" class="activity-container">
      <Chat />
      <Prediction />
    </div>
  )
}
