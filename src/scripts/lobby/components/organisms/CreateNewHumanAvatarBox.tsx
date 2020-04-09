import * as React from 'react'
import CreateNewAvatarHeader from '../molecules/CreateNewAvatarHeader'
import CreateNewHumanAvatarBody from '../molecules/CreateNewHumanAvatarBody'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from './Menu'

interface Props {
  command: MenuItem[]
}

export default function CreateNewHumanAvatarBox(props: Props) {
  return (
    <>
      <CreateNewAvatarHeader />
      <CreateNewHumanAvatarBody />
      <Menu
        className="lo--create-new-avatar--command"
        itemClassName="lo--create-new-avatar--command--item"
        items={props.command}
      />
    </>
  )
}
