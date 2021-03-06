import * as React from 'react'
import {AsideContent} from '../atoms/AsideContent'
import {Header} from '../atoms/Header'
import {MainContent} from '../atoms/MainContent'
import {MenuContainer} from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import {SettingsBox} from '../organisms/SettingsBox'
import {lobby} from '../../types'

export interface StateProps {
  readonly initialValue: {
    readonly language: lobby.Language
    readonly userEmail: string
    readonly userName: string
  }
  readonly menuItems: MenuItem[]
  readonly navigatable: boolean
}
export interface DispatchProps {
  readonly handleChangeLanguage: (value: lobby.Language) => void
  readonly handleChangeUserEmail: (value: string) => void
  readonly handleChangeUserName: (value: string) => void
  readonly handleChangeUserPassword: (value: string) => void
  readonly handleSubmitLogout: () => void
}
export type Props = StateProps & DispatchProps

export const Settings: React.FC<Props> = props => (
  <div className="lo--grid">
    <Header id="Header.settings" />
    <MainContent>
      <SettingsBox
        handleChangeLanguage={props.handleChangeLanguage}
        handleChangeUserEmail={props.handleChangeUserEmail}
        handleChangeUserName={props.handleChangeUserName}
        handleChangeUserPassword={props.handleChangeUserPassword}
        handleSubmitLogout={props.handleSubmitLogout}
        initialValue={props.initialValue}
        navigatable={props.navigatable}
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
Settings.displayName = 'Settings'
