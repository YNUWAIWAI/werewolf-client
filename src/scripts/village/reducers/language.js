// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {ChangeLanguage} from '../actions'
import type {Language} from 'village'

export type State = Language
type Action =
  | ChangeLanguage

export const initialState = 'ja'
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return action.language
    default:
      return state
  }
}

export default language
