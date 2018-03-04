import AsideContent from './AsideContent'
import Header from './Header'
import MainContent from './MainContent'
import Menu from './Menu'
import React from 'react'
import VillageList from './VillageList'

export default function History(props) {
  return (
    <div className="grid">
      <Header text="History" />
      <MainContent>
        <VillageList items={props.villageItems} selectVillage={props.selectVillage} transition={props.transition} />
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
