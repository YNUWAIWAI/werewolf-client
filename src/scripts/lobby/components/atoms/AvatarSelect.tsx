/* global lobby */
import * as React from 'react'
import {ActionMeta, ValueType} from 'react-select/lib/types'
import Select from 'react-select'
import {injectIntl} from 'react-intl'

interface Props extends ReactIntl.InjectedIntlProps {
  readonly className: string
  readonly defaultValue: lobby.Avatar
  readonly handleChange: (valid: boolean) => (avatar: lobby.Avatar) => void
  readonly type: 'advancedSearch' | 'buildVillage'
}

interface Option {
  readonly label: string
  readonly value: lobby.Avatar
}

export default injectIntl(function AvatarSelect(props: Props) {
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
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(random)'
          }
        ),
        value: lobby.Avatar.random
      },
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(fixed)'
          }
        ),
        value: lobby.Avatar.fixed
      },
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(unspecified)'
          }
        ),
        value: lobby.Avatar.unspecified
      }
    ],
    buildVillage: [
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.buildVillage(fixed)'
          }
        ),
        value: lobby.Avatar.fixed
      },
      {
        label: props.intl.formatMessage(
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
      classNamePrefix="react-select"
      defaultValue={defaultValue}
      name="avatar"
      onChange={handleChange}
      options={options}
    />
  )
})
