import React from 'react'

export default function HideButton(props) {
  const handleClick = event => {
    props.handleClick(props.isHide)
  }

  return (
    <button className={`hide--button ${props.isHide ? 'hide' : ''}`} id="hide-button" onClick={handleClick} type="button">
      <span className={`hide--button--icon ${props.isHide ? 'hide' : ''}`} id="hide-button-icon" />
    </button>
  )
}
