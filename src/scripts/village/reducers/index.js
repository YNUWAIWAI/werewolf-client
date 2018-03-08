import agents from './agents'
import base from './base'
import chat from './chat'
import {combineReducers} from 'redux'
import command from './command'
import hideButton from './hideButton'
import mine from './mine'
import modal from './modal'
import obfucator from './obfucator'
import prediction from './prediction'
import result from './result'
import timer from './timer'

const reducer = combineReducers({
  agents,
  base,
  chat,
  hideButton,
  prediction,
  command,
  mine,
  modal,
  obfucator,
  result,
  timer
})

export default reducer
