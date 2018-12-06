// @flow
import React from 'react'

export type Props = {
  +additionalClass?: string,
  +class: string,
  +image: string,
  +name: string,
  +numberOfAgents?: number
}

export default function RoleIcon(props: Props) {
  return (
    <div
      className={`${props.class} ${props.additionalClass || ''}`}
    >
      <img
        className={`${props.class}--image`}
        src={props.image}
      />
      {
        typeof props.numberOfAgents === 'number' ?
          <div className={`${props.class}--times`}>
            {'×'}
          </div> :
          ''
      }
      {
        typeof props.numberOfAgents === 'number' ?
          <div className={`${props.class}--number`}>
            {props.numberOfAgents}
          </div> :
          ''
      }
      <div className={`${props.class}--name`}>
        {props.name}
      </div>
    </div>
  )
}
