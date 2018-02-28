import React from 'react'

export default function Role(props) {
  return (
    <div id="role" className="role">
      <div id="player" className="role--icon">
        <img src={props.imageUrl} />
        <span>{props.agent}</span>
      </div>
      <div className="role--text">
        あなたは<span id="role-name">{props.role}</span>です
      </div>
    </div>
  )
}
