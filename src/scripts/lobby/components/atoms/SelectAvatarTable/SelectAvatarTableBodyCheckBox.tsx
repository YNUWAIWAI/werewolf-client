import * as React from 'react'
import Checkbox from '../Checkbox'

interface Props {
  readonly additionalClassName: string[]
  readonly checked: boolean
  readonly handleClick: () => void
}

export default function SelectAvatarTableBodyCheckbox(props: Props) {
  return (
    <div
      className={`lo--select-avatar--table--body--item checkbox ${props.additionalClassName.join(' ')}`}
      onClick={props.handleClick}
    >
      <Checkbox
        checked={props.checked}
        handleChange={props.handleClick}
      />
    </div>
  )
}
