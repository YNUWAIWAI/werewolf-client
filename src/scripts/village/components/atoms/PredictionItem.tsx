/* global village */
import * as React from 'react'
import Circle from './svg/Circle'
import Cross from './svg/Cross'
import Question from './svg/Question'
import Triangle from './svg/Triangle'

interface Props {
  readonly date: number
  readonly fixed: boolean
  readonly handleBoardClick: (state: village.BoardState) => void
  readonly state: village.BoardState
}

export default function PredictionItem(props: Props) {
  const handleBoardClick = () => {
    const state = [village.BoardState.QUESTION, village.BoardState.TRIANGLE, village.BoardState.CIRCLE, village.BoardState.CROSS]
    const currentState = props.state

    if (!state.includes(currentState) || props.fixed) {
      return
    }
    const nextIndex = (state.indexOf(currentState) + 1) % state.length
    const nextState = state[nextIndex]

    props.handleBoardClick(nextState)
  }

  const image = (state => {
    switch (state) {
      case village.BoardState.QUESTION:
        return <Question />
      case village.BoardState.TRIANGLE:
        return <Triangle />
      case village.BoardState.CIRCLE:
        return <Circle />
      case village.BoardState.CROSS:
        return <Cross />
      case village.BoardState.FILL:
      default:
        return ''
    }
  })(props.state)

  return (
    <div
      className={`prediction--item ${props.fixed && props.state !== village.BoardState.FILL ? 'fixed' : ''}`}
      data-date={props.date}
      data-state={props.state}
      onClick={handleBoardClick}
    >
      {image}
    </div>
  )
}
