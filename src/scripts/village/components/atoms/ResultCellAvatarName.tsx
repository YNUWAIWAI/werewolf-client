import * as React from 'react'

interface Props {
  readonly status: village.AgentStatus
  readonly text: string
}

export default function ResultCellAvatarName(props: Props) {
  return (
    <div className={`vi--result--cell--avatarName ${props.status === 'alive' ? '' : 'dead'}`}>
      {props.text}
    </div>
  )
}
