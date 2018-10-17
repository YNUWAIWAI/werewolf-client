// @flow
import {type InjectIntlProvidedProps, injectIntl} from 'react-intl'
import type {Avatar} from 'lobby'
import React from 'react'
import Select from 'react-select'

type Props = {
  +className: string,
  +defaultValue: Avatar,
  +handleChange: boolean => Avatar => void,
  +type: 'advancedSearch' | 'buildVillage'
} & InjectIntlProvidedProps

type Option = {
  label: string,
  value: Avatar
}

export default injectIntl(function AvatarSelect(props: Props) {
  const handleChange = (selectedOption: Option | []) => {
    if (!Array.isArray(selectedOption)) { // selectedOption: Option
      props.handleChange(true)(selectedOption.value)
    } else if (props.type === 'advancedSearch') { // selectedOption: []
      props.handleChange(true)('random')
    } else { // props.type === 'buildVillage', selectedOption: []
      props.handleChange(false)('fixed')
    }
  }
  const options = {
    advancedSearch: [
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(random)'
          }
        ),
        value: 'random'
      },
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(fixed)'
          }
        ),
        value: 'fixed'
      },
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.advancedSearch(unspecified)'
          }
        ),
        value: 'unspecified'
      }
    ],
    buildVillage: [
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.buildVillage(fixed)'
          }
        ),
        value: 'fixed'
      },
      {
        label: props.intl.formatMessage(
          {
            id: 'AvatarSelect.buildVillage(random)'
          }
        ),
        value: 'random'
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
