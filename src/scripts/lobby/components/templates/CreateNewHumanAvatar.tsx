import * as React from 'react'
import AsideContent from '../atoms/AsideContent'
import CreateNewAvatarHeader from '../molecules/CreateNewAvatarHeader'
import CreateNewHumanAvatarBody from '../molecules/CreateNewHumanAvatarBody'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'
import {lobby} from '../../types'

export interface DispatchProps {
  readonly handleChangeImage: (valid: boolean) => (value: string) => void
  readonly handleChangeLanguage: (valid: boolean) => (value: lobby.Language) => void
  readonly handleChangeName: (valid: boolean) => (value: string) => void
}
export interface StateProps {
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
  readonly image: string
  readonly language: lobby.Language
  readonly name: string
  readonly navigatable: boolean
}
export type Props = StateProps & DispatchProps

export default function CreateNewHumanAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectHumanAvatar" />
      <MainContent>
        <CreateNewAvatarHeader />
        <CreateNewHumanAvatarBody
          handleChangeImage={props.handleChangeImage}
          handleChangeLanguage={props.handleChangeLanguage}
          handleChangeName={props.handleChangeName}
          image={props.image}
          language={props.language}
          name={props.name}
          navigatable={props.navigatable}
        />
        <Menu
          className="lo--create-new-avatar--command"
          itemClassName="lo--create-new-avatar--command--item"
          items={props.command}
        />
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
