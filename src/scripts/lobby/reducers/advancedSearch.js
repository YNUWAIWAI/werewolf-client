// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {SocketMessage, Transition} from '../actions'
import type {MenuItem} from 'lobby'

export type State = {
  +header: string,
  +menuItems: MenuItem[]
}
type Action =
  | SocketMessage
  | Transition

export const initialState = {
  header: '',
  menuItems: []
}

const advancedSearch = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        header: 'Audience\'s Advanced Search',
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.ADVANCED_SEARCH]
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
        header: 'Audience\'s Advanced Search',
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.ADVANCED_SEARCH]
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
        header: 'Audience\'s Advanced Search',
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.ADVANCED_SEARCH]
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
    default:
      return state
  }
}

export default advancedSearch
