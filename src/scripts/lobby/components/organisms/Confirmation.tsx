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
    <div className="lo--confirmation">
      <FormattedMessage
        id={props.descriptionId}
        values={{
          name: props.values.name
        }}
      >
        {
          text => (
            <div
              className="lo--confirmation--description"
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
            <div
              className="lo--confirmation--button yes"
              onClick={() => props.handleClickYes(props.type)}
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="Modal.button.no"
      >
        {
          text => (
            <div
              className="lo--confirmation--button no"
              onClick={() => props.handleClickNo()}
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
    </div>
  )
}
