import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeLanguage,
  SocketMessage
} from '../actions'
import {lobby} from '../types'

export type State = lobby.Language
type Action =
  | ChangeLanguage
  | SocketMessage

export const initialState: State = lobby.Language.en
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_LANGUAGE:
      return action.language
    case ActionTypes.Socket.MESSAGE:
      switch (action.payload.type) {
        case lobby.PayloadType.avatar: {
          return action.payload.lang
        }
        default:
          return state
      }
    default:
      return state
  }
}

export default language
