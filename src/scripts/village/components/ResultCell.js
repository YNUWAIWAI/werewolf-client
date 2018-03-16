// @flow
import React from 'react'

type Props =
  | {
    image: string,
    result: Result,
    status: AgentStatus,
    type: 'image' | 'userAvatar'
  }
  | {
    image: string,
    result: Result,
    status: AgentStatus,
    tooltip: string,
    type: 'roleImage'
  }
  | {
    text: string,
    type: 'summary'
  }
  | {
    result: Result,
    status: AgentStatus,
    text: string,
    type: 'name' | 'result' | 'status' | 'userName'
  }

export default function ResultCell(props: Props) {
  switch (props.type) {
    case 'image':
    case 'userAvatar':
      return (
        <div className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`} data-result={props.type}>
          <img src={props.image} />
        </div>
      )
    case 'roleImage':
      return (
        <div className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`} data-result={props.type} data-tooltip={props.tooltip}>
          <img src={props.image} />
        </div>
      )
    case 'summary':
      return (
        <div className="result--cell" data-result={props.type}>
          {props.text}
        </div>
      )
    case 'name':
    case 'result':
    case 'status':
    case 'userName':
      return (
        <div className={`result--cell ${props.status === 'alive' ? '' : 'dead'} ${props.result === 'win' ? 'win' : ''}`} data-result={props.type}>
          {props.text}
        </div>
      )
    default:
      throw Error(`props.type: ${props.type} is unexpectted value.`)
  }
}
