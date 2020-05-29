import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {PasswordInput} from '../PasswordInput'

export interface Props {
  readonly handleSubmit: (value: string) => void
  readonly navigatable: boolean
}

export const SettingsBoxBucketUserPassword: React.FC<Props> = props => {
  const ref = React.createRef<HTMLInputElement>()
  const [disabled, setDisabled] = React.useState(true)
  const handleChange = (valid: boolean) => (value: string): void => {
    setDisabled(!valid || value === '')
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (ref.current && !disabled) {
      props.handleSubmit(ref.current.value)
    }
  }

  return (
    <form
      className="lo--settings--bucket--form"
      onSubmit={handleSubmit}
    >
      <label
        className="lo--settings--bucket--form--label"
        htmlFor="userPassword"
      >
        <FormattedMessage
          id="Settings.label(userPassword)"
        />
      </label>
      <PasswordInput
        className="lo--settings--bucket--form--field input"
        handleChange={handleChange}
        id="userPassword"
        navigatable
        ref={ref}
      />
      <button
        className="lo--settings--bucket--form--button"
        disabled={disabled}
        type="submit"
      >
        <FormattedMessage
          id="Settings.button(save)"
        />
      </button>
    </form>
  )
}
SettingsBoxBucketUserPassword.displayName = 'SettingsBoxBucketUserPassword'
