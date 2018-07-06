// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem, Payload$Lobby, Village} from 'lobby'
import type {SocketMessage} from '../actions'

export type State = {
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +villageItems: Village[]
}
type Action =
  | SocketMessage

export const initialState = {
  isPlayer: false,
  menuItems: [
    {
      text: 'Search for a Village in session',
      types: [ActionTypes.SEARCH_FOR_A_VILLAGE_IN_SESSION]
    },
    {
      text: 'Search for an Old Village',
      types: [ActionTypes.SEARCH_FOR_AN_OLD_VILLAGE]
    },
    {
      text: 'Refresh',
      types: [ActionTypes.REFRESH]
    },
    {
      text: 'Return to the Main Page',
      types: [ActionTypes.SHOW_MAIN]
    }
  ],
  villageItems: []
}

const lobbyForAudience = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      if (action.payload.type === 'lobby') {
        const payload: Payload$Lobby = action.payload

        return {
          ... state,
          villageItems: payload.villages
        }
      }

      return state

    default:
      return state
  }
}

export default lobbyForAudience
