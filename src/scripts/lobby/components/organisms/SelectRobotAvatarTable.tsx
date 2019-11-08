import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectRobotAvatar'
import {FormattedMessage} from 'react-intl'
import SelectRobotAvatarTableBody from '../molecules/SelectRobotAvatarTableBody'
import SelectRobotAvatarTableHeader from '../molecules/SelectRobotAvatarTableHeader'
import {lobby} from '../../types'

interface Props {
  readonly avatar: Avatar
  readonly handleAccept: DispatchProps['handleAccept']
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
  readonly renewAccessToken: DispatchProps['renewAccessToken']
}

export default function SelectRobotAvatarTable(props: Props) {
  return (
    <div className="lo--select-avatar--table">
      <SelectRobotAvatarTableHeader />
      <SelectRobotAvatarTableBody
        avatar={props.avatar}
        handleAccept={props.handleAccept}
        handleAvatarNameChange={props.handleAvatarNameChange}
        renewAccessToken={props.renewAccessToken}
      />
    </div>
  )
}
