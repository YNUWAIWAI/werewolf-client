import * as React from 'react'
import PredictionItem from '../atoms/PredictionItem'
import PredictionPlayer from '../atoms/PredictionPlayer'
import PredictionRole from '../atoms/PredictionRole'
import PredictionSpec from '../atoms/PredictionSpec'
import {just} from '../../util'

export interface StateProps {
  readonly playerStatus: {
    readonly id: number
    readonly image: string
    readonly name: string
    readonly status: village.AgentStatus
  }[]
  readonly roleStatus: {
    readonly id: village.RoleId
    readonly image: string
    readonly name: string
    readonly numberOfAgents: number
  }[]
  readonly spec: {
    role: village.RoleId
    visible: boolean
  }
  readonly table: {
    readonly [agentId in village.AgentId]: Partial<{
      readonly [roleId in village.RoleId]: {
        readonly date: number
        readonly fixed: boolean
        readonly state: village.BoardState
      }
    }>
  }
}
export interface DispatchProps {
  handleMouseEnter: (role: village.RoleId) => () => void
  handleMouseLeave: () => void
  handleBoardClick: (playerId: number, role: village.RoleId) => (state: village.BoardState) => void
}
export interface Props extends StateProps, DispatchProps {}

export default function Prediction(props: Props) {
  if (props.playerStatus.length === 0 || props.roleStatus.length === 0) {
    return null
  }
  const predictionTable = [
    <div
      className="vi--prediction--empty"
      key="empty"
    />,
    ... props.roleStatus.map(role => (
      <PredictionRole
        handleMouseEnter={props.handleMouseEnter(role.id)}
        handleMouseLeave={props.handleMouseLeave}
        image={role.image}
        key={role.id}
        name={role.name}
        numberOfAgents={role.numberOfAgents}
      />
    )),
    ... props.playerStatus.map(player => [
      <PredictionPlayer
        image={player.image}
        key={player.id}
        name={player.name}
        status={player.status}
      />,
      ... props.roleStatus.map(role => (
        <PredictionItem
          date={just(props.table[String(player.id)][role.id]).date}
          fixed={just(props.table[String(player.id)][role.id]).fixed}
          handleBoardClick={props.handleBoardClick(player.id, role.id)}
          key={player.id + role.id}
          state={just(props.table[String(player.id)][role.id]).state}
        />
      ))
    ])
  ]

  return (
    <>
      <div
        className="vi--prediction"
        style={{
          grid: `repeat(${1 + props.playerStatus.length}, minmax(72px, min-content)) / repeat(${1 + props.roleStatus.length}, minmax(72px, min-content))`
        }}
      >
        {predictionTable}
      </div>
      <PredictionSpec
        key="spec"
        role={props.spec.role}
        style={{
          grid: `minmax(72px, min-content) max-content / minmax(72px, min-content) minmax(calc(72px * ${props.roleStatus.length}), min-content)`
        }}
        visible={props.spec.visible}
      />
    </>
  )
}
