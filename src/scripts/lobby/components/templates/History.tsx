import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import {MenuContainer} from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import {VillageList} from '../organisms/VillageList'
import {lobby} from '../../types'

export interface StateProps {
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly selectVillage: (id: number) => () => void
}
export type Props = StateProps & DispatchProps

export const History: React.FC<Props> = props => (
  <div className="lo--grid">
    <Header id="Header.history" />
    <MainContent>
      <VillageList
        isPlayer={props.isPlayer}
        items={props.villageItems}
        selectVillage={props.selectVillage}
      />
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
History.displayName = 'History'
