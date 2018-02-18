import React from 'react'

export default function Role(props) {
  return (
    <div id="role" class="role">
      <div id="player" class="role--icon">
        <img src={props.imageUrl} />
        <span>{props.agent}</span>
      </div>
      <div class="role--text">
        あなたは<span id="role-name">{props.role}</span>です
      </div>
    </div>
  )
}
