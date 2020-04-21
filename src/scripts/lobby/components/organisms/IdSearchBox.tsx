import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly handleSearchIdChange: (value: number) => void
  readonly handleValidityChange: (valid: boolean) => void
  readonly max: number
}

export default function IdSearchBox(props: Props) {
  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleValidityChange(event.target.validity.valid)
    if (event.target.validity.valid) {
      props.handleSearchIdChange(Number(event.target.value))
    }
  }
  const sharp = '#'

  return (
    <div className="lo--id-search">
      <span className="lo--id-search--sharp">
        {sharp}
      </span>
      <FormattedMessage
        id="IdSearch.placeholder"
        values={{
          max: 10 ** (props.max - 1),
          min: 1
        }}
      >
        {
          text => (
            <input
              className="lo--id-search--input"
              maxLength={props.max}
              minLength={1}
              onChange={handleIdChange}
              pattern="^\d+$"
              placeholder={typeof text === 'string' ? text : ''}
              required
              type="text"
            />
          )
        }
      </FormattedMessage>
      <span className="lo--id-search--validity" />
    </div>
  )
}
