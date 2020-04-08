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
      <FormattedMessage
        id={`SelectAvatarTableBodyAuthorized.authorized(${props.authorized})`}
      >
        {
          text => (
            <div
              className={className}
              onClick={handleSelect}
            >
              <button
                className="accept"
                onClick={props.handleAccept}
                tabIndex={props.naviagtable ? 0 : -1}
              >
                {text}
              </button>
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
          <div
            className={className}
            onClick={handleSelect}
          >
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
