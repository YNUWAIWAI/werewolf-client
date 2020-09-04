import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  name: 'email' | 'name' | 'password'
}

export const FieldDescription: React.FC<Props> = props => {
  const id = `FieldDescription(${props.name})`
  const values = () => {
    if (props.name === 'email') {
      return {
        max: 256,
        min: 6
      }
    }
    if (props.name === 'name') {
      return {
        max: 15,
        min: 5
      }
    }

    return {
      max: 128,
      min: 8
    }
  }

  return (
    <div className="la--form--field-description">
      <FormattedMessage
        id={id}
        values={values()}
      />
    </div>
  )
}
FieldDescription.displayName = 'FieldDescription'
