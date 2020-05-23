import * as React from 'react'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'
import VillageItem from '../molecules/VillageItem'
import {lobby} from '../../types'

interface Props {
  readonly isPlayer: boolean
  readonly items: lobby.Village[]
  readonly selectVillage?: (id: number) => () => void
}

export default function VillageList(props: Props) {
  const items = props.items.map(item => (
    <CSSTransition
      appear
      classNames="lo--village--item--transition"
      key={item.id}
      timeout={{
        enter: 500,
        exit: 300
      }}
      unmountOnExit
    >
      <VillageItem
        avatar={item.avatar}
        comment={item.comment}
        handleClick={typeof props.selectVillage === 'function' ? props.selectVillage(item.id) : undefined}
        hostPlayer={item.hostPlayer}
        id={item.id}
        idForSearching={item.idForSearching}
        isPlayer={props.isPlayer}
        name={item.name}
        playerSetting={item.playerSetting}
        roleSetting={item.roleSetting}
      />
    </CSSTransition>
  ))

  return (
    <TransitionGroup className="lo--village">
      {items}
    </TransitionGroup>
  )
}
