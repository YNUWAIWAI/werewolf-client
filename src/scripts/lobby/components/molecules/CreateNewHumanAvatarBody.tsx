import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import LanguageSelect from '../atoms/Select/LanguageSelect'
import TextInput from '../atoms/TextInput'
import {lobby} from '../../types'

interface Props {
  readonly handleChangeImage: (valid: boolean) => (value: string) => void
  readonly handleChangeLanguage: (valid: boolean) => (value: lobby.Language) => void
  readonly handleChangeName: (valid: boolean) => (value: string) => void
  readonly image: string
  readonly language: lobby.Language
  readonly name: string
  readonly navigatable: boolean
}

export default function CreateNewHumanAvatarTable(props: Props) {
  return (
    <div
      className="lo--create-new-avatar--table"
    >
      <FormattedMessage
        id="CreateNewAvatar.label(avatarImage)"
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
        handleChange={props.handleChangeName}
        id="newAvatarName"
        initialValue=""
        max={15}
        min={5}
        navigatable
        placeholder=""
        required
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
        handleChange={props.handleChangeLanguage}
        menuPosition="fixed"
      />
    </div>
  )
}
