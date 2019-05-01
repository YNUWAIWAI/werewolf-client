/* global lobby */
import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import {FormattedMessage} from 'react-intl'

export interface StateProps {
  readonly descriptionId: string
  readonly type: string
  readonly values: {
    name: string
    token: lobby.Token
  }
  readonly visible: boolean
}
export interface DispatchProps {
  readonly handleClickNo: () => void
  readonly handleClickYes: (type: string) => void
}
export interface Props extends StateProps, DispatchProps {}

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
      <div className="lo--modal">
        <FormattedMessage
          id={props.descriptionId}
          values={{
            name: props.values.name
          }}
        >
          {
            text => (
              <div
                className="lo--modal--description"
              >
                {text}
              </div>
            )
          }
        </FormattedMessage>
        <FormattedMessage
          id="Modal.button.yes"
        >
          {
            text => (
              <button
                className="lo--modal--button yes"
                onClick={() => props.handleClickYes(props.type)}
              >
                {text}
              </button>
            )
          }
        </FormattedMessage>
        <FormattedMessage
          id="Modal.button.no"
        >
          {
            text => (
              <button
                className="lo--modal--button no"
                onClick={() => props.handleClickNo()}
              >
                {text}
              </button>
            )
          }
        </FormattedMessage>
      </div>
    </CSSTransition>
  )
}
