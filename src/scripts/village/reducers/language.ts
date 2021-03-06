import * as ActionTypes from '../constants/ActionTypes'
import {ChangeLanguage} from '../actions'
import {village} from '../types'

export type State = village.Language
type Action =
  | ChangeLanguage

export const initialState: State = village.Language.en
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_LANGUAGE:
      return action.language
    default:
      return state
  }
}

export default language
