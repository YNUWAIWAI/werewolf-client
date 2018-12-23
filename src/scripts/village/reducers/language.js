// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {
  ChangeLanguage,
  Played
} from '../actions'
import type {Language} from 'village'

export type State = Language
type Action =
  | ChangeLanguage
  | Played

export const initialState = 'en'
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return action.language
    case ActionTypes.PLAYED:
      return action.payload.lang
    default:
      return state
  }
}

export default language
