// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {
  ChangeLanguage,
  SocketMessage
} from '../actions'
import type {Language} from 'lobby'

export type State = Language
type Action =
  | ChangeLanguage
  | SocketMessage

export const initialState = 'en'
const language = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_LANGUAGE:
      return action.language
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case 'avatar': {
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
