// @flow
import type {AgentStatus, Result as TResult} from 'village'
import React from 'react'
import ResultCell from '../atoms/ResultCell'
import ResultClose from '../atoms/ResultClose'

export type StateProps = {
  +agents: {
    [string]: {
      +agentName: string,
      +agentImage: string,
      +agentId: number,
      +avatarImage: string,
      +avatarName: string,
      +result: TResult,
      +roleImage: string,
      +roleName: string,
      +status: AgentStatus
    }
  },
  +losers: string[],
  +me: ?string,
  +summary: {
    +description: string,
    +loser: string,
    +winner: string
  },
  +visible: boolean,
  +winners: string[]
}
export type DispatchProps = {
  +handleClickCloseButton: void => void
}
export type OwnProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

const getRow = agent => [
  <ResultCell
    image={agent.agentImage}
    key={`${agent.agentId}image`}
    status={agent.status}
    type="image"
  />,
  <ResultCell
    key={`${agent.agentId}name`}
    status={agent.status}
    text={agent.agentName}
    type="name"
  />,
  <ResultCell
    key={`${agent.agentId}status`}
    status={agent.status}
    text={agent.status === 'alive' ? '生存' : '死亡'}
    type="status"
  />,
  <ResultCell
    caption={agent.roleName}
    image={agent.roleImage}
    key={`${agent.agentId}roleImage`}
    status={agent.status}
    type="roleImage"
  />,
  <ResultCell
    image={agent.avatarImage}
    key={`${agent.agentId}avatarImage`}
    status={agent.status}
    type="avatarImage"
  />,
  <ResultCell
    key={`${agent.agentId}avatarName`}
    status={agent.status}
    text={agent.avatarName}
    type="avatarName"
  />
]

export default function Result(props: Props) {
  if (!props.visible) {
    return ''
  }
  const me = (() => {
    if (props.me === undefined || props.me === null) {
      return []
    }

    return getRow(props.agents[props.me])
  })()
  const compareAgentName = (a, b) => {
    const agents = props.agents

    if (agents[a].agentName < agents[b].agentName) {
      return -1
    }
    if (agents[a].agentName > agents[b].agentName) {
      return 1
    }

    return 0
  }
  const compareStatus = (a, b) => {
    const agents = props.agents

    if (agents[a].status === 'alive' && agents[b].status === 'alive') {
      return 0
    }
    if (agents[a].status !== 'alive' && agents[b].status === 'alive') {
      return 1
    }
    if (agents[a].status === 'alive' && agents[b].status !== 'alive') {
      return -1
    }

    return 0
  }
  const losers = props.losers
    .sort(compareAgentName)
    .sort(compareStatus)
    .map(id => getRow(props.agents[id]))

  const winners = [... props.winners]
    .sort(compareAgentName)
    .sort(compareStatus)
    .map(id => getRow(props.agents[id]))

  return (
    <div className="result">
      {
        [
          <ResultClose handleClick={props.handleClickCloseButton} key="close" />,
          <ResultCell
            id={props.summary.description}
            key="summary"
            type="summary"
          />,
          me,
          <ResultCell
            id={props.summary.winner}
            key="caption winners"
            type="caption"
          />,
          ... winners,
          <ResultCell
            id={props.summary.loser}
            key="caption losers"
            type="caption"
          />,
          ... losers
        ]
      }
    </div>
  )
}
