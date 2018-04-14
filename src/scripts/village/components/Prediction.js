// @flow
/* eslint react/no-unused-prop-types: 0 */
import type {AgentId, AgentStatus, BoardState, RoleId} from 'village'
import PredictionItem from './PredictionItem'
import PredictionPlayer from './PredictionPlayer'
import PredictionRole from './PredictionRole'
import React from 'react'

export type StateProps = {
  +playerStatus: Array<{
    +id: number,
    +image: string,
    +name: string,
    +status: AgentStatus
  }>,
  +roleStatus: Array<{
    +id: RoleId,
    +image: string,
    +numberOfAgents: number,
    +tooltip: string
  }>,
  +table: {
    [agentId: AgentId]: {
      [roleId: RoleId]: {
        date: number,
        state: BoardState
      }
    }
  }
}
export type DispatchProps = {
  handleBoardClick: (number, RoleId) => BoardState => void
}
export type OwnProps = {}
export type Props =
  & StateProps
  & DispatchProps
  & OwnProps

export default function Prediction(props: Props) {
  const predictionTable = [
    <div key="null" />,
    ... props.roleStatus.map(role =>
      <PredictionRole
        image={role.image}
        key={role.id}
        numberOfAgents={role.numberOfAgents}
        tooltip={role.tooltip}
      />
    ),
    ... props.playerStatus.map(player =>
      [
        <PredictionPlayer
          image={player.image}
          key={player.id}
          name={player.name}
          status={player.status}
        />,
        ... props.roleStatus.map(role =>
          <PredictionItem
            date={props.table[String(player.id)][role.id].date}
            handleBoardClick={props.handleBoardClick(player.id, role.id)}
            key={player.id + role.id}
            state={props.table[String(player.id)][role.id].state}
          />
        )
      ]
    )
  ]
  const style = {
    grid: `repeat(${1 + props.playerStatus.length}, 1fr) / repeat(${1 + props.roleStatus.length}, 1fr)`
  }

  return (
    <div className="prediction" style={style}>
      {predictionTable}
    </div>
  )
}
