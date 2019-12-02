import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeLobby,
  ConfirmKickOutPlayer,
  Message$Played,
  Message$WaitingPage,
  Transition
} from '../actions'
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
  | Message$Played
  | Message$WaitingPage
  | Transition

export const initialState: State = {
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
        case lobby.LobbyType.human:
          return {
            ... state,
            isPlayer: true,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.playGame',
                types: [ActionTypes.App.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_MAIN]
              }
            ]
          }
        case lobby.LobbyType.onymousAudience:
          return {
            ... state,
            isPlayer: false,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.playGame',
                types: [ActionTypes.App.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForAudience',
                types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_MAIN]
              }
            ]
          }
        case lobby.LobbyType.robot:
          return {
            ... state,
            isPlayer: true,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.playGame',
                types: [ActionTypes.App.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForRobotPlayer',
                types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_MAIN]
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
    case ActionTypes.App.PLAY_GAME:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.App.PLAY_GAME)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        isPlayer: false,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.playGame',
            types: [ActionTypes.App.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.playGame',
            types: [ActionTypes.App.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.playGame',
            types: [ActionTypes.App.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.LEAVE_WAITING_PAGE, ActionTypes.App.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.Message.PLAYED: {
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.App.PLAY_GAME)) {
            return {
              ... item,
              isLoading: false
            }
          }

          return item
        })
      }
    }
    case ActionTypes.Message.WAITING_PAGE: {
      const payload = action.payload

      if (payload.players.some(player => player.isHost && player.isMe)) {
        return {
          ... state,
          menuItems: state.menuItems.map(item => {
            if (item.types.includes(ActionTypes.App.PLAY_GAME)) {
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
}

export default waitingForPlayers
