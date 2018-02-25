import Chat from '../containers/ChatContainer'
import Prediction from '../containers/PredictionContainer'
import React from 'react'

export default function Activity(props) {
  return (
    <div id="activity-container" class="activity-container">
      <Chat />
      <Prediction />
    </div>
  )
}
