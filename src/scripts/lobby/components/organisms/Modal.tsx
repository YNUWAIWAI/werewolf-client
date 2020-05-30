import * as React from 'react'
import {AvatarImageSelectContainer} from '../../containers/AvatarImageSelectContainer'
import {CSSTransition} from 'react-transition-group'
import {ConfirmationContainer} from '../../containers/ConfirmationContainer'
import {SupportSelectContainer} from '../../containers/SupportSelectContainer'
import {lobby} from '../../types'

export interface StateProps {
  readonly type: lobby.ModalType
  readonly visible: boolean
}
export type Props = StateProps

export const Modal: React.FC<Props> = props => {
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
        <AvatarImageSelectContainer />
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
        <ConfirmationContainer />
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
      <SupportSelectContainer />
    </CSSTransition>
  )
}
Modal.displayName = 'Modal'
