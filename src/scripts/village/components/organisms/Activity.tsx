import * as React from 'react'
import Chat from '../../containers/ChatContainer'
import Prediction from '../../containers/PredictionContainer'

export interface StateProps {
  readonly expand: boolean
}
export type Props = StateProps

export default function Activity(props: Props) {
  return (
    <div className={`vi--activity ${props.expand ? 'expand' : ''}`}>
      <Chat />
      <Prediction />
    </div>
  )
}
