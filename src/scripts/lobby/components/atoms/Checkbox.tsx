import * as React from 'react'
import CheckboxBlank from './svg/CheckboxBlank'
import CheckboxFilled from './svg/CheckboxFilled'

interface Props {
  readonly checked: boolean
  readonly className?: string
  readonly handleChange: (checked: boolean) => void
  readonly label?: string
  readonly labeledby?: string
}

export default function Checkbox(props: Props) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === ' ') {
      props.handleChange(!props.checked)
    }
  }
  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (event.target === event.currentTarget) {
      props.handleChange(!props.checked)
    }
  }

  return (
    <span
      aria-checked={props.checked}
      aria-label={props.label}
      aria-labelledby={props.labeledby}
      className={props.className}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="checkbox"
      tabIndex={0}
    >
      {
        props.checked ?
          <CheckboxFilled /> :
          <CheckboxBlank />
      }
    </span>
  )
}
