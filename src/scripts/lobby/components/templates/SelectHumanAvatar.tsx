import * as React from 'react'
import Menu, {MenuItemProps as MenuItem} from '../organisms/Menu'
import AsideContent from '../atoms/AsideContent'
import Header from '../atoms/Header'
import MainContent from '../atoms/MainContent'
import {Target} from '../../constants/ActionTypes'
import {lobby} from '../../types'

export interface StateProps {
}
export interface DispatchProps {
}
export interface Props extends StateProps, DispatchProps {}

export default function SelectHumanAvatar(props: Props) {
  return (
    <div className="lo--grid">
      <Header id="Header.selectHumanAvatar" />
      <MainContent>
      </MainContent>
      <AsideContent>
      </AsideContent>
    </div>
  )
}
