import * as React from 'react'
import {FormattedMessage} from 'react-intl'
import {TextInput} from '../../atoms/TextInput'

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

export const BuildVillageCellVillageName: React.FC<Props> = props => (
  <>
    <div className="lo--village--item--prop village-name">
      <FormattedMessage
        id="BuildVillage.label(villageName)"
      />
    </div>
    {
      props.isFiexdAvatar ?
        <FormattedMessage
          id="BuildVillage.placeholder"
          values={values}
        >
          {
            text => (
              <TextInput
                className={`lo--village--item--val village-name ${props.valid ? '' : 'invalid'}`}
                handleChange={props.handleValueChange}
                initialValue={props.value}
                max={values.max}
                min={values.min}
                navigatable={props.navigatable}
                placeholder={typeof text === 'string' ? text : ''}
                required
              />
            )
          }
        </FormattedMessage> :
        <div className="lo--village--item--val village-name">
          <FormattedMessage
            id={`BuildVillage.villageName.anonymous(${props.value})`}
          />
        </div>
    }
  </>
)
BuildVillageCellVillageName.displayName = 'BuildVillageCellVillageName'
