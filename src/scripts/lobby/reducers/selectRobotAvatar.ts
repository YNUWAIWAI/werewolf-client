import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SocketMessage} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      [key in string]: {
        readonly automation: lobby.Automation
        readonly checked: boolean
        readonly name: string
        readonly testStatus: lobby.TestStatus
      }
    }
  }
  readonly menuItems: MenuItem[]
}
type Action =
  | SocketMessage

export const initialState: State = {
  avatar: {
    allIds: [],
    byId: {}
  },
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
