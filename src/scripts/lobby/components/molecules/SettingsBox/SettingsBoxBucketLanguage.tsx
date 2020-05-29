import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import LanguageSelect from '../../atoms/Select/LanguageSelect'
import {lobby} from '../../../types'

export interface Props {
  readonly handleChange: (language: lobby.Language) => void
  readonly initialValue: lobby.Language
  readonly navigatable: boolean
}

export const SettingsBoxBucketLanguage: React.FC<Props> = props => {
  const [language, setLanguage] = React.useState({
    valid: false,
    value: props.initialValue
  })

  const handleChange = (valid: boolean) => (value: lobby.Language): void => {
    setLanguage({
      valid: valid && value !== props.initialValue,
      value
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.handleChange(language.value)
  }

  return (
    <div className="lo--settings--bucket">
      <div className="lo--settings--bucket--head">
        <FormattedMessage
          id="Settings.head(language)"
        />
      </div>
      <form
        className="lo--settings--bucket--form"
        onSubmit={handleSubmit}
      >
        <LanguageSelect
          className="lo--settings--bucket--form--field"
          defaultValue={props.initialValue}
          handleChange={handleChange}
          menuPosition="absolute"
          navigatable={props.navigatable}
        />
        <button
          className="lo--settings--bucket--form--button"
          disabled={!language.valid}
          type="submit"
        >
          <FormattedMessage
            id="Settings.button(save)"
          />
        </button>
      </form>
    </div>
  )
}
