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
        <div className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`} data-result={props.type}>
          <img src={props.image} />
        </div>
      )
    case cellType.roleImage:
      return (
        <div className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`} data-result={props.type} data-tooltip={props.tooltip}>
          <img src={props.image} />
        </div>
      )
    default:
      return (
        <div className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`} data-result={props.type}>
          {props.text}
        </div>
      )
  }
}
