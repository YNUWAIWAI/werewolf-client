import * as React from 'react'
import {lobby} from '../../types'

interface OwnProps {
  readonly className: string
}
export interface StateProps {
  readonly data: {
    readonly [key in '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | '14' | '15']: {
      readonly [key in lobby.Member]: boolean
    }
  }
}
type Props = OwnProps & StateProps

export default function SupportBoard(props: Props) {
  return (
    <div
      className={props.className}
    >
      <div
        className={`${props.className}--cell`}
      >
        number of players
      </div>
      <div
        className={`${props.className}--cell`}
      >
        A
      </div>
      <div
        className={`${props.className}--cell`}
      >
        B
      </div>
      <div
        className={`${props.className}--cell`}
      >
        C
      </div>
      <div
        className={`${props.className}--cell`}
      >
        4
      </div>
      <div
        className={`${props.className}--cell`}
      >
        true
      </div>
      <div
        className={`${props.className}--cell`}
      >
        false
      </div>
      <div
        className={`${props.className}--cell`}
      >
        true
      </div>
    </div>
  )
}
