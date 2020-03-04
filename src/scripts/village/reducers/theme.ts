import * as ActionTypes from '../constants/ActionTypes'
import {ChangeTheme} from '../actions'
import {village} from '../types'

export type State = village.Theme
type Action =
  | ChangeTheme

export const initialState: State = village.Theme.dark
const theme = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_THEME:
      return action.theme
    default:
      return state
  }
}

export default theme
