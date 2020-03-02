import * as ActionTypes from '../constants/ActionTypes'
import {
  Message,
  Settings
} from '../actions'
import {lobby} from '../types'

export type State = lobby.Language
type Action =
  | Settings.ChangeLanguage
  | Message.Avatar

export const initialState: State = lobby.Language.en
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Settings.CHANGE_LANGUAGE:
      return action.language
    case ActionTypes.Message.AVATAR:
      return action.payload.language
    default:
      return state
  }
}

export default language
