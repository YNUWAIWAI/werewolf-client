import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import BuildVillageBox from '../organisms/BuildVillageBox'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'

type PropName = 'avatar' | 'comment' | 'hostName' | 'member' | 'numberOfPlayers' | 'numberOfRobots' | 'villageName'

type NumberPropName = Extract<PropName, 'numberOfPlayers' | 'numberOfRobots'>

type TextPropName = Extract<PropName, 'comment' | 'hostName' | 'villageName'>


export interface StateProps {
  readonly image: string
  readonly name: string
  readonly menuItems: lobby.MenuItem[]
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly numberOfPlayers: boolean
    readonly numberOfRobots: boolean
    readonly villageName: boolean
  },
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
export interface OwnProps {
  readonly transition: (target: lobby.Target) => void
}
export interface Props extends StateProps, DispatchProps, OwnProps {}

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
