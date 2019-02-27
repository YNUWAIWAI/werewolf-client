import agents, {State as agentsState} from './agents'
import base, {State as baseState} from './base'
import chat, {State as chatState} from './chat'
import commandGrave, {State as commandGraceState} from './commandGrave'
import commandInputBox, {State as commandInputBoxState} from './commandInputBox'
import commandPostMortem, {State as commandPostMortemState} from './commandPostMortem'
import commandSelection, {State as commandSelectionState} from './commandSelection'
import hideButton, {State as hideButtonState} from './hideButton'
import language, {State as languageState} from './language'
import modal, {State as modalState} from './modal'
import obfucator, {State as obfucatorState} from './obfucator'
import prediction, {State as predictionState} from './prediction'
import result, {State as resultState} from './result'
import roles, {State as rolesState} from './roles'
import timer, {State as timerState} from './timer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
  agents,
  base,
  chat,
  commandGrave,
  commandInputBox,
  commandPostMortem,
  commandSelection,
  hideButton,
  language,
  modal,
  obfucator,
  prediction,
  result,
  roles,
  timer
})

export default reducer

export interface ReducerState {
  readonly agents: agentsState
  readonly base: baseState
  readonly chat: chatState
  readonly commandGrave: commandGraceState
  readonly commandInputBox: commandInputBoxState
  readonly commandPostMortem: commandPostMortemState
  readonly commandSelection: commandSelectionState
  readonly hideButton: hideButtonState
  readonly language: languageState
  readonly modal: modalState
  readonly obfucator: obfucatorState
  readonly prediction: predictionState
  readonly result: resultState
  readonly roles: rolesState
  readonly timer: timerState
}
