// @flow
import DownArrow from './svg/DownArrow'
import React from 'react'

export type StateProps = {
  +hide: boolean
}
export type DispatchProps = {
  +handleClick: boolean => void => void
}
export type OwnProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function HideButton(props: Props) {
  return (
    <div className="hide-button">
      <button className={`hide-button--button ${props.hide ? 'hide' : ''}`} onClick={props.handleClick(!props.hide)}>
        <DownArrow />
      </button>
    </div>
  )
}
