import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TextareaInput} from '../../atoms/Input/TextareaInput'

interface Props {
  readonly handleValueChange: (valid: boolean) => (value: string) => void
  readonly navigatable: boolean
  readonly valid: boolean
  readonly value: string
}

const values = {
  max: 100,
  min: 0
}

export const BuildVillageCellComment: React.FC<Props> = props => (
  <>
    <div className="lo--village--item--prop comment">
      <FormattedMessage
        id="BuildVillage.label(comment)"
      />
    </div>
    <FormattedMessage
      id="BuildVillage.placeholder"
      values={values}
    >
      {
        text => (
          <TextareaInput
            className={`lo--village--item--val comment ${props.valid ? '' : 'invalid'}`}
            handleChange={props.handleValueChange}
            initialValue={props.value}
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
BuildVillageCellComment.displayName = 'BuildVillageCellComment'
