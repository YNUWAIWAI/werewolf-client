import React from 'react'

export default function PredictionItem(props) {
  const handleBoardClick = event => {
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
    <div data-role={props.roleId} data-player={props.playerId} data-state={props.state} data-date={props.date} onClick={handleBoardClick}></div>
  )
}
