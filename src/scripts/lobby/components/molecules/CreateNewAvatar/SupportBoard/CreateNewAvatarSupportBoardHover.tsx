import * as React from 'react'
import {FormattedMessage} from 'react-intl'

export interface Props {
  readonly className: string
  readonly visible: boolean
}

export const CreateNewAvatarSupportBoardHover: React.FC<Props> = props => {
  if (!props.visible) {
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
CreateNewAvatarSupportBoardHover.displayName = 'CreateNewAvatarSupportBoardHover'
