import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from '../types'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {SocketMessage} from '../actions'

export interface State {
  readonly initialValue: {
    readonly language: lobby.Language
    readonly userEmail: string
    readonly userName: string
  }
  readonly menuItems: MenuItem[]
}
type Action =
  | SocketMessage

export const initialState: State = {
  initialValue: {
    language: lobby.Language.ja,
    userEmail: 'example@example.com',
    userName: 'user name'
  },
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.Target.SHOW_MAIN]
    }
  ]
}
const settings = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload.type) {
        case lobby.PayloadType.settings: {
          const payload = action.payload

          return {
            ... state,
            initialValue: {
              language: payload.lang,
              userEmail: payload.userEmail,
              userName: payload.userName
            }
          }
        }
        default:
          return state
      }
    }
    default:
      return state
  }
}

export default settings
