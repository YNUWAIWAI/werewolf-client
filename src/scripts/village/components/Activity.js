// @flow
import Chat from '../containers/ChatContainer'
import Prediction from '../containers/PredictionContainer'
import React from 'react'

export type StateProps = {
  expand: boolean
}
export type ownProps = {}
export type Props =
  & StateProps
  & ownProps

export default function Activity(props: Props) {
  return (
    <div className={`activity-container ${props.expand ? 'expand' : ''}`}>
      <Chat />
      <Prediction />
    </div>
  )
}
