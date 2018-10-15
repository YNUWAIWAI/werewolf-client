// @flow
import type {MenuItem, Target, Village} from 'lobby'
import AsideContent from '../atoms/AsideContent'
import Avatar from '../atoms/Avatar'
import Header from '../atoms/Header'
import IdSearchBox from '../organisms/IdSearchBox'
import MainContent from '../atoms/MainContent'
import Menu from '../organisms/Menu'
import React from 'react'
import VillageList from '../organisms/VillageList'

export type StateProps = {
  +header: string,
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +villageItems: Village[]
}
export type DispatchProps = {
  +handleSearchIdChange: number => void,
  +handleValidityChange: boolean => void,
  +selectVillage: number => void => void
}
export type OwnProps = {
  +transition: Target => void
}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

const numberOfDigit = 3
const placeholder = `${numberOfDigit} digits`

export default function IdSearch(props: Props) {
  return (
    <div className="grid">
      <Header id={props.header} />
      <Avatar image={props.image} name={props.name} />
      <MainContent>
        <IdSearchBox
          handleSearchIdChange={props.handleSearchIdChange}
          handleValidityChange={props.handleValidityChange}
          numberOfDigit={numberOfDigit}
          placeholder={placeholder}
        />
        {
          props.villageItems.length === 0 ?
            <div className="id-search--no-item">
              {'Not Found'}
            </div> :
            <VillageList
              isPlayer={props.isPlayer}
              items={props.villageItems}
              selectVillage={props.selectVillage}
            />
        }
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
