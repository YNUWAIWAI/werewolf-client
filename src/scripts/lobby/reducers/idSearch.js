// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {ChangeSearchId, SocketMessage, Transition} from '../actions'
import type {MenuItem, Payload$Avatar} from 'lobby'

export type State = {
  +header: string,
  +id: number,
  +image: string,
  +menuItems: MenuItem[],
  +name: string
}
type Action =
  | ChangeSearchId
  | SocketMessage
  | Transition

export const initialState = {
  header: '',
  id: -1,
  image: '',
  menuItems: [],
  name: ''
}

const idSearch = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        header: 'Audience\'s ID Search',
        id: -1,
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.SEARCH_FOR_ID]
          },
          {
            text: 'Return to Lobby for Audience',
            types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        header: 'Human Player\'s ID Search',
        id: -1,
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.SEARCH_FOR_ID]
          },
          {
            text: 'Return to Lobby for Human Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        header: 'Robot Player\'s ID Search',
        id: -1,
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.SEARCH_FOR_ID]
          },
          {
            text: 'Return to Lobby for Robot Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ]
      }
    case ActionTypes.CHANGE_SEARCH_ID:
      return {
        ... state,
        id: action.id
      }
    case ActionTypes.SOCKET_MESSAGE:
      switch (action.payload.type) {
        case 'avatar': {
          const payload: Payload$Avatar = action.payload

          return {
            ... state,
            image: payload.image,
            name: payload.name
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
