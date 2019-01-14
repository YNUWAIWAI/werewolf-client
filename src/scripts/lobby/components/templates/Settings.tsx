import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import SettingsBox from '../organisms/SettingsBox'

export interface StateProps {
  readonly initialValue: {
    readonly language: lobby.Language
    readonly userEmail: string
    readonly userName: string
  },
  readonly menuItems: lobby.MenuItem[]
}
export interface DispatchProps {
  readonly handleChangeLanguage: (value: lobby.Language) => void
  readonly handleChangeUserEmail: (value: string) => void
  readonly handleChangeUserName: (value: string) => void
  readonly handleChangeUserPassword: (value: string) => void
}
export interface OwnProps {
  readonly transition: (target: lobby.Target) => void
}
export interface Props extends StateProps, DispatchProps, OwnProps {}

export default function Setting(props: Props) {
  return (
    <div className="grid">
      <Header id="Header.settings" />
      <MainContent>
        <SettingsBox
          handleChangeLanguage={props.handleChangeLanguage}
          handleChangeUserEmail={props.handleChangeUserEmail}
          handleChangeUserName={props.handleChangeUserName}
          handleChangeUserPassword={props.handleChangeUserPassword}
          initialValue={props.initialValue}
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
