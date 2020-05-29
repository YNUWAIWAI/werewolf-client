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
  const [hover, setHover] = React.useState(false)
  const handleMouseOver = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  const ref = React.createRef<HTMLSpanElement>()
  const label = `${props.numberOfPlayers}-${props.member}`
  const className = 'lo--support-select--member-select--option'
  const state = `${props.checked ? 'checked' : ''} ${hover ? 'hover' : ''}`
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
        className={`${className} checkbox ${state}`}
        onClick={handleSelect}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
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
        className={`${className} number ${state}`}
        onClick={handleSelect}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      >
        {props.numberOfPlayers}
      </div>
      <div
        className={`${className} type ${state}`}
        onClick={handleSelect}
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
      >
        {props.member}
      </div>
      {
        ORDERED_ROLE_LIST.map(item => (
          <div
            className={`${className} role ${state}`}
            key={item.id}
            onClick={handleSelect}
            onMouseLeave={handleMouseLeave}
            onMouseOver={handleMouseOver}
          >
            {cast[item.id]}
          </div>
        ))
      }
    </>
  )
}
