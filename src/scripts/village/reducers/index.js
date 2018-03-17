// @flow
import agents, {type State as agentsState} from './agents'
import base, {type State as baseState} from './base'
import chat from './chat'
import {combineReducers} from 'redux'
import command from './command'
import hideButton, {type State as hideButtonState} from './hideButton'
import mine from './mine'
import modal, {type State as modalState} from './modal'
import obfucator, {type State as obfucatorState} from './obfucator'
import prediction, {type State as predictionState} from './prediction'
import result, {type State as resultState} from './result'
import timer, {type State as timerState} from './timer'

const reducer = combineReducers({
  agents,
  base,
  chat,
  command,
  hideButton,
  mine,
  modal,
  obfucator,
  prediction,
  result,
  timer
})

export default reducer

export type ReducerState = {
  agents: agentsState,
  base: baseState,
  chat: *,
  command: *,
  hideButton: hideButtonState,
  mine: *,
  modal: modalState,
  obfucator: obfucatorState,
  prediction: predictionState,
  result: resultState,
  timer: timerState
}
