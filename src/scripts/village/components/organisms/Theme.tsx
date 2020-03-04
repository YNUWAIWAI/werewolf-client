import * as React from 'react'
import {village} from '../../types'

export interface StateProps {
  readonly theme: village.Theme
}
export type Props = React.PropsWithChildren<StateProps>

export default function Theme(props: Props) {
  return (
    <div className={`vi ${props.theme}`}>
      {props.children}
    </div>
  )
}
