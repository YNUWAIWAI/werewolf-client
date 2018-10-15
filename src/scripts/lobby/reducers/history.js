// @flow
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
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.SHOW_MAIN]
    }
  ],
  villageItems: []
}

const history = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
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

export default history
