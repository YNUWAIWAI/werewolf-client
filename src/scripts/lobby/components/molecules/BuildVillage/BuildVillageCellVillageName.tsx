import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import TextInput from '../../atoms/TextInput'

interface Props {
  readonly handleValueChange: (valid: boolean) => (value: string) => void
  readonly isFiexdAvatar: boolean
  readonly navigatable: boolean
  readonly valid: boolean
  readonly value: string
}

const values = {
  max: 30,
  min: 5
}

export default function BuildVillageCellVillageName(props: Props) {
  return (
    <>
      <FormattedMessage
        id="BuildVillage.label(villageName)"
      >
        {
          text => (
            <div className="lo--village--item--prop village-name">
              {text}
            </div>
          )
        }
      </FormattedMessage>
      {
        props.isFiexdAvatar ?
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
                  <TextInput
                    className={`lo--village--item--val village-name ${props.valid ? '' : 'invalid'}`}
                    handleChange={props.handleValueChange}
                    initialValue={props.value}
                    max={values.max}
                    min={values.min}
                    navigatable={props.navigatable}
                    placeholder={text}
                    required
                  />
                )
              }
            }
          </FormattedMessage> :
          <FormattedMessage
            id={`BuildVillage.villageName.anonymous(${props.value})`}
          >
            {
              text => (
                <div
                  className="lo--village--item--val village-name"
                >
                  {text}
                </div>
              )
            }
          </FormattedMessage>
      }
    </>
  )
}
