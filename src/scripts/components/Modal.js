import React from 'react'

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
    <div id="modal" className="modal">
      <div className="modal--icon">
        <img id="modal-icon-image" src={props.image} />
        <span id="modal-icon-name">{props.name}</span>
      </div>
      <div className="modal--description"><span id="modal-text">{props.text}</span>（<Timer id="modal-time" />）</div>
      <div className="modal--button--container">
        <button id="yes" className="modal--button" value="yes" onClick={handleClick}>はい</button>
        <button id="no" className="modal--button" value="no" onClick={handleClick}>いいえ</button>
      </div>
    </div>
  )
}
