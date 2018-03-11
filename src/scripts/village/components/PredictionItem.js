// @flow
import React from 'react'

type Props = {
  date: number,
  handleBoardClick: (nextState: BoardState, playerId: number, roleId: RoleId) => void,
  playerId: number,
  roleId: RoleId,
  state: BoardState
}

export default function PredictionItem(props: Props) {
  const handleBoardClick = () => {
    const state = [ '?', 'Δ', 'O', 'X' ]
    const currentState = props.state
    const playerId = props.playerId
    const roleId = props.roleId

    if (!state.includes(currentState)) {
      return
    }
    const nextIndex = (state.indexOf(currentState) + 1) % state.length
    const nextState = state[nextIndex]

    props.handleBoardClick(nextState, playerId, roleId)
  }

  return (
    <div
      data-date={props.date}
      data-player={props.playerId}
      data-role={props.roleId}
      data-state={props.state}
      onClick={handleBoardClick}
    />
  )
}
