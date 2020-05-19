import * as React from 'react'
import {Checkbox} from '../atoms/Checkbox'
import {FormattedMessage} from 'react-intl'

interface Props {
  readonly checkboxFixed?: boolean
  readonly checked: boolean
  readonly handleChange: (checked: boolean) => void
  readonly name: string
  readonly navigatable: boolean
  readonly valid: boolean
}

export default function AdvancedSearchProp(props: Props) {
  const ref = React.createRef<HTMLSpanElement>()
  const disabled = !props.valid || props.checkboxFixed
  const handleClick = () => {
    if (!disabled && ref.current) {
      ref.current.focus()
      props.handleChange(!props.checked)
    }
  }

  return (
    <div
      className="lo--advanced-search--prop"
      onClick={handleClick}
    >
      <Checkbox
        checked={props.checked}
        disabled={!props.valid || props.checkboxFixed}
        handleChange={props.handleChange}
        labelledby={props.name}
        navigatable={props.navigatable}
        ref={ref}
      />
      <span
        id={props.name}
      >
        <FormattedMessage
          id={`AdvancedSearch.label(${props.name})`}
        />
      </span>
    </div>
  )
}
