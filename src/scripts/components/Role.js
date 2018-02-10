import React from 'react'
import ReactDOM from 'react-dom'

export default function Role(props) {
  return (
    <div id="role" class="role">
      <div id="player" class="role--icon"></div>
      <div class="role--text">
        あなたは<span id='role-name'></span>です
      </div>
    </div>
  )
}
