import * as React from 'react'
import EmailInput from '../EmailInput'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly handleSubmit: (value: string) => void
  readonly initialValue: string
  readonly navigatable: boolean
}

export const SettingsBoxBucketUserEmail: React.FC<Props> = props => {
  const ref = React.createRef<HTMLInputElement>()
  const [disabled, setDisabled] = React.useState(true)
  const handleChange = (valid: boolean) => (value: string): void => {
    setDisabled(!valid || value === props.initialValue)
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
        htmlFor="userEmail"
      >
        <FormattedMessage
          id="Settings.label(userEmail)"
        />
      </label>
      <EmailInput
        className="lo--settings--bucket--form--field input"
        handleChange={handleChange}
        id="userEmail"
        initialValue={props.initialValue}
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
