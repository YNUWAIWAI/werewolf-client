import * as React from 'react'
import AdvancedSearchBox from '../organisms/AdvancedSearchBox'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import SearchResult from '../organisms/SearchResult'

type PropName = 'avatar' | 'comment' | 'hostName' | 'maximum' | 'minimum' | 'villageName'

type NumberPropName = Extract<PropName, 'maximum' | 'minimum'>

type TextPropName = Extract<PropName, 'comment' | 'hostName' | 'villageName'>

export interface StateProps {
  readonly checked: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  },
  readonly header: string
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: lobby.MenuItem[]
  readonly name: string
  readonly searched: boolean
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  },
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly handleAvatarChange: (value: lobby.Avatar) => void,
  readonly handleCheckboxChange: (propName: PropName) => (valid: boolean) => void
  readonly handleNumberChange: (propName: NumberPropName) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (value: string) => void
  readonly handleValidityChange: (propName: PropName) => (value: boolean) => void
  readonly selectVillage: (id: number) => () => void
}
export interface OwnProps {
  readonly transition: (target: lobby.Target) => void
}
export interface Props extends StateProps, DispatchProps, OwnProps {}

export default function AdvancedSearch(props: Props) {
  return (
    <div className="grid">
      <Header id={props.header} />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <AdvancedSearchBox
          checked={props.checked}
          handleAvatarChange={props.handleAvatarChange}
          handleCheckboxChange={props.handleCheckboxChange}
          handleNumberChange={props.handleNumberChange}
          handleTextChange={props.handleTextChange}
          handleValidityChange={props.handleValidityChange}
          validity={props.validity}
        />
        <SearchResult
          className="advanced-search"
          isPlayer={props.isPlayer}
          searched={props.searched}
          selectVillage={props.selectVillage}
          villageItems={props.villageItems}
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
