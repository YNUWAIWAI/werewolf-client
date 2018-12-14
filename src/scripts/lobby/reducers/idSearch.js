// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {IdSearch$ChangeSearchId, IdSearch$ChangeValidity, SocketMessage, Transition} from '../actions'
import type {MenuItem, Payload$Avatar, Payload$SearchResult, Village} from 'lobby'

export type State = {
  +header: string,
  +id: number,
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +searched: boolean,
  +villageItems: Village[]
}
type Action =
  | IdSearch$ChangeSearchId
  | IdSearch$ChangeValidity
  | SocketMessage
  | Transition

export const initialState = {
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
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        header: 'Header.idSearch(audience)',
        id: -1,
        isPlayer: false,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        searched: false,
        villageItems: []
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        header: 'Header.idSearch(human player)',
        id: -1,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        searched: false,
        villageItems: []
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        header: 'Header.idSearch(robot player)',
        id: -1,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        searched: false,
        villageItems: []
      }
    case ActionTypes.idSearch.CHANGE_SEARCH_ID:
      return {
        ... state,
        id: action.id,
        searched: false
      }
    case ActionTypes.idSearch.CHANGE_VALIDITY: {
      const disabled = !action.validity

      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.ID_SEARCH)) {
            return {
              ... item,
              disabled
            }
          }

          return item
        })
      }
    }
    case ActionTypes.ID_SEARCH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.ID_SEARCH)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case 'avatar': {
          const payload: Payload$Avatar = action.payload

          return {
            ... state,
            image: payload.image,
            name: payload.name
          }
        }
        case 'searchResult': {
          const payload: Payload$SearchResult = action.payload

          return {
            ... state,
            menuItems: state.menuItems.map(item => {
              if (item.types.includes(ActionTypes.ID_SEARCH)) {
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
