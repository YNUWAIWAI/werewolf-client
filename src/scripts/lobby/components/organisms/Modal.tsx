import * as React from 'react'
import AvatarImageSelect from '../../containers/AvatarImageSelectContainer'
import {CSSTransition} from 'react-transition-group'
import Confirmation from '../../containers/ConfirmationContainer'
import {lobby} from '../../types'

export interface StateProps {
  readonly type: lobby.ModalType
  readonly visible: boolean
}
export type Props = StateProps

export default function Modal(props: Props) {
  if (props.type === 'avatarImageSelect') {
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
