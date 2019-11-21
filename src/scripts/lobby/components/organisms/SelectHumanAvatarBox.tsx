import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectHumanAvatar'
import {FormattedMessage} from 'react-intl'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'
import SelectHumanAvatarTable from './SelectHumanAvatarTable'

interface Props {
  readonly avatar: Avatar
  readonly command: MenuItem[]
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
  readonly handleSelectAvatar: DispatchProps['handleSelectAvatar']
}

export default function SelectHumanAvatarBox(props: Props) {
  return (
    <>
      <FormattedMessage
        id="SelectHumanAvatarBox.header"
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
      <SelectHumanAvatarTable
        avatar={props.avatar}
        handleAvatarNameChange={props.handleAvatarNameChange}
        handleSelectAvatar={props.handleSelectAvatar}
      />
      <Menu
        className="lo--select-avatar--command human"
        itemClassName="lo--select-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
