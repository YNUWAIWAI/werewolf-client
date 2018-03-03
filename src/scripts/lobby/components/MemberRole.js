import React from 'react'

export default function MemberRole(props) {
  return (
    <div className="village--item--member--role--item" data-id={props.id} data-tooltip={props.name}>
      <img src={props.image} />
      {`✕${props.numberOfAgents}`}
    </div>
  )
}
