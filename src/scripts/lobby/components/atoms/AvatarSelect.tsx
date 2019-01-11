/* global lobby */
/// <reference types="lobby" />
import * as React from 'react'
import Select from 'react-select'
import {injectIntl} from 'react-intl'

interface Props extends ReactIntl.InjectedIntlProps {
  readonly className: string
  readonly defaultValue: lobby.Avatar
  readonly handleChange: (validity: boolean) => (avatar: lobby.Avatar) => void
  readonly type: 'advancedSearch' | 'buildVillage'
}

interface Option {
  label: string
  value: lobby.Avatar
}

export default injectIntl(function AvatarSelect(props: Props) {
  const handleChange = (selectedOption: Option | []) => {
    if (!Array.isArray(selectedOption)) { // selectedOption: Option
      props.handleChange(true)(selectedOption.value)
    } else if (props.type === 'advancedSearch') { // selectedOption: []
      props.handleChange(true)(lobby.Avatar.random)
    } else { // props.type === 'buildVillage', selectedOption: []
      props.handleChange(false)(lobby.Avatar.fixed)
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
