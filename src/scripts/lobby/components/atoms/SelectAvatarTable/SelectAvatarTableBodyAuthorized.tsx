import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {lobby} from '../../../types'

interface Props {
  readonly additionalClassName: string[]
  readonly authorized: lobby.Authorized
  readonly handleAccept: () => void
  readonly handleSelect: () => void
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
              <div
                className="accept"
                onClick={props.handleAccept}
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
