import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import Confirmation from '../../containers/ConfirmationContainer'

export interface StateProps {
  readonly visible: boolean
}
export type Props = StateProps

export default function Modal(props: Props) {
  return (
    <CSSTransition
      classNames="lo--modal--transition"
      in={props.visible}
      timeout={{
        enter: 500,
        exit: 300
      }}
      unmountOnExit
    >
      <Confirmation />
    </CSSTransition>
  )
}
