import React from 'react'
import Timer from './Timer'

export default function Modal(props) {
  if (!props.isVisible) {
    return ''
  }

  const handleClick = event => {
    if (event.target.value === 'no') {
      props.handleClickNo()
    } else {
      props.handleClickYes(props.agent)
    }
  }

  return (
    <div className="modal" id="modal">
      <div className="modal--icon">
        <img id="modal-icon-image" src={props.image} />
        <span id="modal-icon-name">
          {props.name}
        </span>
      </div>
      <div className="modal--description">
        <span id="modal-text">
          {props.text}
        </span>
        {'（'}
        <Timer id="modal-time" />
        {'）'}
      </div>
      <div className="modal--button--container">
        <button className="modal--button" id="yes" onClick={handleClick} value="yes">
          {'はい'}
        </button>
        <button className="modal--button" id="no" onClick={handleClick} value="no">
          {'いいえ'}
        </button>
      </div>
    </div>
  )
}
