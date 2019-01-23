import * as React from 'react'
import Command, {StateProps} from '../components/organisms/Command'
import {DAY, FLAVOR_TEXT, MORNING, NIGHT, POST_MORTEM, RESULT} from '../constants/Phase'
import CommandGrave from './CommandGraveContainer'
import CommandInputBox from './CommandInputBoxContainer'
import CommandPostMortem from './CommandPostMortemContainer'
import CommandSelection from './CommandSelectionContainer'
import {ReducerState} from '../reducers'
import {connect} from 'react-redux'

const mapStateToProps = (state: ReducerState): StateProps => {
  const content = ((phase, isDead) => {
    switch (phase) {
      case DAY:
      case FLAVOR_TEXT:
      case NIGHT:
        if (isDead) {
          return <CommandGrave />
        }

        return <CommandSelection />
      case MORNING:
        if (isDead) {
          return <CommandGrave />
        }

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
