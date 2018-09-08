// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {ChangeLobby, SocketMessage, Transition} from '../actions'
import type {MenuItem, Payload$WatingPage, Village, WaitingPlayer} from 'lobby'

export type State = {
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +players: WaitingPlayer[],
  +village?: Village
}
type Action =
  | ChangeLobby
  | SocketMessage
  | Transition

export const initialState = {
  isPlayer: true,
  menuItems: [],
  players: []
}
const waitingForPlayers = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_LOBBY:
      switch (action.lobby) {
        case 'human player':
          return {
            ... state,
            menuItems: [
              {
                text: 'Play',
                types: [ActionTypes.PLAY_GAME]
              },
              {
                text: 'Return to Lobby for Human Player',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                text: 'Return to the Main Page',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
              }
            ]
          }
        case 'onymous audience':
          return {
            ... state,
            menuItems: [
              {
                text: 'Play',
                types: [ActionTypes.PLAY_GAME]
              },
              {
                text: 'Return to Lobby for Robot Player',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                text: 'Return to the Main Page',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
              }
            ]
          }
        case 'robot player':
          return {
            ... state,
            menuItems: [
              {
                text: 'Play',
                types: [ActionTypes.PLAY_GAME]
              },
              {
                text: 'Return to Lobby for Robot Player',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                text: 'Return to the Main Page',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
              }
            ]
          }
        default:
          return state
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            text: 'Play',
            types: [ActionTypes.PLAY_GAME]
          },
          {
            text: 'Return to Lobby for Human Player',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            text: 'Play',
            types: [ActionTypes.PLAY_GAME]
          },
          {
            text: 'Return to Lobby for Robot Player',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.SOCKET_MESSAGE:
      if (action.payload.type === 'waitingPage') {
        const payload: Payload$WatingPage = action.payload

        return {
          ... state,
          players: payload.players,
          village: payload.village
        }
      }

      return state
    default:
      return state
  }
}

export default waitingForPlayers
