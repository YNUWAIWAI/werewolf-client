import * as React from 'react'

interface Props {
  readonly status: village.AgentStatus
  readonly text: string
}

export default function ResultCellName(props: Props) {
  return (
    <div className={`vi--result--cell--name ${props.status === 'alive' ? '' : 'dead'}`}>
      {props.text}
    </div>
  )
}
