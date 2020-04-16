import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly numberOfHumans: number
}

export default function BuildVillageCellMemberSelectMaximum(props: Props) {
  return (
    <FormattedMessage
      id="MemberSelect.max"
      values={{
        num: props.numberOfHumans
      }}
    >
      {
        text => (
          <div className="lo--village--item--member-select--human">
            {text}
          </div>
        )
      }
    </FormattedMessage>
  )
}
