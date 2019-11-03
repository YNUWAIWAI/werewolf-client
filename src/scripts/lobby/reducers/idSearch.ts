import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangeLobby,
  IdSearch$ChangeSearchId,
  IdSearch$ChangeValidity,
  SocketMessage,
  Transition
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {lobby} from '../types'

export interface State {
  readonly header: string
  readonly id: number
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly searched: boolean
  readonly villageItems: lobby.Village[]
}
type Action =
  | ChangeLobby
  | IdSearch$ChangeSearchId
  | IdSearch$ChangeValidity
  | SocketMessage
  | Transition

export const initialState: State = {
  header: '',
  id: -1,
  image: '',
  isPlayer: true,
  menuItems: [],
  name: '',
  searched: false,
  villageItems: []
}

const idSearch = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_LOBBY:
      switch (action.lobby) {
        case lobby.LobbyType.anonymousAudience:
        case lobby.LobbyType.onymousAudience:
          return {
            ... state,
            header: 'Header.idSearch(audience)',
            id: -1,
            isPlayer: false,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.search',
                types: [ActionTypes.Target.ID_SEARCH]
              },
              {
                id: 'Menu.returnToLobbyForAudience',
                types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.SHOW_MAIN]
              }
            ],
            searched: false,
            villageItems: []
          }
        case lobby.LobbyType.human:
          return {
            ... state,
            header: 'Header.idSearch(human player)',
            id: -1,
            isPlayer: true,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.search',
                types: [ActionTypes.Target.ID_SEARCH]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.SHOW_MAIN]
              }
            ],
            searched: false,
            villageItems: []
          }
        case lobby.LobbyType.robot:
          return {
            ... state,
            header: 'Header.idSearch(robot player)',
            id: -1,
            isPlayer: true,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.search',
                types: [ActionTypes.Target.ID_SEARCH]
              },
              {
                id: 'Menu.returnToLobbyForRobotPlayer',
                types: [ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.SHOW_MAIN]
              }
            ],
            searched: false,
            villageItems: []
          }
        default:
          return state
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        header: 'Header.idSearch(audience)',
        id: -1,
        isPlayer: false,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        searched: false,
        villageItems: []
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        header: 'Header.idSearch(human player)',
        id: -1,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        searched: false,
        villageItems: []
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        header: 'Header.idSearch(robot player)',
        id: -1,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        searched: false,
        villageItems: []
      }
    case ActionTypes.IdSearch.CHANGE_SEARCH_ID:
      return {
        ... state,
        id: action.id,
        searched: false
      }
    case ActionTypes.IdSearch.CHANGE_VALIDITY: {
      const disabled = !action.validity

      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.Target.ID_SEARCH)) {
            return {
              ... item,
              disabled
            }
          }

          return item
        })
      }
    }
    case ActionTypes.Target.ID_SEARCH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.Target.ID_SEARCH)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.Socket.MESSAGE:
      switch (action.payload.type) {
        case lobby.PayloadType.avatar: {
          const payload = action.payload

          return {
            ... state,
            image: payload.image,
            name: payload.name
          }
        }
        case lobby.PayloadType.searchResult: {
          const payload = action.payload

          return {
            ... state,
            menuItems: state.menuItems.map(item => {
              if (item.types.includes(ActionTypes.Target.ID_SEARCH)) {
                return {
                  ... item,
                  isLoading: false
                }
              }

              return item
            }),
            searched: true,
            villageItems: payload.villages
          }
        }
        default:
          return state
      }
    default:
      return state
  }
}

export default idSearch
