import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TextInput} from '../Input/TextInput'

interface Props {
  readonly handleChange: (valid: boolean) => (value: string) => void
  readonly navigatable: boolean
}

export const CreateNewAvatarAvatarName: React.FC<Props> = props => (
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
CreateNewAvatarAvatarName.displayName = 'CreateNewAvatarAvatarName'
