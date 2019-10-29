import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AdvancedSearchBox from '../organisms/AdvancedSearchBox'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import SearchResult from '../organisms/SearchResult'
import {Target} from '../../constants/ActionTypes'
import {lobby} from '../../types'

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
  }
  readonly header: string
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly searched: boolean
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  }
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly handleAvatarChange: (value: lobby.Avatar) => void
  readonly handleCheckboxChange: (propName: PropName) => (valid: boolean) => void
  readonly handleNumberChange: (propName: NumberPropName) => (value: number) => void
  readonly handleTextChange: (propName: TextPropName) => (value: string) => void
  readonly handleValidityChange: (propName: PropName) => (value: boolean) => void
  readonly selectVillage: (id: number) => () => void
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function AdvancedSearch(props: Props) {
  return (
    <div className="lo--grid">
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
          className="lo--advanced-search"
          isPlayer={props.isPlayer}
          searched={props.searched}
          selectVillage={props.selectVillage}
          villageItems={props.villageItems}
        />
      </MainContent>
      <AsideContent>
        <Menu
          class="lo--compact-menu"
          itemClass="lo--compact-menu--item"
          items={props.menuItems}
          transition={props.transition}
        />
      </AsideContent>
    </div>
  )
}
