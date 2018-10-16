// @flow
import {FormattedMessage} from 'react-intl'
import React from 'react'

type Props = {
  +handleSearchIdChange: number => void,
  +handleValidityChange: boolean => void,
  +max: number
}

export default function IdSearchBox(props: Props) {
  const handleIdChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    props.handleValidityChange(event.target.validity.valid)
    if (event.target.validity.valid) {
      props.handleSearchIdChange(Number(event.target.value))
    }
  }

  return (
    <div className="id-search">
      <span className="id-search--sharp">
        {'#'}
      </span>
      <FormattedMessage
        id="IdSearch.placeholder"
        values={{
          max: 10 ** props.max - 1,
          min: 1
        }}
      >
        {
          (text: string) =>
            <input
              className="id-search--input"
              maxLength={props.max}
              minLength={1}
              onChange={handleIdChange}
              pattern="^\d+$"
              placeholder={text}
              required
              type="text"
            />
        }
      </FormattedMessage>
      <span className="id-search--validity" />
    </div>
  )
}
