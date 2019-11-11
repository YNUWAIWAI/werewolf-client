import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SocketMessage} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      [key in string]: {
        readonly accessToken: lobby.Token
        readonly automation: lobby.Automation
        readonly authorized: lobby.Authorized
        readonly checked: boolean
        readonly name: string
        readonly status: lobby.AvatarStatus
        readonly testStatus: lobby.TestStatus
      }
    }
  }
  readonly command: MenuItem[]
  readonly createNewAvatar: {
    readonly command: MenuItem[]
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
  command: [],
  createNewAvatar: {
    command: [
      {
        id: 'CreateNewAvatar.create',
        types: [ActionTypes.SelectRobotAvatar.CREATE]
      }
    ]
  },
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
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
