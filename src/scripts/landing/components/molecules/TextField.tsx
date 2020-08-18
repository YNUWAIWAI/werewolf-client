import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  autoFocus: boolean
  name: 'email' | 'name' | 'password'
  type: 'login' | 'signup'
}

export const TextField: React.FC<Props> = props => {
  const [text, setText] = React.useState('')
  const handleTextChange = (value: string) => {
    setText(value)
  }

  return (
    <div className="la--form--field">
      <label
        className="la--form--label"
        htmlFor={`${props.type}-${props.name}`}
      >
        <FormattedMessage
          id={`${props.type}-label-${props.name}`}
        />
      </label>
      <input
        autoComplete="off"
        autoFocus={props.autoFocus}
        className="la--form--input"
        id={`${props.type}-${props.name}`}
        minLength={props.name === 'password' ? 8 : undefined}
        name={props.name}
        onChange={
          event => handleTextChange(event.target.value)
        }
        required
        type={props.name === 'password' ? 'password' : 'text'}
        value={text}
      />
      <p>
        <FormattedMessage
          id={`${props.type}-description-${props.name}`}
        />
      </p>
    </div>
  )
}
TextField.displayName = 'TextField'
