import day from './day'
import obfucator from './obfucator'
import role from './role'
import {combineReducers} from 'redux'

const reducer = combineReducers({
  day,
  obfucator,
  role
})

export default reducer
