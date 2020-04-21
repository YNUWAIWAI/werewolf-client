import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import NumberSelect from '../../../atoms/Select/NumberSelect'

interface Props {
  readonly handleNumberOfRobotsChange: (valid: boolean) => (value: number) => void
  readonly navigatable: boolean
  readonly valid: boolean
  readonly value: {
    numberOfPlayers: number
    numberOfRobots: number
  }
}

export default function BuildVillageCellMemberSelectMinimum(props: Props) {
  return (
    <div className={`lo--village--item--member-select--robot ${props.valid ? '' : 'invalid'}`}>
      <span>
        <FormattedMessage
          id="MemberSelect.min"
        />
      </span>
      <NumberSelect
        ascendingOrder
        className="lo--village--item--member-select--robot--select"
        defaultValue={props.value.numberOfRobots}
        from={0}
        handleChange={props.handleNumberOfRobotsChange}
        navigatable={props.navigatable}
        to={props.value.numberOfPlayers}
        type="robot"
      />
    </div>
  )
}
