import * as React from 'react'
import {AdvancedSearchProp} from '../../atoms/AdvancedSearchProp'
import {FormattedMessage} from 'react-intl'
import {TextareaInput} from '../../atoms/TextareaInput'

interface Props {
  readonly checked: boolean
  readonly handleCheckboxChange: (value: boolean) => void
  readonly handleValueChange: (valid: boolean) => (value: string) => void
  readonly navigatable: boolean
  readonly valid: boolean
}

const values = {
  max: 100,
  min: 0
}

export const AdvancedSearchCellComment: React.FC<Props> = props => (
  <>
    <AdvancedSearchProp
      checked={props.checked}
      handleChange={props.handleCheckboxChange}
      name="comment"
      navigatable={props.navigatable}
      valid={props.valid}
    />
    <FormattedMessage
      id="AdvancedSearch.placeholder(comment)"
      values={values}
    >
      {
        text => (
          <TextareaInput
            className="lo--advanced-search--input"
            handleChange={props.handleValueChange}
            initialValue=""
            max={values.max}
            min={values.min}
            navigatable={props.navigatable}
            placeholder={typeof text === 'string' ? text : ''}
            required={false}
            rows={3}
          />
        )
      }
    </FormattedMessage>
  </>
)
AdvancedSearchCellComment.displayName = 'AdvancedSearchCellComment'
