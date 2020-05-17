import * as React from 'react'
import CheckboxBlank from './svg/CheckboxBlank'
import CheckboxFilled from './svg/CheckboxFilled'

interface Props {
  readonly checked: boolean
  readonly disabled?: boolean
  readonly handleChange: (checked: boolean) => void
  readonly label?: string
  readonly labeledby?: string
  readonly tabIndex: number
}

export default function Checkbox(props: Props) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (!props.disabled && event.key === ' ') {
      props.handleChange(!props.checked)
    }
  }
  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!props.disabled && event.target === event.currentTarget) {
      props.handleChange(!props.checked)
    }
  }

  return (
    <span
      aria-checked={props.checked}
      aria-label={props.label}
      aria-labelledby={props.labeledby}
      className={`checkbox ${props.disabled ? 'disabled' : ''}`}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="checkbox"
      tabIndex={props.tabIndex}
    >
      {
        props.checked ?
          <CheckboxFilled /> :
          <CheckboxBlank />
      }
    </span>
  )
}
