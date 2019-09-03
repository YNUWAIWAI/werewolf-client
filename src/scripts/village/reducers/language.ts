import * as ActionTypes from '../constants/ActionTypes'
import * as village from 'types/village'
import {ChangeLanguage} from '../actions'

export type State = village.Language
type Action =
  | ChangeLanguage

export const initialState: State = village.Language.en
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.CHANGE_LANGUAGE:
      return action.language
    default:
      return state
  }
}

export default language
