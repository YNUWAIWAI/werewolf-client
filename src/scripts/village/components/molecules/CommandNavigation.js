// @flow
import CommandNavigationButton from '../atoms/CommandNavigationButton'
import type {NavigationType} from 'village'
import React from 'react'

export type DispatchProps = {
  handleClick: NavigationType => void => void
}
export type OwnProps = {
  items: {
    +text: string,
    +type: NavigationType
  }[]
}
type Props =
  & DispatchProps
  & OwnProps

export default function CommandNavigation(props: Props) {
  const items = props.items.map(item =>
    <CommandNavigationButton
      handleClick={props.handleClick(item.type)}
      key={item.text}
      text={item.text}
    />
  )

  return (
    <div className="command--navigation">
      {items}
    </div>
  )
}
