import * as React from 'react'
import {Checkbox} from '../Checkbox'

interface Props {
  readonly additionalClassName: string[]
  readonly checked: boolean
  readonly handleClick: () => void
  readonly navigatable: boolean
}

export default function SelectAvatarTableBodyCheckbox(props: Props) {
  const ref = React.createRef<HTMLSpanElement>()
  const handleClick = () => {
    if (ref.current) {
      ref.current.focus()
      props.handleClick()
    }
  }

  return (
    <div
      className={`lo--select-avatar--table--body--item checkbox ${props.additionalClassName.join(' ')}`}
      onClick={handleClick}
    >
      <Checkbox
        checked={props.checked}
        handleChange={props.handleClick}
        navigatable={props.navigatable}
        ref={ref}
      />
    </div>
  )
}
