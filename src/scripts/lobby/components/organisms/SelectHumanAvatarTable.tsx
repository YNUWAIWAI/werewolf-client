import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectHumanAvatar'
import {FormattedMessage} from 'react-intl'
import SelectHumanAvatarTableBody from '../molecules/SelectHumanAvatarTableBody'
import SelectHumanAvatarTableHeader from '../molecules/SelectHumanAvatarTableHeader'
import {lobby} from '../../types'

interface Props {
  readonly avatar: Avatar
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
}

export default function SelectHumanAvatarTable(props: Props) {
  return (
    <div className="lo--select-avatar--table">
      <SelectHumanAvatarTableHeader />
      <SelectHumanAvatarTableBody
        avatar={props.avatar}
        handleAvatarNameChange={props.handleAvatarNameChange}
      />
    </div>
  )
}
