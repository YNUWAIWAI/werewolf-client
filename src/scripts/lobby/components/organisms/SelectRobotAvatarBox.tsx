import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectRobotAvatar'
import {FormattedMessage} from 'react-intl'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'
import SelectRobotAvatarTable from '../organisms/SelectRobotAvatarTable'

interface Props {
  readonly avatar: Avatar
  readonly command: MenuItem[]
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
            <div
              className="lo--select-avatar--header"
            >
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
      <Menu
        className="lo--select-avatar--command"
        itemClassName="lo--select-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
