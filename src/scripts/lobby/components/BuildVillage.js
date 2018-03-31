// @flow
import Menu, {type Props as MenuProps} from './Menu'
import AsideContent from './AsideContent'
import EditableVillageItem from './EditableVillageItem'
import Header from './Header'
import MainContent from './MainContent'
import React from 'react'

type Props = {
  handleChange: string => void => void,
  menuItems: $PropertyType<MenuProps, 'items'>,
  transition: string => void => void,
  village: {
    comment: string,
    hostName: string,
    numberOfHumans: number,
    numberOfPlayers: number,
    numberOfRobots: number,
    villageName: string
  }
}

export default function BuildVillage(props: Props) {
  return (
    <div className="grid">
      <Header text="Build village" />
      <MainContent>
        <EditableVillageItem
          {... props.village}
          handleChange={props.handleChange}
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
