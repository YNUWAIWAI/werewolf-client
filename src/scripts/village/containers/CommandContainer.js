// @flow
import Command, {type StateProps} from '../components/Command'
import {DAY_CONVERSATION, DAY_VOTE, NIGHT, POST_MORTEM, RESULTS} from '../constants/Phase'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import React from 'react'
import type {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const content = (phase => {
    switch (phase) {
      case DAY_CONVERSATION:
        return <CommandInputBox />
      case DAY_VOTE:
      case NIGHT:
        return <CommandSelection />
      case POST_MORTEM:
      case RESULTS:
        return <CommandPostMortem />
      default:
        throw Error(`Unknown: ${phase}`)
    }
  })(state.base.phase)

  return {
    content,
    hide: state.hideButton.hide
  }
}
const CommandContainer = connect(
  mapStateToProps
)(Command)

export default CommandContainer
