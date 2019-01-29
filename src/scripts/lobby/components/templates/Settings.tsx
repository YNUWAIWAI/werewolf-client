import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import SettingsBox from '../organisms/SettingsBox'
import {Target} from '../../constants/ActionTypes'

export interface StateProps {
  readonly initialValue: {
    readonly language: lobby.Language
    readonly userEmail: string
    readonly userName: string
  }
  readonly menuItems: MenuItem[]
}
export interface DispatchProps {
  readonly handleChangeLanguage: (value: lobby.Language) => void
  readonly handleChangeUserEmail: (value: string) => void
  readonly handleChangeUserName: (value: string) => void
  readonly handleChangeUserPassword: (value: string) => void
  readonly handleSubmitLogout: () => void
  readonly transition: (target: Target) => void
}
export interface Props extends StateProps, DispatchProps {}

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
          handleSubmitLogout={props.handleSubmitLogout}
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
