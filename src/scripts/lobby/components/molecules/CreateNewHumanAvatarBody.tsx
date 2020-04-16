import * as React from 'react'
import CreateNewAvatarAvatarImage from '../atoms/CreateNewAvatar/CreateNewAvatarAvatarImage'
import {FormattedMessage} from 'react-intl'
import LanguageSelect from '../atoms/Select/LanguageSelect'
import TextInput from '../atoms/TextInput'
import {lobby} from '../../types'

export interface StateProps {
  readonly image: string
  readonly language: lobby.Language
  readonly name: string
  readonly navigatable: boolean
}
export interface DispatchProps {
  readonly handleImageClick: (value: string) => void
  readonly handleLanguageChange: (valid: boolean) => (value: lobby.Language) => void
  readonly handleNameChange: (valid: boolean) => (value: string) => void
}
type Props = StateProps & DispatchProps

export default function CreateNewHumanAvatarTable(props: Props) {
  return (
    <div
      className="lo--create-new-avatar--table"
    >
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
        handleChange={props.handleNameChange}
        id="newAvatarName"
        initialValue=""
        max={15}
        min={5}
        navigatable={props.navigatable}
        placeholder=""
        required
      />
      <CreateNewAvatarAvatarImage
        handleClick={() => props.handleImageClick(props.image)}
        image={props.image}
        navigatable
      />
      <FormattedMessage
        id="CreateNewAvatar.label(avatarLanguage)"
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
      <LanguageSelect
        className="lo--create-new-avatar--input"
        defaultValue={props.language}
        handleChange={props.handleLanguageChange}
        menuPosition="fixed"
        navigatable={props.navigatable}
      />
    </div>
  )
}
