import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from 'types/lobby'
import {ChangeLobby, ChangeToken, Transition} from '../actions'

export interface State {
  [lobby.Lobby.human]: string
  lobby: lobby.Lobby
  [lobby.Lobby.audience]: string
  [lobby.Lobby.robot]: string
}
type Action =
  | ChangeLobby
  | ChangeToken
  | Transition

export const initialState: State = {
  [lobby.Lobby.human]: '',
  lobby: lobby.Lobby.human,
  [lobby.Lobby.audience]: '',
  [lobby.Lobby.robot]: ''
}

const token = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.global.CHANGE_LOBBY:
      return {
        ... state,
        lobby: action.lobby
      }
    case ActionTypes.global.CHANGE_TOKEN:
      return {
        ... state,
        [action.lobby]: action.token
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        lobby: lobby.Lobby.audience
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        lobby: lobby.Lobby.human
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        lobby: lobby.Lobby.robot
      }
    default:
      return state
  }
}

export default token
