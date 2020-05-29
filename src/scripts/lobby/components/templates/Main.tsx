import * as React from 'react'
import Menu from '../../containers/MenuContainer'
import {MenuItemProps as MenuItem} from '../organisms/Menu'

export interface StateProps {
  readonly menuItems: MenuItem[]
}
export type Props = StateProps

export const Main: React.FC<Props> = props => (
  <Menu
    className="lo--menu"
    itemClassName="lo--menu--item"
    items={props.menuItems}
  />
)
Main.displayName = 'Main'
