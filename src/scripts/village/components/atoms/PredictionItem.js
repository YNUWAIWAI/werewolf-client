// @flow
import {CIRCLE, CROSS, FILL, QUESTION, TRIANGLE} from '../../constants/State'
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
    const state = [QUESTION, TRIANGLE, CIRCLE, CROSS]
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
      case QUESTION:
        return <Question />
      case TRIANGLE:
        return <Triangle />
      case CIRCLE:
        return <Circle />
      case CROSS:
        return <Cross />
      case FILL:
      default:
        return ''
    }
  })(props.state)

  return (
    <div
      className={`prediction--item ${props.fixed && props.state !== FILL ? 'fixed' : ''}`}
      data-date={props.date}
      data-state={props.state}
      onClick={handleBoardClick}
    >
      {image}
    </div>
  )
}
