// @flow
import type {AgentId, AgentStatus, BoardState, RoleId} from 'village'
import PredictionItem from '../atoms/PredictionItem'
import PredictionPlayer from '../atoms/PredictionPlayer'
import PredictionRole from '../atoms/PredictionRole'
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
    +caption: string
  }>,
  +table: {
    [agentId: AgentId]: {
      [roleId: RoleId]: {
        +date: number,
        +fixed: boolean,
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
        caption={role.caption}
        image={role.image}
        key={role.id}
        numberOfAgents={role.numberOfAgents}
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
            fixed={props.table[String(player.id)][role.id].fixed}
            handleBoardClick={props.handleBoardClick(player.id, role.id)}
            key={player.id + role.id}
            state={props.table[String(player.id)][role.id].state}
          />
        )
      ]
    )
  ]
  const style = (() => {
    if (props.playerStatus.length === 0 && props.roleStatus.length === 0) {
      return {
        display: 'none'
      }
    }

    return {
      grid: `repeat(${1 + props.playerStatus.length}, minmax(72px, min-content)) / repeat(${1 + props.roleStatus.length}, minmax(72px, min-content))`
    }
  })()

  return (
    <div className="prediction" style={style}>
      {predictionTable}
    </div>
  )
}
