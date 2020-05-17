import * as React from 'react'
import AvatarImageSelect from '../../containers/AvatarImageSelectContainer'
import {CSSTransition} from 'react-transition-group'
import Confirmation from '../../containers/ConfirmationContainer'
import SupportSelect from '../../containers/SupportSelectContainer'
import {lobby} from '../../types'

export interface StateProps {
  readonly type: lobby.ModalType
  readonly visible: boolean
}
export type Props = StateProps

export default function Modal(props: Props) {
  if (props.type === lobby.ModalType.avatarImageSelect) {
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
        <AvatarImageSelect />
      </CSSTransition>
    )
  }
  if (props.type === lobby.ModalType.confirmation) {
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
      <SupportSelect />
    </CSSTransition>
  )
}
