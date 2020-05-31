import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {CreateNewAvatarHeader} from '../molecules/CreateNewAvatarHeader'
import {CreateNewHumanAvatarTableContainer} from '../../containers/CreateNewHumanAvatarTableContainer'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import {MenuContainer} from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export const CreateNewHumanAvatar: React.FC<Props> = props => (
  <div className="lo--grid">
    <Header id="Header.selectHumanAvatar" />
    <MainContent>
      <CreateNewAvatarHeader />
      <CreateNewHumanAvatarTableContainer />
      <MenuContainer
        className="lo--create-new-avatar--command"
        itemClassName="lo--create-new-avatar--command--item"
        items={props.command}
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
CreateNewHumanAvatar.displayName = 'CreateNewHumanAvatar'
