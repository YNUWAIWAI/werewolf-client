import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SocketMessage} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly menuItems: MenuItem[]
}
type Action =
  | SocketMessage

export const initialState: State = {
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.Target.SHOW_MAIN]
    }
  ]
}
const selectRobotAvatar = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default selectRobotAvatar
