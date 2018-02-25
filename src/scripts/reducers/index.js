import chat from './chat'
import base from './base'
import prediction from './prediction'
import mine from './mine'
import {combineReducers} from 'redux'
import commandInput from './commandInput'
import obfucator from './obfucator'

const reducer = combineReducers({
  base,
  chat,
  prediction,
  commandInput,
  mine,
  obfucator
})

export default reducer
