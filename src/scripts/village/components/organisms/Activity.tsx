import * as React from 'react'
import Chat from '../../containers/ChatContainer'
import Prediction from '../../containers/PredictionContainer'

export interface StateProps {
  readonly expand: boolean
}
export interface OwnProps {}
export interface Props extends StateProps, OwnProps {}

export default function Activity(props: Props) {
  return (
    <div className={`activity ${props.expand ? 'expand' : ''}`}>
      <Chat />
      <Prediction />
    </div>
  )
}
