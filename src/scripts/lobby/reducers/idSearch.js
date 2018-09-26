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
  villageItems: []
}

const idSearch = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        header: 'Audience\'s ID Search',
        id: -1,
        isPlayer: false,
        menuItems: [
          {
            disabled: true,
            text: 'Search',
            types: [ActionTypes.ID_SEARCH]
          },
          {
            text: 'Return to Lobby for Audience',
            types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        header: 'Human Player\'s ID Search',
        id: -1,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            text: 'Search',
            types: [ActionTypes.ID_SEARCH]
          },
          {
            text: 'Return to Lobby for Human Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        header: 'Robot Player\'s ID Search',
        id: -1,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            text: 'Search',
            types: [ActionTypes.ID_SEARCH]
          },
          {
            text: 'Return to Lobby for Robot Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.idSearch.CHANGE_SEARCH_ID:
      return {
        ... state,
        id: action.id
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
