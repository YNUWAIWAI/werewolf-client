import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import BuildVillageBox from '../organisms/BuildVillageBox'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import {lobby} from '../../types'

type PropName = 'avatar' | 'comment' | 'hostName' | 'member' | 'numberOfPlayers' | 'numberOfRobots' | 'villageName'

type NumberPropName = Extract<PropName, 'numberOfPlayers' | 'numberOfRobots'>

type TextPropName = Extract<PropName, 'comment' | 'villageName'>

export interface StateProps {
  readonly image: string
  readonly name: string
  readonly menuItems: MenuItem[]
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly numberOfPlayers: boolean
    readonly numberOfRobots: boolean
    readonly villageName: boolean
  }
  readonly value: {
    readonly avatar: lobby.Avatar
    readonly comment: string
    readonly hostName: string
    readonly numberOfHumans: number
    readonly numberOfPlayers: number
    readonly numberOfRobots: number
    readonly villageName: string
  }
}
export interface DispatchProps {
  readonly handleAvatarChange: (value: lobby.Avatar) => void
  readonly handleMemberChange: (value: lobby.Member) => void
  readonly handleNumberChange: (propName: NumberPropName) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (value: string) => void
  readonly handleValidityChange: (propName: PropName) => (valid: boolean) => void
}
export type Props = StateProps & DispatchProps

export default function BuildVillage(props: Props) {
  return (
    <div className="lo--grid">
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
          className="lo--compact-menu"
          itemClassName="lo--compact-menu--item"
          items={props.menuItems}
        />
      </AsideContent>
    </div>
  )
}
