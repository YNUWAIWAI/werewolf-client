// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem, Payload$Avatar, Payload$Lobby, Village} from 'lobby'
import type {SocketMessage} from '../actions'

export type State = {
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +villageItems: Village[]
}
type Action =
  | SocketMessage

export const initialState = {
  image: '',
  isPlayer: false,
  menuItems: [
    {
      text: 'ID Search',
      types: [ActionTypes.SHOW_ID_SEARCH]
    },
    {
      text: 'Advanced Search',
      types: [ActionTypes.SHOW_ADVANCED_SEARCH]
    },
    {
      text: 'Refresh',
      types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
    },
    {
      text: 'Return to the Main Page',
      types: [ActionTypes.SHOW_MAIN]
    }
  ],
  name: '',
  villageItems: []
}

const lobbyForAudience = (state: State = initialState, action: Action): State => {
  switch (action.type) {
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
        case 'lobby': {
          const payload: Payload$Lobby = action.payload

          if (payload.lobby === 'onymous audience') {
            return {
              ... state,
              villageItems: payload.villages
            }
          }

          return state
        }
        default:
          return state
      }
    default:
      return state
  }
}

export default lobbyForAudience
