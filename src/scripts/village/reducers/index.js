// @flow
import agents, {type State as agentsState} from './agents'
import base, {type State as baseState} from './base'
import chat, {type State as chatState} from './chat'
import command, {type State as commandState} from './command'
import commandInputBox, {type State as commandInputBoxState} from './commandInputBox'
import hideButton, {type State as hideButtonState} from './hideButton'
import modal, {type State as modalState} from './modal'
import obfucator, {type State as obfucatorState} from './obfucator'
import prediction, {type State as predictionState} from './prediction'
import result, {type State as resultState} from './result'
import roles, {type State as rolesState} from './roles'
import timer, {type State as timerState} from './timer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
  agents,
  base,
  chat,
  command,
  commandInputBox,
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
  chat: chatState,
  command: commandState,
  commandInputBox: commandInputBoxState,
  hideButton: hideButtonState,
  modal: modalState,
  obfucator: obfucatorState,
  prediction: predictionState,
  result: resultState,
  roles: rolesState,
  timer: timerState
}
