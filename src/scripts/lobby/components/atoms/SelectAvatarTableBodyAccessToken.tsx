import * as React from 'react'
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
          <button
            onClick={copy}
          >
            copy
          </button> :
          null
      }
      <FormattedMessage
        id="SelectAvatarTableBodyAccessToken.renew"
      >
        {
          text => (
            <button
              className="renew"
              onClick={props.renewAccessToken}
            >
              {text}
            </button>
          )
        }
      </FormattedMessage>
    </div>
  )
}
