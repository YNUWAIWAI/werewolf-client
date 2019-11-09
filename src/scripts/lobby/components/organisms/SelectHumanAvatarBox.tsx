import * as React from 'react'
import {
  Avatar,
  DispatchProps
} from '../templates/SelectHumanAvatar'
import Menu, {MenuItemProps as MenuItem} from './Menu'
import {FormattedMessage} from 'react-intl'
import SelectHumanAvatarTable from './SelectHumanAvatarTable'

interface Props {
  readonly avatar: Avatar
  readonly command: MenuItem[]
  readonly handleAvatarNameChange: DispatchProps['handleAvatarNameChange']
  readonly transition: DispatchProps['transition']
}

export default function SelectHumanAvatarBox(props: Props) {
  return (
    <>
      <FormattedMessage
        id="SelectHumanAvatarBox.header"
      >
        {
          text => (
            <div>
              {text}
            </div>
          )
        }
      </FormattedMessage>
      <SelectHumanAvatarTable
        avatar={props.avatar}
        handleAvatarNameChange={props.handleAvatarNameChange}
      />
      <Menu
        class="lo--select-avatar--command human"
        itemClass="lo--select-avatar--command--item"
        items={props.command}
        transition={props.transition}
      />
    </>
  )
}
