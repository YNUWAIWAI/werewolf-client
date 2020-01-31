import * as ActionTypes from '../constants/ActionTypes'
import {
  Message$HumanPlayerSelectionPage,
  SelectHumanAvatar$ChangeCheckbox
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
        readonly language: lobby.Language
        readonly isHover: boolean
        readonly name: string
      }
    }
  }
  readonly command: MenuItem[]
  readonly menuItems: MenuItem[]
}
type Action =
  | Message$HumanPlayerSelectionPage
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
    case ActionTypes.Message.HUMAN_PLAYER_SELECTION_PAGE: {
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
          isHover,
          language: a.language,
          name: a.name
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
