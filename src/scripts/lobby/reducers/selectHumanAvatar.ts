import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectHumanAvatar$ChangeAvatarCheckbox,
  SocketMessage
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'

export interface State {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      [key in string]: {
        readonly checked: boolean
        readonly name: string
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
  | SelectHumanAvatar$ChangeAvatarCheckbox
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
        types: [ActionTypes.SelectHumanAvatar.CREATE]
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
const selectHumanAvatar = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SelectHumanAvatar.CHANGE_CHECKBOX:
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

export default selectHumanAvatar
