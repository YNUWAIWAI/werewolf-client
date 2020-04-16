import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TextInput from '../TextInput'

interface Props {
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly navigatable: boolean
}

export default function CreateNewAvatarAvatarName(props: Props) {
  return (
    <>
      <FormattedMessage
        id="CreateNewAvatar.label(avatarName)"
      >
        {
          text => (
            <label
              className="lo--create-new-avatar--label"
              htmlFor="newAvatarName"
            >
              {text}
            </label>
          )
        }
      </FormattedMessage>
      <TextInput
        className="lo--create-new-avatar--input"
        handleChange={props.handleChange}
        id="newAvatarName"
        initialValue=""
        max={15}
        min={5}
        navigatable={props.navigatable}
        placeholder=""
        required
      />
    </>
  )
}
