// @flow
import React from 'react'

type Props = {
  date: number,
  handleBoardClick: BoardState => void,
  state: BoardState
}

export default function PredictionItem(props: Props) {
  const handleBoardClick = () => {
    const state = [ '?', 'Δ', 'O', 'X' ]
    const currentState = props.state

    if (!state.includes(currentState)) {
      return
    }
    const nextIndex = (state.indexOf(currentState) + 1) % state.length
    const nextState = state[nextIndex]

    props.handleBoardClick(nextState)
  }

  return (
    <div
      data-date={props.date}
      data-state={props.state}
      onClick={handleBoardClick}
    />
  )
}
