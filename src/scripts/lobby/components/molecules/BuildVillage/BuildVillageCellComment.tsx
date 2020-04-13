import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TextareaInput from '../../atoms/TextareaInput'

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

export default function BuildVillageCellComment(props: Props) {
  return (
    <>
      <FormattedMessage
        id="BuildVillage.label(comment)"
      >
        {
          text => (
            <div className="lo--village--item--prop comment">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <FormattedMessage
        id="BuildVillage.placeholder"
        values={values}
      >
        {
          text => {
            if (typeof text !== 'string') {
              return null
            }

            return (
              <TextareaInput
                className={`lo--village--item--val comment ${props.valid ? '' : 'invalid'}`}
                handleChange={props.handleValueChange}
                initialValue={props.value}
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
