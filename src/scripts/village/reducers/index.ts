import base, {State as baseState} from './base'
import chat, {State as chatState} from './chat'
import command, {State as commandState} from './command'
import commandGrave, {State as commandGraceState} from './commandGrave'
import commandInputBox, {State as commandInputBoxState} from './commandInputBox'
import commandPostMortem, {State as commandPostMortemState} from './commandPostMortem'
import commandSelection, {State as commandSelectionState} from './commandSelection'
import hideButton, {State as hideButtonState} from './hideButton'
import language, {State as languageState} from './language'
import mine, {State as mineState} from './mine'
import modal, {State as modalState} from './modal'
import obfucator, {State as obfucatorState} from './obfucator'
import prediction, {State as predictionState} from './prediction'
import result, {State as resultState} from './result'
import timer, {State as timerState} from './timer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
  base,
  chat,
  command,
  commandGrave,
  commandInputBox,
  commandPostMortem,
  commandSelection,
  hideButton,
  language,
  mine,
  modal,
  obfucator,
  prediction,
  result,
  timer
})

export default reducer

export interface ReducerState {
  readonly base: baseState
  readonly chat: chatState
  readonly command: commandState
  readonly commandGrave: commandGraceState
  readonly commandInputBox: commandInputBoxState
  readonly commandPostMortem: commandPostMortemState
  readonly commandSelection: commandSelectionState
  readonly hideButton: hideButtonState
  readonly language: languageState
  readonly mine: mineState
  readonly modal: modalState
  readonly obfucator: obfucatorState
  readonly prediction: predictionState
  readonly result: resultState
  readonly timer: timerState
}
