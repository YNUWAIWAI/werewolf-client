// @flow
import type {AgentStatus, TResult} from 'village'
import React from 'react'
import ResultCell from './ResultCell'

export type StateProps = {
  +agents: {
    [string]: {
      +agentName: string,
      +agentImage: string,
      +agentId: number,
      +result: TResult,
      +roleImage: string,
      +roleName: string,
      +status: AgentStatus,
      +userAvatar: string,
      +userName: string
    }
  },
  +losers: string[],
  +me: ?string,
  +summary: string,
  +visible: boolean,
  +winners: string[]
}
export type OwnProps = {}
export type Props =
  & StateProps
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
    image={agent.roleImage}
    key={`${agent.agentId}roleImage`}
    status={agent.status}
    tooltip={agent.roleName}
    type="roleImage"
  />,
  <ResultCell
    image={agent.userAvatar}
    key={`${agent.agentId}userAvatar`}
    status={agent.status}
    type="userAvatar"
  />,
  <ResultCell
    key={`${agent.agentId}userName`}
    status={agent.status}
    text={agent.userName}
    type="userName"
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
          <ResultCell key="summary" text={props.summary} type="summary" />,
          me,
          <ResultCell key="caption winners" text="勝利者" type="caption" />,
          ... winners,
          <ResultCell key="caption losers" text="敗者" type="caption" />,
          ... losers
        ]
      }
    </div>
  )
}
