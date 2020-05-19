import * as React from 'react'
import {Checkbox} from '../../atoms/Checkbox'
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
  const ref = React.createRef<HTMLSpanElement>()
  const label = `${props.numberOfPlayers}-${props.member}`
  const className = 'lo--support-select--member-select--option'
  const cast = getCastFromNumberOfPlayers(props.numberOfPlayers)[props.member]
  const handleSelect = () => {
    if (ref.current) {
      ref.current.focus()
      props.handleSelect(!props.checked)
    }
  }

  return (
    <>
      <div
        className={`${className}--checkbox`}
        onClick={handleSelect}
      >
        <Checkbox
          checked={props.checked}
          handleChange={handleSelect}
          label={`member${label}`}
          navigatable
          ref={ref}
        />
      </div>
      <div
        className={`${className}--number`}
        onClick={handleSelect}
      >
        {props.numberOfPlayers}
      </div>
      <div
        className={`${className}--type`}
        onClick={handleSelect}
      >
        {props.member}
      </div>
      {
        ORDERED_ROLE_LIST.map(item => (
          <div
            className={`${className}--role`}
            key={item.id}
            onClick={handleSelect}
          >
            {cast[item.id]}
          </div>
        ))
      }
    </>
  )
}
