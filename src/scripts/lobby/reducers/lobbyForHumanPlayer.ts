import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from '../types'
import {
  SocketMessage,
  Transition
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'

export interface State {
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly villageItems: lobby.Village[]
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
      types: [ActionTypes.Target.SHOW_BUILD_VILLAGE]
    },
    {
      id: 'Menu.showIdSearch',
      types: [ActionTypes.Target.SHOW_ID_SEARCH]
    },
    {
      id: 'Menu.showAdvancedSearch',
      types: [ActionTypes.Target.SHOW_ADVANCED_SEARCH]
    },
    {
      id: 'Menu.refresh',
      types: [ActionTypes.Target.REFRESH, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
    },
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.Target.SHOW_MAIN]
    }
  ],
  name: '',
  villageItems: []
}

const lobbyForHumanPlayer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.Target.REFRESH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.Target.REFRESH) && item.types.includes(ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER)) {
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
        case lobby.PayloadType.avatar: {
          const payload = action.payload

          return {
            ... state,
            image: payload.image,
            name: payload.name
          }
        }
        case lobby.PayloadType.lobby: {
          const payload = action.payload

          if (payload.lobby === 'human player') {
            return {
              ... state,
              menuItems: state.menuItems.map(item => {
                if (item.types.includes(ActionTypes.Target.REFRESH) && item.types.includes(ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER)) {
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
