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
      <label
        className="lo--create-new-avatar--label language"
        htmlFor="newAvatarName"
      >
        <FormattedMessage
          id="CreateNewAvatar.label(avatarLanguage)"
        />
      </label>
      <LanguageSelect
        className="lo--create-new-avatar--input language"
        defaultValue={props.language}
        handleChange={props.handleChange}
        menuPosition="fixed"
        navigatable={props.navigatable}
      />
    </>
  )
}
