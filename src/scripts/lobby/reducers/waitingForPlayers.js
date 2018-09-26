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
            isPlayer: true,
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
            isPlayer: false,
            menuItems: [
              {
                text: 'Play',
                types: [ActionTypes.PLAY_GAME]
              },
              {
                text: 'Return to Lobby for Audience',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
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
            isPlayer: true,
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
    case ActionTypes.PLAY_GAME:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.PLAY_GAME)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        isPlayer: false,
        menuItems: [
          {
            text: 'Play',
            types: [ActionTypes.PLAY_GAME]
          },
          {
            text: 'Return to Lobby for Audience',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        isPlayer: true,
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
        isPlayer: true,
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
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case 'played': {
          return {
            ... state,
            menuItems: state.menuItems.map(item => {
              if (item.types.includes(ActionTypes.PLAY_GAME)) {
                return {
                  ... item,
                  isLoading: false
                }
              }

              return item
            })
          }
        }
        case 'waitingPage': {
          const payload: Payload$WatingPage = action.payload

          return {
            ... state,
            players: payload.players,
            village: payload.village
          }
        }
        default:
          return state
      }
    default:
      return state
  }
}

export default waitingForPlayers
