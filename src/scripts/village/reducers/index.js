// @flow
import agents, {type State as agentsState} from './agents'
import base, {type State as baseState} from './base'
import chat, {type State as chatState} from './chat'
import commandInputBox, {type State as commandInputBoxState} from './commandInputBox'
import commandSelection, {type State as commandSelectionState} from './commandSelection'
import hideButton, {type State as hideButtonState} from './hideButton'
import modal, {type State as modalState} from './modal'
import obfucator, {type State as obfucatorState} from './obfucator'
import prediction, {type State as predictionState} from './prediction'
import result, {type State as resultState} from './result'
import roles, {type State as rolesState} from './roles'
import {combineReducers} from 'redux'

const reducer = combineReducers({
  agents,
  base,
  chat,
  commandInputBox,
  commandSelection,
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
  commandInputBox: commandInputBoxState,
  commandSelection: commandSelectionState,
  hideButton: hideButtonState,
  modal: modalState,
  obfucator: obfucatorState,
  prediction: predictionState,
  result: resultState,
  roles: rolesState
}
