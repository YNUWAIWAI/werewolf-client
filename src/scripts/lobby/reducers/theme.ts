import * as ActionTypes from '../constants/ActionTypes'
import {ChangeTheme} from '../actions'
import {lobby} from '../types'

export type State = lobby.Theme
type Action =
  | ChangeTheme

export const initialState: State = lobby.Theme.dark
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_THEME:
      return action.theme
    default:
      return state
  }
}

export default language
