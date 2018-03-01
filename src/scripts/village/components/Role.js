import React from 'react'

export default function Role(props) {
  return (
    <div className="role" id="role">
      <div className="role--icon" id="player">
        <img src={props.imageUrl} />
        <span>
          {props.agent}
        </span>
      </div>
      <div className="role--text">
        {'あなたは'}
        <span id="role-name">
          {props.role}
        </span>
        {'です'}
      </div>
    </div>
  )
}
