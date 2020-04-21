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
      <div
        className="lo--confirmation--description"
      >
        <FormattedMessage
          id={props.descriptionId}
          values={{
            name: props.values.name
          }}
        />
      </div>
      <button
        className="lo--confirmation--button yes"
        onClick={() => props.handleClickYes(props.type)}
      >
        <FormattedMessage
          id="Modal.button.yes"
        />
      </button>
      <button
        className="lo--confirmation--button no"
        onClick={() => props.handleClickNo()}
      >
        <FormattedMessage
          id="Modal.button.no"
        />
      </button>
    </div>
  )
}
