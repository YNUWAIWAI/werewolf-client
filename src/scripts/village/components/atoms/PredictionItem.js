// @flow
import type {BoardState} from 'village'
import Circle from './svg/Circle'
import Cross from './svg/Cross'
import Question from './svg/Question'
import React from 'react'
import Triangle from './svg/Triangle'

type Props = {
  +date: number,
  +fixed: boolean,
  +handleBoardClick: BoardState => void,
  +state: BoardState
}

export default function PredictionItem(props: Props) {
  const handleBoardClick = () => {
    const state: BoardState[] = ['?', 'Δ', 'O', 'X']
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
      case '?':
        return <Question />
      case 'Δ':
        return <Triangle />
      case 'O':
        return <Circle />
      case 'X':
        return <Cross />
      case 'fill':
      default:
        return ''
    }
  })(props.state)

  return (
    <div
      className={`prediction--item ${props.fixed && props.state !== 'fill' ? 'fixed' : ''}`}
      data-date={props.date}
      data-state={props.state}
      onClick={handleBoardClick}
    >
      {image}
    </div>
  )
}
