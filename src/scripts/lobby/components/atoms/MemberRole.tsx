import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly className: string
  readonly id: string
  readonly image: string
  readonly numberOfAgents: number
}

export default function MemberRole(props: Props) {
  return (
    <div className={props.className} data-id={props.id}>
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      <span
        className={`${props.className}--times`}
      >
        {'✕'}
      </span>
      <span
        className={`${props.className}--number`}
      >
        {props.numberOfAgents}
      </span>
      <FormattedMessage
        id={`MemberRole(${props.id})`}
      >
        {
          text =>
            <span
              className={`${props.className}--caption`}
            >
              {text}
            </span>

        }
      </FormattedMessage>
    </div>
  )
}
