import * as React from 'react'
import {AdvancedSearchProp} from '../../atoms/AdvancedSearch/AdvancedSearchProp'
import {NumberSelect} from '../../atoms/Select/NumberSelect'

interface Props {
  readonly checked: boolean
  readonly handleCheckboxChange: (value: boolean) => void
  readonly handleValueChange: (valid: boolean) => (value: number) => void
  readonly navigatable: boolean
  readonly valid: boolean
}

export const AdvancedSearchCellMaximum: React.FC<Props> = props => (
  <>
    <AdvancedSearchProp
      checked={props.checked}
      handleChange={props.handleCheckboxChange}
      name="maximum"
      navigatable={props.navigatable}
      valid={props.valid}
    />
    <NumberSelect
      ascendingOrder={false}
      className="lo--advanced-search--input"
      from={4}
      handleChange={props.handleValueChange}
      navigatable={props.navigatable}
      to={15}
      type="player"
    />
  </>
)
AdvancedSearchCellMaximum.displayName = 'AdvancedSearchCellMaximum'
