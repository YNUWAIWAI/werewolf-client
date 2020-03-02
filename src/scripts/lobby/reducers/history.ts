import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {Message} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly villageItems: lobby.Village[]
}
type Action =
  | Message.Lobby

export const initialState: State = {
  isPlayer: false,
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ],
  villageItems: []
}

const history = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Message.LOBBY: {
      const payload = action.payload

      return {
        ... state,
        villageItems: payload.villages
      }
    }
    default:
      return state
  }
}

export default history
