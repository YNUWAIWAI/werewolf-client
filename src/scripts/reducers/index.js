import chat from './chat'
import base from './base'
import prediction from './prediction'
import mine from './mine'
import {combineReducers} from 'redux'
import commandInput from './commandInput'
import obfucator from './obfucator'
import result from './result'

const reducer = combineReducers({
  base,
  chat,
  prediction,
  commandInput,
  mine,
  obfucator,
  result
})

export default reducer
