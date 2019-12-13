import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SelectHumanAvatar$ChangeCheckbox} from '../actions'

export interface State {
  readonly avatar: {
    readonly allIds: string[]
    readonly byId: {
      [key in string]: {
        readonly checked: boolean
        readonly isHover: boolean
        readonly name: string
      }
    }
  }
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
type Action =
  | SelectHumanAvatar$ChangeCheckbox

export const initialState: State = {
  avatar: {
    allIds: [],
    byId: {}
  },
  command: [],
  menuItems: [
    {
      id: 'Menu.createNewAvatar',
      types: [ActionTypes.App.SHOW_SELECT_HUMAN_AVATAR]
    },
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
