import * as React from 'react'
import CreateNewAvatarHeader from '../molecules/CreateNewAvatarHeader'
import CreateNewRobotAvatarBody from '../molecules/CreateNewRobotAvatarBody'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'

interface Props {
  command: MenuItem[]
}

export default function CreateNewRobotAvatarBox(props: Props) {
  return (
    <>
      <CreateNewAvatarHeader />
      <CreateNewRobotAvatarBody />
      <Menu
        className="lo--create-new-avatar--command"
        itemClassName="lo--create-new-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
