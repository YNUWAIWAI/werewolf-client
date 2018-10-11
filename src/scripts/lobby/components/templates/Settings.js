// @flow
import type {Language, MenuItem, Target} from 'lobby'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import React from 'react'
import SettingsBox from '../organisms/SettingsBox'

export type StateProps = {
  +initialValue: {
    +language: Language,
    +userEmail: string,
    +userName: string
  },
  +menuItems: MenuItem[]
}
export type DispatchProps = {
  +handleChangeLanguage: Language => void,
  +handleChangeUserEmail: string => void,
  +handleChangeUserName: string => void,
  +handleChangeUserPassword: string => void
}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function Setting(props: Props) {
  return (
    <div className="grid">
      <Header text="Settings" />
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
