import React from 'react'

export default function MenuItem(props) {
  return (
    <div className="player">
      {'Hi,'}
      <span>
        <img src={props.image} />
      </span>
      {props.name}
    </div>
  )
}
