import * as React from 'react'
import CreateNewAvatarHeader from '../molecules/CreateNewAvatarHeader'
import CreateNewHumanAvatarBody from '../molecules/CreateNewHumanAvatarBody'
import {MenuItemProps as MenuItem} from './Menu'

interface Props {
  command: MenuItem[]
}

export default function CreateNewHumanAvatarBox(props: Props) {
  return (
    <>
      <CreateNewAvatarHeader />
      <CreateNewHumanAvatarBody
        command={props.command}
      />
    </>
  )
}
