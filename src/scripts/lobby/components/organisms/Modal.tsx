import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface StateProps {
  readonly descriptionId: string
  readonly visible: boolean
}
export interface DispatchProps {
  readonly handleClickNo: () => void
  readonly handleClickYes: () => void
}
export interface Props extends StateProps, DispatchProps {}

export default function Modal(props: Props) {
  if (!props.visible) {
    return null
  }

  return (
    <div className="modal">
      <FormattedMessage
        id={props.descriptionId}
      >
        {
          text =>
            <div
              className="modal--description"
            >
              {text}
            </div>
        }
      </FormattedMessage>
      <FormattedMessage
        id="Modal.button.yes"
      >
        {
          text =>
            <button
              className="modal--button yes"
              onClick={() => props.handleClickYes()}
            >
              {text}
            </button>
        }
      </FormattedMessage>
      <FormattedMessage
        id="Modal.button.no"
      >
        {
          text =>
            <button
              className="modal--button no"
              onClick={() => props.handleClickNo()}
            >
              {text}
            </button>
        }
      </FormattedMessage>
    </div>
  )
}
