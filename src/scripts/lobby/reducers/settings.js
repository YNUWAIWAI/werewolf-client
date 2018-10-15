// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {Language, MenuItem, Payload$GetSettings} from 'lobby'
import type {SocketMessage} from '../actions'

export type State = {
  +initialValue: {
    +language: Language,
    +userEmail: string,
    +userName: string
  },
  +menuItems: MenuItem[]
}
type Action =
  | SocketMessage

export const initialState = {
  initialValue: {
    language: 'ja',
    userEmail: 'example@example.com',
    userName: 'user name'
  },
  menuItems: [
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.SHOW_MAIN]
    }
  ]
}
const settings = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.socket.MESSAGE: {
      switch (action.payload.type) {
        case 'settings': {
          const payload: Payload$GetSettings = action.payload

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
