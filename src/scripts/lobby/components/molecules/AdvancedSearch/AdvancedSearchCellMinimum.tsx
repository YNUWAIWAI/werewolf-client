import * as React from 'react'
import AdvancedSearchProp from '../../atoms/AdvancedSearchProp'
import NumberSelect from '../../atoms/Select/NumberSelect'

export interface Props {
  readonly checked: boolean
  readonly handleCheckboxChange: (value: boolean) => void
  readonly handleValueChange: (valid: boolean) => (value: number) => void
  readonly navigatable: boolean
  readonly valid: boolean
}

export default function AdvancedSearchCellMinimum(props: Props) {
  return (
    <>
      <AdvancedSearchProp
        checked={props.checked}
        handleChange={props.handleCheckboxChange}
        name="minimum"
        navigatable={props.navigatable}
        valid={props.valid}
      />
      <NumberSelect
        ascendingOrder
        className="lo--advanced-search--input"
        from={4}
        handleChange={props.handleValueChange}
        navigatable={props.navigatable}
        to={15}
        type="player"
      />
    </>
  )
}
