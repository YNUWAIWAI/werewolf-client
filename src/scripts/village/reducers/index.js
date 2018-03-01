import agent from './agent'
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
