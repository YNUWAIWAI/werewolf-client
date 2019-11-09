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
        className="lo--select-avatar--command human"
        itemClassName="lo--select-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
