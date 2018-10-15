// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {MenuItem, Payload$Avatar, Payload$Lobby, Village} from 'lobby'
import type {SocketMessage, Transition} from '../actions'

export type State = {
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +villageItems: Village[]
}
type Action =
  | SocketMessage
  | Transition

export const initialState = {
  image: '',
  isPlayer: true,
  menuItems: [
    {
      id: 'Menu.showBuildVillage',
      types: [ActionTypes.SHOW_BUILD_VILLAGE]
    },
    {
      id: 'Menu.showIdSearch',
      types: [ActionTypes.SHOW_ID_SEARCH]
    },
    {
      id: 'Menu.showAdvancedSearch',
      types: [ActionTypes.SHOW_ADVANCED_SEARCH]
    },
    {
      id: 'Menu.refresh',
      types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.SHOW_MAIN]
    }
  ],
  name: '',
  villageItems: []
}

const lobbyForHumanPlayer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.REFRESH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.REFRESH) && item.types.includes(ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case 'avatar': {
          const payload: Payload$Avatar = action.payload

          return {
            ... state,
            image: payload.image,
            name: payload.name
          }
        }
        case 'lobby': {
          const payload: Payload$Lobby = action.payload

          if (payload.lobby === 'human player') {
            return {
              ... state,
              menuItems: state.menuItems.map(item => {
                if (item.types.includes(ActionTypes.REFRESH) && item.types.includes(ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER)) {
                  return {
                    ... item,
                    isLoading: false
                  }
                }

                return item
              }),
              villageItems: payload.villages
            }
          }

          return state
        }
        default:
          return state
      }
    default:
      return state
  }
}

export default lobbyForHumanPlayer
