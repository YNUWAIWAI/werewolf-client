import * as ActionTypes from '../constants/ActionTypes'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {Message$Settings} from '../actions'
import {lobby} from '../types'

export interface State {
  readonly initialValue: {
    readonly language: lobby.Language
    readonly userEmail: string
    readonly userName: string
  }
  readonly menuItems: MenuItem[]
}
type Action =
  | Message$Settings

export const initialState: State = {
  initialValue: {
    language: lobby.Language.ja,
    userEmail: 'example@example.com',
    userName: 'user name'
  },
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ]
}
const settings = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Message.SETTINGS: {
      const payload = action.payload

      return {
        ... state,
        initialValue: {
          language: payload.language,
          userEmail: payload.userEmail,
          userName: payload.userName
        }
      }
    }
    default:
      return state
  }
}

export default settings
