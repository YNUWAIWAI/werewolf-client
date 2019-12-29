import * as React from 'react'
import CreateNewAvatarHeader from '../molecules/CreateNewAvatarHeader'
import CreateNewRobotAvatarBody from '../molecules/CreateNewRobotAvatarBody'
import {MenuItemProps as MenuItem} from './Menu'

interface Props {
  command: MenuItem[]
}

export default function CreateNewRobotAvatarBox(props: Props) {
  return (
    <>
      <CreateNewAvatarHeader />
      <CreateNewRobotAvatarBody
        command={props.command}
      />
    </>
  )
}
