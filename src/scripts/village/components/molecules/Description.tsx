import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Timer from '../../containers/TimerContainer'

interface Props {
  className: string
  id: string
}

export default function Description(props: Props) {
  const lparen = ' ('
  const rparen = ')'

  return (
    <div className={props.className}>
      <FormattedMessage
        id={props.id}
      />
      {lparen}
      <Timer />
      {rparen}
    </div>
  )
}
