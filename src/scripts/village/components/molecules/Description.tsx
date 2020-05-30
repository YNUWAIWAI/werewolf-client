import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import Timer from '../../containers/TimerContainer'

interface Props {
  className: string
  id: string
}

export const Description: React.FC<Props> = props => {
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
Description.displayName = 'Description'
