// @flow
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
    <button className={`hide-button ${props.hide ? 'hide' : ''}`} onClick={props.handleClick(!props.hide)}>
      <span className={`hide-button--icon ${props.hide ? 'hide' : ''}`} />
    </button>
  )
}
