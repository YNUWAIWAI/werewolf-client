import {combineReducers} from 'redux'
import commandInput from './commandInput'
import day from './day'
import obfucator from './obfucator'
import role from './role'

const reducer = combineReducers({
  commandInput,
  day,
  obfucator,
  role
})

export default reducer
