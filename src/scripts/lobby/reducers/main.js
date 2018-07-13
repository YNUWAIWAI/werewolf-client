// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem, Payload$Name} from 'lobby'

export type State = {
  +image: string,
  +menuItems: MenuItem[],
  +name: string
}
type Action = void

export const initialState = {
  image: '',
  menuItems: [
    {
      text: 'Lobby for Audience',
      types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
    },
    {
      text: 'Lobby for Robot Player',
      types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
    },
    {
      text: 'Lobby for Human Player',
      types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      text: 'History',
      types: [ActionTypes.SHOW_HISTORY]
    },
    {
      text: 'Settings',
      types: [ActionTypes.SHOW_SETTINGS]
    }
  ],
  name: ''
}

const main = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.SOCKET_MESSAGE:
      switch (action.payload.type) {
        case 'name': {
          const payload: Payload$Name = action.payload

          return {
            ... state,
            image: payload.image,
            name: payload.name
          }
        }
        default:
          return state
      }
    default:
      return state
  }
}

export default main
