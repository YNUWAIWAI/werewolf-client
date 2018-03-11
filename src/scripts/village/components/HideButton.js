// @flow
import React from 'react'

type Props = {
  handleClick: (isHide: boolean) => void,
  isHide: boolean
}

export default function HideButton(props: Props) {
  const handleClick = () => {
    props.handleClick(props.isHide)
  }

  return (
    <button className={`hide-button ${props.isHide ? 'hide' : ''}`} onClick={handleClick} type="button">
      <span className={`hide-button--icon ${props.isHide ? 'hide' : ''}`} />
    </button>
  )
}
