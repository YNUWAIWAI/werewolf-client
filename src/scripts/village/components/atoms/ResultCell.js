// @flow
import type {AgentStatus} from 'village'
import {FormattedMessage} from 'react-intl'
import React from 'react'

type Props =
  | {
    +image: string,
    +status: AgentStatus,
    +type: 'avatarImage' | 'image'
  }
  | {
    +caption: string,
    +image: string,
    +status: AgentStatus,
    +type: 'roleImage'
  }
  | {
    +id: string,
    +type: 'caption' | 'summary'
  }
  | {
    +status: AgentStatus,
    +text: string,
    +type: 'avatarName' | 'name'
  }
  | {
    +status: AgentStatus,
    +type: 'status'
  }

export default function ResultCell(props: Props) {
  switch (props.type) {
    case 'avatarImage':
    case 'image':
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
        <FormattedMessage
          id={props.id}
        >
          {
            (text: string) =>
              <div
                className={`result--cell result--cell--${props.type}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    case 'avatarName':
    case 'name':
      return (
        <div className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}>
          {props.text}
        </div>
      )
    case 'status':
      return (
        <FormattedMessage
          id={`Result.status(${props.status})`}
        >
          {
            (text: string) =>
              <div
                className={`result--cell result--cell--${props.type} ${props.status === 'alive' ? '' : 'dead'}`}
              >
                {text}
              </div>
          }
        </FormattedMessage>
      )
    default:
      throw Error(`props.type: ${props.type} is unexpectted value.`)
  }
}
