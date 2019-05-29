import * as React from 'react'
import Question from './svg/Question'

export interface Props {
  readonly additionalClass?: string
  readonly class: string
  readonly image: string
  readonly name: string
  readonly numberOfAgents?: number
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
          null
      }
      {
        typeof props.numberOfAgents === 'number' ?
          <div className={`${props.class}--number`}>
            {props.numberOfAgents}
          </div> :
          null
      }
      <div className={`${props.class}--name`}>
        {props.name}
      </div>
    </div>
  )
}
