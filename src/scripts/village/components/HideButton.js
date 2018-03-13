// @flow
import React from 'react'

type Props = {
  handleClick: (hide: boolean) => void,
  hide: boolean
}

export default function HideButton(props: Props) {
  const handleClick = () => {
    props.handleClick(props.hide)
  }

  return (
    <button className={`hide-button ${props.hide ? 'hide' : ''}`} onClick={handleClick} type="button">
      <span className={`hide-button--icon ${props.hide ? 'hide' : ''}`} />
    </button>
  )
}
