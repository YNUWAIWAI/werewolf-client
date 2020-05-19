import * as React from 'react'
import CheckboxBlank from './svg/CheckboxBlank'
import CheckboxFilled from './svg/CheckboxFilled'

interface Props {
  readonly checked: boolean
  readonly disabled?: boolean
  readonly handleChange: (checked: boolean) => void
  readonly label?: string
  readonly labelledby?: string
  readonly navigatable: boolean
}

export const Checkbox = React.forwardRef((props: Props, ref: React.Ref<HTMLSpanElement>) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (!props.disabled && event.key === ' ') {
      event.preventDefault()
      props.handleChange(!props.checked)
    }
  }
  const handleClick = () => {
    if (!props.disabled) {
      props.handleChange(!props.checked)
    }
  }

  return (
    <span
      aria-checked={props.checked}
      aria-disabled={props.disabled}
      aria-labelledby={props.labelledby}
      className="lo--checkbox"
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      ref={ref}
      role="checkbox"
      tabIndex={props.navigatable && !props.disabled ? 0 : -1}
    >
      {
        props.checked ?
          <CheckboxFilled /> :
          <CheckboxBlank />
      }
    </span>
  )
})

Checkbox.displayName = 'Checkbox'
