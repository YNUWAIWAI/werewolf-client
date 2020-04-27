import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface Props {
  readonly className: string
  readonly isHover: boolean
}

export default function CreateNewAvatarSupportBoardHover(props: Props) {
  if (!props.isHover) {
    return null
  }

  return (
    <div
      className={props.className}
    >
      <span
        className={`${props.className}--text`}
      >
        <FormattedMessage
          id="CreateNewAvatarSupportBoardHover"
        />
      </span>
    </div>
  )
}
