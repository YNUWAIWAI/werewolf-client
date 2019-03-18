import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import Loader from '../atoms/svg/Loader'

export interface StateProps {
  readonly loading: boolean
  readonly visible: boolean
}
export type Props = StateProps

export default function Obfucator(props: Props) {
  return (
    <CSSTransition
      classNames="lo--obfucator--transition"
      in={props.visible}
      timeout={{
        enter: 500,
        exit: 300
      }}
      unmountOnExit
    >
      <div className="lo--obfucator">
        {
          props.loading ?
            <Loader
              className="lo--obfucator--loader"
            /> :
            ''
        }
      </div>
    </CSSTransition>
  )
}
