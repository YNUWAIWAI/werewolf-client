import * as React from 'react'
import {CSSTransition} from 'react-transition-group'
import ResultCellAvatarImage from '../atoms/ResultCellAvatarImage'
import ResultCellAvatarName from '../atoms/ResultCellAvatarName'
import ResultCellImage from '../atoms/ResultCellImage'
import ResultCellLoserCaption from '../atoms/ResultCellLoserCaption'
import ResultCellName from '../atoms/ResultCellName'
import ResultCellRoleImage from '../atoms/ResultCellRoleImage'
import ResultCellStatus from '../atoms/ResultCellStatus'
import ResultCellSummary from '../atoms/ResultCellSummary'
import ResultCellWinnerCaption from '../atoms/ResultCellWinnerCaption'
import ResultClose from '../atoms/ResultClose'
import {village} from '../../types'

export interface StateProps {
  readonly agents: {
    [agentId in village.AgentId]: {
      readonly agentName: string
      readonly agentImage: string
      readonly agentInitial: string
      readonly agentId: village.AgentId
      readonly avatarImage: string
      readonly avatarName: string
      readonly result: village.Result
      readonly roleImage: string
      readonly roleName: string
      readonly status: village.CharacterStatus
    }
  }
  readonly losers: string[]
  readonly me: string | null
  readonly summary: {
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
  <ResultCellImage
    image={agent.agentImage}
    initial={agent.agentInitial}
    key={`${agent.agentId}image`}
    status={agent.status}
  />,
  <ResultCellName
    key={`${agent.agentId}name`}
    status={agent.status}
    text={agent.agentName}
  />,
  <ResultCellStatus
    key={`${agent.agentId}status`}
    status={agent.status}
  />,
  <ResultCellRoleImage
    image={agent.roleImage}
    key={`${agent.agentId}roleImage`}
    name={agent.roleName}
    status={agent.status}
  />,
  <ResultCellAvatarImage
    image={agent.avatarImage}
    key={`${agent.agentId}avatarImage`}
    status={agent.status}
  />,
  <ResultCellAvatarName
    key={`${agent.agentId}avatarName`}
    status={agent.status}
    text={agent.avatarName}
  />
]

export default function Result(props: Props) {
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

    if (agents[a].status === village.CharacterStatus.alive && agents[b].status === village.CharacterStatus.alive) {
      return 0
    }
    if (agents[a].status !== village.CharacterStatus.alive && agents[b].status === village.CharacterStatus.alive) {
      return 1
    }
    if (agents[a].status === village.CharacterStatus.alive && agents[b].status !== village.CharacterStatus.alive) {
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
    <CSSTransition
      classNames="vi--result--transition"
      in={props.visible}
      timeout={{
        enter: 500,
        exit: 300
      }}
      unmountOnExit
    >
      <div className="vi--result">
        {
          [
            <ResultClose handleClick={props.handleClickCloseButton} key="close" />,
            <ResultCellSummary
              key="summary"
              myTeam={props.summary.myTeam}
              winnerTeam={props.summary.winnerTeam}
            />,
            me,
            <ResultCellWinnerCaption
              key="caption winners"
              team={props.summary.winnerTeam}
            />,
            ... winners,
            <ResultCellLoserCaption
              key="caption losers"
              team={props.summary.loserTeam}
            />,
            ... losers
          ]
        }
      </div>
    </CSSTransition>
  )
}
