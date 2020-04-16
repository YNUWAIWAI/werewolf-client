import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import BuildVillageBox from '../../containers/BuildVillageBoxContainer'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly image: string
  readonly name: string
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export default function BuildVillage(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.buildVillage" />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <BuildVillageBox />
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
