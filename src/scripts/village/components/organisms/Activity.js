// @flow
import Chat from '../../containers/ChatContainer'
import Prediction from '../../containers/PredictionContainer'
import React from 'react'

export type StateProps = {
  +expand: boolean
}
export type OwnProps = {}
export type Props =
  & StateProps
  & OwnProps

export default function Activity(props: Props) {
  return (
    <div className={`activity ${props.expand ? 'expand' : ''}`}>
      <Chat />
      <Prediction />
    </div>
  )
}
