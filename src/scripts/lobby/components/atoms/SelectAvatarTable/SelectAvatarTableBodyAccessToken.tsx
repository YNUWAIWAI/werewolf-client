import * as React from 'react'
import Copy from '../svg/Copy'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly handleSelect: () => void
  readonly naviagtable: boolean
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
        tabIndex={props.naviagtable ? 0 : -1}
        type="text"
        value={props.token}
      />
      <button
        className="renew"
        onClick={props.renewAccessToken}
        tabIndex={props.naviagtable ? 0 : -1}
      >
        <FormattedMessage
          id="SelectAvatarTableBodyAccessToken.renew"
        />
      </button>
    </div>
  )
}
