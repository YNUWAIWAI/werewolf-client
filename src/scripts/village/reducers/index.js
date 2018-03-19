// @flow
import agents, {type State as agentsState} from './agents'
import base, {type State as baseState} from './base'
import chat from './chat'
import {combineReducers} from 'redux'
import command from './command'
import hideButton, {type State as hideButtonState} from './hideButton'
import modal, {type State as modalState} from './modal'
import obfucator, {type State as obfucatorState} from './obfucator'
import prediction, {type State as predictionState} from './prediction'
import result, {type State as resultState} from './result'
import roles, {type State as rolesState} from './roles'
import timer, {type State as timerState} from './timer'

const reducer = combineReducers({
  agents,
  base,
  chat,
  command,
  hideButton,
  modal,
  obfucator,
  prediction,
  result,
  roles,
  timer
})

export default reducer

export type ReducerState = {
  agents: agentsState,
  base: baseState,
  chat: *,
  command: *,
  hideButton: hideButtonState,
  modal: modalState,
  obfucator: obfucatorState,
  prediction: predictionState,
  result: resultState,
  roles: rolesState,
  timer: timerState
}
