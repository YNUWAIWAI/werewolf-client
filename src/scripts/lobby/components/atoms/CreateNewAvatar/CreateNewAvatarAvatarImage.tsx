import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly handleClick: () => void
  readonly image: string
  readonly navigatable: boolean
}

export default function CreateNewAvatarAvatarImage(props: Props) {
  return (
    <>
      <FormattedMessage
        id="CreateNewAvatar.label(avatarImage)"
      >
        {
          text => (
            <label
              className="lo--create-new-avatar--label"
              htmlFor="newAvatarImage"
            >
              {text}
            </label>
          )
        }
      </FormattedMessage>
      <button
        onClick={props.handleClick}
        tabIndex={props.navigatable ? 0 : -1}
      >
        <img src={props.image} />
      </button>
    </>
  )
}
