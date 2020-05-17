import * as React from 'react'
import {ORDERED_ROLE_LIST} from '../../../constants/Role'
import {getCastFromNumberOfPlayers} from '../../../util'
import {lobby} from '../../../types'

interface Props {
  readonly checked: boolean
  readonly handleSelect: (checked: boolean) => void
  readonly numberOfPlayers: number
  readonly member: lobby.Member
}

export default function SupportSelectMemberSelectOption(props: Props) {
  const label = `${props.numberOfPlayers}-${props.member}`
  const className = 'lo--support-select--member-select--option'
  const cast = getCastFromNumberOfPlayers(props.numberOfPlayers)[props.member]

  return (
    <>
      <div
        className={`${className}--checkbox`}
      >
        <input
          checked={props.checked}
          id={`member${label}`}
          name="member"
          onChange={() => props.handleSelect(!props.checked)}
          type="checkbox"
        />
      </div>
      <div
        className={`${className}--number`}
        onClick={() => props.handleSelect(!props.checked)}
      >
        {props.numberOfPlayers}
      </div>
      <div
        className={`${className}--type`}
        onClick={() => props.handleSelect(!props.checked)}
      >
        {props.member}
      </div>
      {
        ORDERED_ROLE_LIST.map(item => (
          <div
            className={`${className}--role`}
            key={item.id}
            onClick={() => props.handleSelect(!props.checked)}
          >
            {cast[item.id]}
          </div>
        ))
      }
    </>
  )
}
