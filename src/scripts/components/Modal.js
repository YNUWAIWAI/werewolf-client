import React from 'react'
import ReactDOM from 'react-dom'

export default function Modal(props) {
  return (
    <div id="modal" class="modal hidden">
      <div class="modal--icon">
        <img id="modal-icon-image" src="" />
        <span id="modal-icon-name"></span>
      </div>
      <div class="modal--description"><span id="modal-text">投票先はこちらでいいですか？</span>（<span id="modal-time"></span>）</div>
      <div class="modal--button--container">
        <button id="yes" class="modal--button" value="yes">はい</button>
        <button id="no" class="modal--button" value="no">いいえ</button>
      </div>
    </div>
  )
}
