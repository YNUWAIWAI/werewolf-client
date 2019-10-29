import * as ActionTypes from '../constants/ActionTypes'
import {ChangeLobby, ConfirmKickOutPlayer, SocketMessage, Transition} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {lobby} from '../types'

export interface State {
  readonly isPlayer: boolean
  readonly kickOutToken: lobby.Token
  readonly menuItems: MenuItem[]
  readonly players: lobby.WaitingPlayer[]
  readonly village: lobby.Village | null
}
type Action =
  | ChangeLobby
  | ConfirmKickOutPlayer
  | SocketMessage
  | Transition

export const initialState = {
  isPlayer: true,
  kickOutToken: '',
  menuItems: [],
  players: [],
  village: null
}
const waitingForPlayers = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_LOBBY:
      switch (action.lobby) {
        case 'human player':
          return {
            ... state,
            isPlayer: true,
            menuItems: [
              {
                disabled: true,
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
                disabled: true,
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
                disabled: true,
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
    case ActionTypes.App.CONFIRM_KICK_OUT_PLAYER:
      return {
        ... state,
        kickOutToken: action.token
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
            disabled: true,
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
            disabled: true,
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
            disabled: true,
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
    case ActionTypes.Socket.MESSAGE:
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

          if (payload.players.some(player => player.isHost && player.isMe)) {
            return {
              ... state,
              menuItems: state.menuItems.map(item => {
                if (item.types.includes(ActionTypes.Target.PLAY_GAME)) {
                  return {
                    ... item,
                    disabled: false
                  }
                }

                return item
              }),
              players: payload.players,
              village: payload.village
            }
          }

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
