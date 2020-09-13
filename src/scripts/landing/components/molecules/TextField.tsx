import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  autoFocus: boolean
  handleValidityChange: (validity: boolean) => void
  name: 'email' | 'name' | 'password'
  type: 'login' | 'signup'
}

export const TextField: React.FC<Props> = props => {
  const [text, setText] = React.useState('')
  const handleTextChange = (value: string, validity: ValidityState) => {
    setText(value)
    props.handleValidityChange(validity.valid)
  }
  const pattern = () => {
    if (props.name === 'email') {
      return '[^\\s]*@[^\\s]*'
    }
    if (props.name === 'name') {
      return '^[A-Za-z](?:[!-~]| [!-~]){4,14}$'
    }

    return undefined
  }
  const minLength = () => {
    if (props.name === 'email') {
      return 6
    }
    if (props.name === 'name') {
      return 5
    }

    return 8
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
        minLength={minLength()}
        name={props.name}
        onChange={
          event => handleTextChange(event.target.value, event.target.validity)
        }
        pattern={pattern()}
        required
        type={props.name === 'password' ? 'password' : 'text'}
        value={text}
      />
    </div>
  )
}
TextField.displayName = 'TextField'
