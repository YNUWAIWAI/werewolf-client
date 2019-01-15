import * as ActionTypes from '../constants/ActionTypes'
import {ChangeLobby, SocketMessage, Transition} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'

export interface State {
  readonly isPlayer: boolean,
  readonly menuItems: MenuItem[],
  readonly players: lobby.WaitingPlayer[],
  readonly village?: lobby.Village
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
    case ActionTypes.global.CHANGE_LOBBY:
      switch (action.lobby) {
        case 'human player':
          return {
            ... state,
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.playGame',
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ]
          }
        case 'onymous audience':
          return {
            ... state,
            isPlayer: false,
            menuItems: [
              {
                id: 'Menu.playGame',
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForAudience',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ]
          }
        case 'robot player':
          return {
            ... state,
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.playGame',
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForRobotPlayer',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ]
          }
        default:
          return state
      }
    case ActionTypes.Target.PLAY_GAME:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.Target.PLAY_GAME)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        isPlayer: false,
        menuItems: [
          {
            id: 'Menu.playGame',
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.playGame',
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.playGame',
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case lobby.PayloadType.played: {
          return {
            ... state,
            menuItems: state.menuItems.map(item => {
              if (item.types.includes(ActionTypes.Target.PLAY_GAME)) {
                return {
                  ... item,
                  isLoading: false
                }
              }

              return item
            })
          }
        }
        case lobby.PayloadType.waitingPage: {
          const payload = action.payload

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
