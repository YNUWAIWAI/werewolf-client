import * as React from 'react'

export interface Props {
  readonly additionalClass?: string
  readonly className: string
  readonly image: string
  readonly name: string
  readonly numberOfAgents?: number
}

export default function RoleIcon(props: Props) {
  return (
    <div
      className={`${props.className} ${props.additionalClass || ''}`}
    >
      <img
        className={`${props.className}--image`}
        src={props.image}
      />
      {
        typeof props.numberOfAgents === 'number' ?
          <div className={`${props.className}--times`}>
            {'×'}
          </div> :
          null
      }
      {
        typeof props.numberOfAgents === 'number' ?
          <div className={`${props.className}--number`}>
            {props.numberOfAgents}
          </div> :
          null
      }
      <div className={`${props.className}--name`}>
        {props.name}
      </div>
    </div>
  )
}
