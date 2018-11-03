// @flow
import type {Avatar as AvatarType, Member, MenuItem, Target} from 'lobby'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import BuildVillageBox from '../organisms/BuildVillageBox'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import React from 'react'

export type StateProps = {
  +image: string,
  +name: string,
  +menuItems: MenuItem[],
  +validity: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +numberOfPlayers: boolean,
    +numberOfRobots: boolean,
    +villageName: boolean
  },
  +value: {
    +avatar: AvatarType,
    +comment: string,
    +hostName: string,
    +numberOfHumans: number,
    +numberOfPlayers: number,
    +numberOfRobots: number,
    +villageName: string
  }
}
export type DispatchProps = {
  +handleAvatarChange: AvatarType => void,
  +handleMemberChange: Member => void,
  +handleNumberChange: string => number => void,
  +handleTextChange: string => string => void,
  +handleValidityChange: string => boolean => void
}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function BuildVillage(props: Props) {
  return (
    <div className="grid">
      <Header id="Header.buildVillage" />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <BuildVillageBox
          handleAvatarChange={props.handleAvatarChange}
          handleMemberChange={props.handleMemberChange}
          handleNumberChange={props.handleNumberChange}
          handleTextChange={props.handleTextChange}
          handleValidityChange={props.handleValidityChange}
          validity={props.validity}
          value={props.value}
        />
      </MainContent>
      <AsideContent>
        <Menu
          class="compact-menu"
          itemClass="compact-menu--item"
          items={props.menuItems}
          transition={props.transition}
        />
      </AsideContent>
    </div>
  )
}
