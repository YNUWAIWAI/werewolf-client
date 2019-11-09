import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
  readonly authorized: lobby.Authorized
  readonly handleClick: () => void
}

export default function SelectAvatarTableBodyAuthorized(props: Props) {
  if (props.authorized === lobby.Authorized.waitForAcceptance) {
    return (
      <FormattedMessage
        id={`SelectAvatarTableBodyAuthorized.authorized(${props.authorized})`}
      >
        {
          text => (
            <div className="lo--select-avatar--table--body--item authorized">
              <div
                className="accept"
                onClick={props.handleClick}
              >
                {text}
              </div>
            </div>
          )
        }
      </FormattedMessage>
    )
  }

  return (
    <FormattedMessage
      id={`SelectAvatarTableBodyAuthorized.authorized(${props.authorized})`}
    >
      {
        text => (
          <div className="lo--select-avatar--table--body--item authorized">
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
