import * as React from 'react'
import DownArrow from './svg/DownArrow'

export interface StateProps {
  readonly hide: boolean
}
export interface DispatchProps {
  readonly handleClick: (valid: boolean) => () => void
}
export interface OwnProps {}
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
