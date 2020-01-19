import * as ActionTypes from '../constants/ActionTypes'
import {
  Message$RobotPlayerSelectionPage,
  SelectRobotAvatar$ChangeCheckbox,
  SelectRobotAvatar$RenewAvatarToken
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {lobby} from '../types'

export interface State {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      [key in string]: {
        readonly checked: boolean
        readonly image: string
        readonly isAuthorized: boolean
        readonly isFullyAutomated: boolean
        readonly isHover: boolean
        readonly isTestPassed: boolean
        readonly language: lobby.Language
        readonly name: string
        readonly status: lobby.AvatarStatus
        readonly token: lobby.Token
      }
    }
  }
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
type Action =
  | Message$RobotPlayerSelectionPage
  | SelectRobotAvatar$ChangeCheckbox
  | SelectRobotAvatar$RenewAvatarToken

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
    case ActionTypes.Message.ROBOT_PLAYER_SELECTION_PAGE: {
      const allIds = action.payload.avatar.map(a => a.token)
      const byId: State['avatar']['byId'] = {
        ... state.avatar.byId
      }

      action.payload.avatar.forEach(a => {
        const checked = byId[a.token] ? byId[a.token].checked : false
        const isHover = byId[a.token] ? byId[a.token].isHover : false

        byId[a.token] = {
          checked,
          image: a.image,
          isAuthorized: a.isAuthorized,
          isFullyAutomated: a.isFullyAutomated,
          isHover,
          isTestPassed: a.isTestPassed,
          language: a.language,
          name: a.name,
          status: a.status,
          token: a.token
        }
      })

      return {
        ... state,
        avatar: {
          allIds,
          byId
        }
      }
    }
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
