import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectHumanAvatar'
import SelectAvatarTableBodyAvatarName from '../atoms/SelectAvatarTableBodyAvatarName'
import SelectAvatarTableBodyCheckBox from '../atoms/SelectAvatarTableBodyCheckBox'
import {lobby} from '../../types'

interface Props {
  readonly avatar: Avatar
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
}

export default function SelectHumanAvatarTableBody(props: Props) {
  const rows = props.avatar.allIds.map(id => {
    const avatar = props.avatar.byId[id]

    return (
      <div
        className="lo--select-avatar--table--body--row human"
        key={id}
      >
        <SelectAvatarTableBodyCheckBox
          checked={avatar.checked}
        />
        <SelectAvatarTableBodyAvatarName
          handleChange={props.handleAvatarNameChange}
          name={avatar.name}
        />
      </div>
    )
  })

  return (
    <div className="lo--select-avatar--table--body">
      {rows}
    </div>
  )
}
