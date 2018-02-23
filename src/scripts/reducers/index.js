import chat from './chat'
import base from './base'
import mine from './mine'
import {combineReducers} from 'redux'
import commandInput from './commandInput'
import obfucator from './obfucator'

const reducer = combineReducers({
  chat,
  commandInput,
  base,
  mine,
  obfucator
})

export default reducer
