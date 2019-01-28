import * as React from 'react'
import Loader from '../atoms/svg/Loader'

export interface StateProps {
  readonly loading: boolean
  readonly visible: boolean
}
export type Props = StateProps

export default function Obfucator(props: Props) {
  return props.visible ?
    <div className="obfucator">
      {
        props.loading ?
          <Loader
            className="obfucator--loader"
          /> :
          ''
      }
    </div> :
    null
}
