// @flow
import type {Avatar, Member, MenuItem, Target} from 'lobby'
import AsideContent from './AsideContent'
import EditableVillageItem from './EditableVillageItem'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'

export type StateProps = {
  +menuItems: MenuItem[],
  +validity: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +numberOfPlayers: boolean,
    +numberOfRobots: boolean,
    +villageName: boolean
  },
  +village: {
    +comment: string,
    +hostName: string,
    +numberOfHumans: number,
    +numberOfPlayers: number,
    +numberOfRobots: number,
    +villageName: string
  }
}
export type DispatchProps = {
  +handleAvatarChange: Avatar => void,
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
      <Header text="Build village" />
      <MainContent>
        <EditableVillageItem
          handleAvatarChange={props.handleAvatarChange}
          handleMemberChange={props.handleMemberChange}
          handleNumberChange={props.handleNumberChange}
          handleTextChange={props.handleTextChange}
          handleValidityChange={props.handleValidityChange}
          validity={props.validity}
          village={props.village}
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
