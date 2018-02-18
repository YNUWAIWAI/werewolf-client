import day from './day'
import role from './role'
import {combineReducers} from 'redux'

const reducer = combineReducers({
  day,
  role
})

export default reducer
