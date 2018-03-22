// @flow
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
    +[agentId: number]: {
      +[roleId: RoleId]: {
        +date: number,
        +state: BoardState
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
    ... props.playerStatus.map(player => [
      <PredictionPlayer key={player.id} {... player} />,
      ... props.roleStatus.map(role =>
        <PredictionItem
          key={player.id + role.id}
          {... props.table[player.id][role.id]}
          handleBoardClick={props.handleBoardClick(player.id, role.id)}
        />
      )
    ])
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
