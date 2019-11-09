import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectRobotAvatar'
import Menu, {MenuItemProps as MenuItem} from './Menu'
import {FormattedMessage} from 'react-intl'
import SelectRobotAvatarTable from '../organisms/SelectRobotAvatarTable'

interface Props {
  readonly avatar: Avatar
  readonly command: MenuItem[]
  readonly handleAccept: DispatchProps['handleAccept']
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
  readonly renewAccessToken: DispatchProps['renewAccessToken']
  readonly transition: DispatchProps['transition']
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
      <Menu
        class="lo--select-avatar--command"
        itemClass="lo--select-avatar--command--item"
        items={props.command}
        transition={props.transition}
      />
    </>
  )
}
