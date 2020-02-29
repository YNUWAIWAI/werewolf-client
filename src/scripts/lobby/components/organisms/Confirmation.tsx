import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

export interface StateProps {
  readonly descriptionId: string
  readonly type: string
  readonly values: {
    name: string
    token: lobby.Token
  }
}
export interface DispatchProps {
  readonly handleClickNo: () => void
  readonly handleClickYes: (type: string) => void
}
export type Props = StateProps & DispatchProps

export default function Confirmation(props: Props) {
  return (
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
  )
}
