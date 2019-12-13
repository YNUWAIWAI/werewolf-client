import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SelectRobotAvatar$ChangeCheckbox} from '../actions'
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
        readonly isHover: boolean
        readonly name: string
        readonly status: lobby.AvatarStatus
        readonly testStatus: lobby.TestStatus
      }
    }
  }
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
type Action =
  | SelectRobotAvatar$ChangeCheckbox

export const initialState: State = {
  avatar: {
    allIds: [],
    byId: {}
  },
  command: [],
  menuItems: [
    {
      id: 'Menu.createNewAvatar',
      types: [ActionTypes.App.SHOW_SELECT_ROBOT_AVATAR]
    },
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ]
}
const selectRobotAvatar = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SelectRobotAvatar.CHANGE_CHECKBOX:
      return {
        ... state,
        avatar: {
          ... state.avatar,
          byId: {
            ... state.avatar.byId,
            [action.id]: {
              ... state.avatar.byId[action.id],
              checked: !state.avatar.byId[action.id].checked
            }
          }
        }
      }
    default:
      return state
  }
}

export default selectRobotAvatar
