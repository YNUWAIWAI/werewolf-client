import * as React from 'react'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly numberOfHumans: number
}

export const BuildVillageCellMemberSelectMaximum: React.FC<Props> = props => (
  <div className="lo--village--item--member-select--human">
    <FormattedMessage
      id="MemberSelect.max"
      values={{
        num: props.numberOfHumans
      }}
    />
  </div>
)
BuildVillageCellMemberSelectMaximum.displayName = 'BuildVillageCellMemberSelectMaximum'
