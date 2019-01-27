/* global village */
import * as React from 'react'
import ResultCell, {ResultCellType} from '../molecules/ResultCell'
import ResultClose from '../atoms/ResultClose'

export interface StateProps {
  readonly agents: {
    [agentId in village.AgentId]: {
      readonly agentName: string
      readonly agentImage: string
      readonly agentId: number
      readonly avatarImage: string
      readonly avatarName: string
      readonly result: village.Result
      readonly roleImage: string
      readonly roleName: string
      readonly status: village.AgentStatus
    }
  }
  readonly losers: string[]
  readonly me: string | null
  readonly summary: {
    readonly description: {
      loser: string
      summary: string
      winner: string
    }
    readonly loserTeam: Set<village.Team>
    readonly myTeam: village.Team | ''
    readonly winnerTeam: village.Team
  }
  readonly visible: boolean
  readonly winners: string[]
}
export interface DispatchProps {
  readonly handleClickCloseButton: () => void
}
export interface Props extends StateProps, DispatchProps {}

const getRow = (agent: Props['agents'][village.AgentId]) => [
  <ResultCell
    image={agent.agentImage}
    key={`${agent.agentId}image`}
    status={agent.status}
    type={ResultCellType.image}
  />,
  <ResultCell
    key={`${agent.agentId}name`}
    status={agent.status}
    text={agent.agentName}
    type={ResultCellType.name}
  />,
  <ResultCell
    key={`${agent.agentId}status`}
    status={agent.status}
    type={ResultCellType.status}
  />,
  <ResultCell
    image={agent.roleImage}
    key={`${agent.agentId}roleImage`}
    name={agent.roleName}
    status={agent.status}
    type={ResultCellType.roleImage}
  />,
  <ResultCell
    image={agent.avatarImage}
    key={`${agent.agentId}avatarImage`}
    status={agent.status}
    type={ResultCellType.avatarImage}
  />,
  <ResultCell
    key={`${agent.agentId}avatarName`}
    status={agent.status}
    text={agent.avatarName}
    type={ResultCellType.avatarName}
  />
]

export default function Result(props: Props) {
  if (!props.visible) {
    return null
  }
  const me = (() => {
    if (typeof props.me === 'undefined' || props.me === null) {
      return []
    }

    return getRow(props.agents[props.me])
  })()
  const compareAgentName = (a: village.AgentId, b: village.AgentId) => {
    const agents = props.agents

    if (agents[a].agentName < agents[b].agentName) {
      return -1
    }
    if (agents[a].agentName > agents[b].agentName) {
      return 1
    }

    return 0
  }
  const compareStatus = (a: village.AgentId, b: village.AgentId) => {
    const agents = props.agents

    if (agents[a].status === village.AgentStatus.alive && agents[b].status === village.AgentStatus.alive) {
      return 0
    }
    if (agents[a].status !== village.AgentStatus.alive && agents[b].status === village.AgentStatus.alive) {
      return 1
    }
    if (agents[a].status === village.AgentStatus.alive && agents[b].status !== village.AgentStatus.alive) {
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
            id={props.summary.description.summary}
            key={ResultCellType.summary}
            myTeam={props.summary.myTeam}
            type={ResultCellType.summary}
            winnerTeam={props.summary.winnerTeam}
          />,
          me,
          <ResultCell
            id={props.summary.description.winner}
            key="caption winners"
            type={ResultCellType.caption}
            winnerTeam={props.summary.winnerTeam}
          />,
          ... winners,
          <ResultCell
            id={props.summary.description.loser}
            key="caption losers"
            loserTeam={props.summary.loserTeam}
            type={ResultCellType.caption}
          />,
          ... losers
        ]
      }
    </div>
  )
}
