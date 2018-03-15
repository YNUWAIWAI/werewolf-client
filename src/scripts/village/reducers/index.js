// @flow
import agents from './agents'
import base from './base'
import chat from './chat'
import {combineReducers} from 'redux'
import command from './command'
import hideButton from './hideButton'
import mine from './mine'
import modal, {type State as modalState} from './modal'
import obfucator from './obfucator'
import prediction from './prediction'
import result from './result'
import timer from './timer'

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
  agents: *,
  base: *,
  chat: *,
  command: *,
  hideButton: *,
  mine: *,
  modal: modalState,
  obfucator: *,
  prediction: *,
  result: *,
  timer: *
}
