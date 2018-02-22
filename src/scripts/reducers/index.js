import chat from './chat'
import game from './game'
import mine from './mine'
import {combineReducers} from 'redux'
import commandInput from './commandInput'
import obfucator from './obfucator'

const reducer = combineReducers({
  chat,
  commandInput,
  game,
  mine,
  obfucator
})

export default reducer
