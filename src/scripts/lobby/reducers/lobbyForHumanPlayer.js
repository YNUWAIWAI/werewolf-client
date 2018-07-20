// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem, Payload$Lobby, Village} from 'lobby'
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
  isPlayer: true,
  menuItems: [
    {
      text: 'Build your Village',
      types: [ActionTypes.SHOW_BUILD_VILLAGE]
    },
    {
      text: 'Search for a Village',
      types: [ActionTypes.SEARCH_FOR_A_VILLAGE]
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
  name: '',
  villageItems: []
}

const lobbyForHumanPlayer = (state: State = initialState, action: Action): State => {
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

export default lobbyForHumanPlayer
