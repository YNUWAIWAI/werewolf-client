import * as React from 'react'
import DownArrow from './svg/DownArrow'

export interface StateProps {
  readonly hide: boolean
  readonly navigatable: boolean
}
export interface DispatchProps {
  readonly handleClick: (valid: boolean) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function HideButton(props: Props) {
  return (
    <div className="vi--hide-button">
      <button
        className={`vi--hide-button--button ${props.hide ? 'hide' : ''}`}
        onClick={() => props.handleClick(!props.hide)}
        tabIndex={props.navigatable ? 0 : -1}
      >
        <DownArrow />
      </button>
    </div>
  )
}
