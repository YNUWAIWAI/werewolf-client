// Workaround for https://github.com/microsoft/TypeScript/issues/17002
declare global {
  interface ArrayConstructor {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    isArray(arg: readonly any[] | any): arg is readonly any[]
  }
}
// Workaround end

import * as React from 'react'
import {
  ActionMeta,
  ValueType
} from 'react-select/src/types'
// import Select from 'react-select'
import {CustomizedSelect as Select} from './CustomizedSelect'
import {lobby} from '../../../types'
import {useIntl} from 'react-intl'

interface Props {
  readonly className: string
  readonly defaultValue: lobby.Avatar
  readonly handleChange: (valid: boolean) => (avatar: lobby.Avatar) => void
  readonly navigatable: boolean
  readonly type: 'advancedSearch' | 'buildVillage'
}

interface Option {
  readonly label: string
  readonly value: lobby.Avatar
}

export const AvatarSelect: React.FC<Props> = props => {
  const intl = useIntl()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (selectedOption: ValueType<Option>, action: ActionMeta) => {
    if (!selectedOption) { // selectedOption: null | undifined
      return
    }
    if (!Array.isArray(selectedOption)) { // selectedOption: Option
      props.handleChange(true)(selectedOption.value)
    } else if (props.type === 'advancedSearch') { // selectedOption: Option[]
      props.handleChange(true)(lobby.Avatar.random)
    } else { // props.type === 'buildVillage', selectedOption: Option[]
      props.handleChange(false)(lobby.Avatar.fixed)
    }
  }
  const options: Option[] = {
    advancedSearch: [
      {
        label: intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(random)'
          }
        ),
        value: lobby.Avatar.random
      },
      {
        label: intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(fixed)'
          }
        ),
        value: lobby.Avatar.fixed
      },
      {
        label: intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(unspecified)'
          }
        ),
        value: lobby.Avatar.unspecified
      }
    ],
    buildVillage: [
      {
        label: intl.formatMessage(
          {
            id: 'AvatarSelect.buildVillage(fixed)'
          }
        ),
        value: lobby.Avatar.fixed
      },
      {
        label: intl.formatMessage(
          {
            id: 'AvatarSelect.buildVillage(random)'
          }
        ),
        value: lobby.Avatar.random
      }
    ]
  }[props.type]
  const defaultValue = options.find(option => option.value === props.defaultValue)

  return (
    <Select
      className={props.className}
      defaultValue={defaultValue}
      isSearchable={false}
      navigatable={props.navigatable}
      onChange={handleChange}
      options={options}
    />
  )
}
AvatarSelect.displayName = 'AvatarSelect'
