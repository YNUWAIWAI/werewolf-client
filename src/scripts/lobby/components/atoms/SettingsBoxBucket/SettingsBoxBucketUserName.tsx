import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TextInput} from '../../atoms/TextInput'

export interface Props {
  readonly handleSubmit: (value: string) => void
  readonly initialValue: string
  readonly navigatable: boolean
}

export const SettingsBoxBucketUserName: React.FC<Props> = props => {
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
        htmlFor="userName"
      >
        <FormattedMessage
          id="Settings.label(userName)"
        />
      </label>
      <TextInput
        className="lo--settings--bucket--form--field input"
        handleChange={handleChange}
        id="userName"
        initialValue={props.initialValue}
        max={15}
        min={5}
        navigatable={props.navigatable}
        placeholder=""
        ref={ref}
        required
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
SettingsBoxBucketUserName.displayName = 'SettingsBoxBucketUserName'
