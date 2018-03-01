import Chat from '../containers/ChatContainer'
import Prediction from '../containers/PredictionContainer'
import React from 'react'

export default function Activity(props) {
  return (
    <div className={`activity-container ${props.isExpand ? 'expand' : ''}`} id="activity-container">
      <Chat />
      <Prediction />
    </div>
  )
}
