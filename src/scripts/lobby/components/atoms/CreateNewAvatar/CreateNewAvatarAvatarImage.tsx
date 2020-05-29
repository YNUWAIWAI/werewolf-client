import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly handleClick: () => void
  readonly image: string
  readonly navigatable: boolean
}

export const CreateNewAvatarAvatarImage: React.FC<Props> = props => {
  return (
    <>
      <label
        className="lo--create-new-avatar--label image"
        htmlFor="newAvatarImage"
      >
        <FormattedMessage
          id="CreateNewAvatar.label(avatarImage)"
        />
      </label>
      <button
        className="lo--create-new-avatar--input image"
        onClick={props.handleClick}
        tabIndex={props.navigatable ? 0 : -1}
      >
        <img src={props.image} />
      </button>
    </>
  )
}
