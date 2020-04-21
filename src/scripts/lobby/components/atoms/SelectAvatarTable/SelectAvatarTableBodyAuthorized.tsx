import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly authorized: lobby.Authorized
  readonly handleAccept: () => void
  readonly handleSelect: () => void
  readonly naviagtable: boolean
}

export default function SelectAvatarTableBodyAuthorized(props: Props) {
  const className = `lo--select-avatar--table--body--item authorized ${props.additionalClassName.join(' ')}`
  const handleSelect = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      props.handleSelect()
    }
  }

  if (props.authorized === lobby.Authorized.waitForAcceptance) {
    return (
      <div
        className={className}
        onClick={handleSelect}
      >
        <button
          className="accept"
          onClick={props.handleAccept}
          tabIndex={props.naviagtable ? 0 : -1}
        >
          <FormattedMessage
            id={`SelectAvatarTableBodyAuthorized.authorized(${props.authorized})`}
          />
        </button>
      </div>
    )
  }

  return (
    <div
      className={className}
      onClick={handleSelect}
    >
      <FormattedMessage
        id={`SelectAvatarTableBodyAuthorized.authorized(${props.authorized})`}
      />
    </div>
  )
}
