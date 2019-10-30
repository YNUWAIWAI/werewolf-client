import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly className: string
  readonly id: string
  readonly image: string
  readonly numberOfCharacters: number
}

export default function MemberRole(props: Props) {
  const times = '✕'

  return (
    <div className={props.className} data-id={props.id}>
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      <span
        className={`${props.className}--times`}
      >
        {times}
      </span>
      <span
        className={`${props.className}--number`}
      >
        {props.numberOfCharacters}
      </span>
      <FormattedMessage
        id={`MemberRole(${props.id})`}
      >
        {
          text => (
            <span
              className={`${props.className}--caption`}
            >
              {text}
            </span>
          )
        }
      </FormattedMessage>
    </div>
  )
}
