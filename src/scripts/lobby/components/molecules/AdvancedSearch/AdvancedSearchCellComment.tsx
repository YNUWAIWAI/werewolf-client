import * as React from 'react'
import AdvancedSearchProp from '../../atoms/AdvancedSearchProp'
import {FormattedMessage} from 'react-intl'
import TextareaInput from '../../atoms/TextareaInput'

export interface Props {
  readonly checked: boolean
  readonly navigatable: boolean
  readonly valid: boolean
  readonly handleCheckboxChange: (value: boolean) => void
  readonly handleValueChange: (valid: boolean) => (value: string) => void
}

const values = {
  max: 100,
  min: 0
}

export default function AdvancedSearchCellComment(props: Props) {
  return (
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
          text => {
            if (typeof text !== 'string') {
              return null
            }

            return (
              <TextareaInput
                className="lo--advanced-search--input"
                handleChange={props.handleValueChange}
                initialValue=""
                max={values.max}
                min={values.min}
                navigatable={props.navigatable}
                placeholder={text}
                required={false}
                rows={3}
              />
            )
          }
        }
      </FormattedMessage>
    </>
  )
}
