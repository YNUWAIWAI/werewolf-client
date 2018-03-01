import chat from './chat'
import agent from './agent'
import hideButton from './hideButton'
import base from './base'
import prediction from './prediction'
import mine from './mine'
import modal from './modal'
import {combineReducers} from 'redux'
import command from './command'
import obfucator from './obfucator'
import result from './result'
import timer from './timer'

const reducer = combineReducers({
  agent,
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
