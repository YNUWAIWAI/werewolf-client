import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectRobotAvatar'
import {FormattedMessage} from 'react-intl'
import SelectRobotAvatarTable from '../organisms/SelectRobotAvatarTable'
import {lobby} from '../../types'

interface Props {
  readonly avatar: Avatar
  readonly handleAccept: DispatchProps['handleAccept']
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
  readonly renewAccessToken: DispatchProps['renewAccessToken']
}

export default function SelectRobotAvatarBox(props: Props) {
  return (
    <>
      <FormattedMessage
        id="SelectRobotAvatarBox.header"
      >
        {
          text => (
            <div>
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <SelectRobotAvatarTable
        avatar={props.avatar}
        handleAccept={props.handleAccept}
        handleAvatarNameChange={props.handleAvatarNameChange}
        renewAccessToken={props.renewAccessToken}
      />
    </>
  )
}
