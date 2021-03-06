import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {Avatar} from '../atoms/Avatar'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import {MenuContainer} from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import {VillageList} from '../organisms/VillageList'
import {lobby} from '../../types'

export interface StateProps {
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly villageItems: lobby.Village[]
}
export interface DispatchProps {
  readonly selectVillage: (id: number) => () => void
}
export type Props = StateProps & DispatchProps

export const LobbyForAudience: React.FC<Props> = props => (
  <div className="lo--grid">
    <Header id="Header.lobbyForAudience" />
    <Avatar image={props.image} name={props.name} />
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
LobbyForAudience.displayName = 'LobbyForAudience'
