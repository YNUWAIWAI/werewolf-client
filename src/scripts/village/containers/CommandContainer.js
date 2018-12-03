// @flow
import Command, {type StateProps} from '../components/organisms/Command'
import {DAY, FLAVOR_TEXT, MORNING, NIGHT, POST_MORTEM, RESULT} from '../constants/Phase'
import CommandGrave from './CommandGraveContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import React from 'react'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const content = ((phase, isDead) => {
    if (isDead) {
      return <CommandGrave />
    }
    switch (phase) {
      case DAY:
      case NIGHT:
        return <CommandSelection />
      case FLAVOR_TEXT:
      case MORNING:
        return <CommandInputBox />
      case POST_MORTEM:
      case RESULT:
        return <CommandPostMortem />
      default:
        throw Error(`Unknown: ${phase}`)
    }
  })(
    state.base.phase,
    state.agents.mine !== undefined && state.agents.mine.status !== 'alive'
  )

  return {
    content,
    hide: state.hideButton.hide
  }
}
const CommandContainer = connect(
  mapStateToProps
)(Command)

export default CommandContainer
