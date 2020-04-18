import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import LanguageSelect from '../Select/LanguageSelect'
import {lobby} from '../../../types'

interface Props {
  readonly handleChange: (valid: boolean) => (value: lobby.Language) => void
  readonly language: lobby.Language
  readonly navigatable: boolean
}

export default function CreateNewAvatarAvatarLanguage(props: Props) {
  return (
    <>
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
        handleChange={props.handleChange}
        menuPosition="fixed"
        navigatable={props.navigatable}
      />
    </>
  )
}
