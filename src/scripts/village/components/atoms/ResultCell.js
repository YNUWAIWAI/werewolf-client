// @flow
import type {AgentStatus} from 'village'
import React from 'react'

type Props =
  | {
    +image: string,
    +status: AgentStatus,
    +type: 'image' | 'userAvatar'
  }
  | {
    +caption: string,
    +image: string,
    +status: AgentStatus,
    +type: 'roleImage'
  }
  | {
    +text: string,
    +type: 'caption' | 'summary'
  }
  | {
    +status: AgentStatus,
    +text: string,
    +type: 'name' | 'status' | 'userName'
  }

export default function ResultCell(props: Props) {
  switch (props.type) {
    case 'image':
    case 'userAvatar':
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          <img src={props.image} />
        </div>
      )
    case 'roleImage':
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          <img src={props.image} />
          <span className={`result--cell--${props.type}--caption`}>
            {props.caption}
          </span>
        </div>
      )
    case 'caption':
    case 'summary':
      return (
        <div className={`result--cell result--cell--${props.type}`}>
          {props.text}
        </div>
      )
    case 'name':
    case 'status':
    case 'userName':
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          {props.text}
        </div>
      )
    default:
      throw Error(`props.type: ${props.type} is unexpectted value.`)
  }
}
