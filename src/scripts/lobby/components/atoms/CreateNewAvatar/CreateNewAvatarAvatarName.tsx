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
      <label
        className="lo--create-new-avatar--label name"
        htmlFor="newAvatarName"
      >
        <FormattedMessage
          id="CreateNewAvatar.label(avatarName)"
        />
      </label>
      <TextInput
        className="lo--create-new-avatar--input name"
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
