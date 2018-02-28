import React from 'react'

const cellType = {
  image: 'image',
  name: 'name',
  result: 'result',
  roleImage: 'roleImage',
  status: 'status',
  summary: 'summary',
  userAvatar: 'userAvatar',
  userName: 'userName'
}

export default function ResultCell(props) {
  switch (props.type) {
    case cellType.image:
    case cellType.userAvatar:
      return (
        <div data-result={props.type} className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`}>
          <img src={props.image} />
        </div>
      )
    case cellType.roleImage:
      return (
        <div data-result={props.type} data-tooltip={props.tooltip} className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`}>
          <img src={props.image} />
        </div>
      )
    default:
      return (
        <div data-result={props.type} className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`}>{props.text}</div>
      )
  }
}
