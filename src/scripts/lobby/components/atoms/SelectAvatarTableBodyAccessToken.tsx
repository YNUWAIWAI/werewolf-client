import * as React from 'react'
import Copy from './svg/Copy'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
  renewAccessToken: () => void
  token: lobby.Token
}

export default function SelectAvatarTableBodyAccessToken(props: Props) {
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select()
  }
  const copy = () => {
    navigator.clipboard.writeText(props.token)
  }

  return (
    <div className="lo--select-avatar--table--body--item access-token">
      <input
        onFocus={handleFocus}
        readOnly
        type="text"
        value={props.token}
      />
      {
        navigator.clipboard ?
          <div
            className="copy"
            onClick={copy}
          >
            <Copy />
          </div> :
          null
      }
      <FormattedMessage
        id="SelectAvatarTableBodyAccessToken.renew"
      >
        {
          text => (
            <div
              className="renew"
              onClick={props.renewAccessToken}
            >
              {text}
            </div>
          )
        }
      </FormattedMessage>
    </div>
  )
}
