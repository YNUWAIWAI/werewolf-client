import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeLobby,
  ChangeToken,
  Transition
} from '../actions'
import {lobby} from '../types'

export interface State {
  [lobby.LobbyType.anonymousAudience]: lobby.Token
  [lobby.LobbyType.human]: lobby.Token
  lobby: lobby.LobbyType
  [lobby.LobbyType.onymousAudience]: lobby.Token
  [lobby.LobbyType.robot]: lobby.Token
}
type Action =
  | ChangeLobby
  | ChangeToken
  | Transition

export const initialState: State = {
  [lobby.LobbyType.anonymousAudience]: '',
  [lobby.LobbyType.human]: '',
  lobby: lobby.LobbyType.human,
  [lobby.LobbyType.onymousAudience]: '',
  [lobby.LobbyType.robot]: ''
}

const token = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_LOBBY:
      return {
        ... state,
        lobby: action.lobby
      }
    case ActionTypes.App.CHANGE_TOKEN:
      return {
        ... state,
        [action.lobby]: action.token
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        lobby: lobby.LobbyType.onymousAudience
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        lobby: lobby.LobbyType.human
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        lobby: lobby.LobbyType.robot
      }
    default:
      return state
  }
}

export default token
