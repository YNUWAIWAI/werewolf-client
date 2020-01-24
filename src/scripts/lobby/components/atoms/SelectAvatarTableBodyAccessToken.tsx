import * as React from 'react'
import Copy from './svg/Copy'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly renewAccessToken: () => void
  readonly token: lobby.Token
}

export default function SelectAvatarTableBodyAccessToken(props: Props) {
  const copy = () => {
    navigator.clipboard.writeText(props.token)
  }
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    event.target.select()
  }
  const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      props.handleSelect()
    }
  }

  return (
    <div
      className={`lo--select-avatar--table--body--item access-token ${props.additionalClassName.join(' ')}`}
      onClick={handleSelect}
    >
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
      <input
        onFocus={handleFocus}
        readOnly
        type="text"
        value={props.token}
      />
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
