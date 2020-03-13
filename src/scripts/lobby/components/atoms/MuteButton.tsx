import * as React from 'react'
import Mute from './svg/Mute'
import Unmute from './svg/Unmute'

export interface StateProps {
  readonly muted: boolean
}
export interface DispatchProps {
  readonly handleClick: (muted: boolean) => void
}
export type Props = StateProps & DispatchProps

export default function MuteButton(props: Props) {
  return (
    <div
      className="lo--mute-button"
      onClick={() => props.handleClick(!props.muted)}
    >
      {
        props.muted ?
          <Mute /> :
          <Unmute />
      }
    </div>
  )
}
