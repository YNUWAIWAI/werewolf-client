import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly handleClick: (value: string) => void
  readonly image: string
  readonly navigatable: boolean
}

export const CreateNewAvatarAvatarImage: React.FC<Props> = props => {
  const handleClick = () => {
    props.handleClick(props.image)
  }

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
        onClick={handleClick}
        tabIndex={props.navigatable ? 0 : -1}
      >
        <img src={props.image} />
      </button>
    </>
  )
}
CreateNewAvatarAvatarImage.displayName = 'CreateNewAvatarAvatarImage'
