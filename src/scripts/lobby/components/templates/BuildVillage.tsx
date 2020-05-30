import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {Avatar} from '../atoms/Avatar'
import {BuildVillageBoxContainer} from '../../containers/BuildVillageBoxContainer'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import {MenuContainer} from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly image: string
  readonly name: string
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export const BuildVillage: React.FC<Props> = props => (
  <div className="lo--grid">
    <Header id="Header.buildVillage" />
    <Avatar image={props.image} name={props.name} />
    <MainContent>
      <BuildVillageBoxContainer />
    </MainContent>
    <AsideContent>
      <MenuContainer
        className="lo--compact-menu"
        itemClassName="lo--compact-menu--item"
        items={props.menuItems}
      />
    </AsideContent>
  </div>
)
BuildVillage.displayName = 'BuildVillage'
