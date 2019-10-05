import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from '../types'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {
  SocketMessage
} from '../actions'

export interface State {
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly villageItems: lobby.Village[]
}
type Action =
  | SocketMessage

export const initialState: State = {
  isPlayer: false,
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.Target.SHOW_MAIN]
    }
  ],
  villageItems: []
}

const history = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE:
      if (action.payload.type === lobby.PayloadType.lobby) {
        const payload = action.payload

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
