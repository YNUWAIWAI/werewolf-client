import * as ActionTypes from '../constants/ActionTypes'
import {
  Message,
  Transition
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {lobby} from '../types'

export interface State {
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly villageItems: lobby.Village[]
}
type Action =
  | Message.Avatar
  | Message.Lobby
  | Transition

export const initialState: State = {
  image: '',
  isPlayer: true,
  menuItems: [
    {
      id: 'Menu.showBuildVillage',
      types: [ActionTypes.App.SHOW_BUILD_VILLAGE]
    },
    {
      id: 'Menu.showIdSearch',
      types: [ActionTypes.App.SHOW_ID_SEARCH]
    },
    {
      id: 'Menu.showAdvancedSearch',
      types: [ActionTypes.App.SHOW_ADVANCED_SEARCH]
    },
    {
      id: 'Menu.refresh',
      types: [ActionTypes.App.REFRESH, ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
    },
    {
      id: 'Menu.returnToMainPage',
      types: [ActionTypes.App.SHOW_MAIN]
    }
  ],
  name: '',
  villageItems: []
}

const lobbyForRobotPlayer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.REFRESH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.App.REFRESH) && item.types.includes(ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.Message.AVATAR: {
      const payload = action.payload

      return {
        ... state,
        image: payload.image,
        name: payload.name
      }
    }
    case ActionTypes.Message.LOBBY: {
      const payload = action.payload

      if (payload.lobby === 'robot player') {
        return {
          ... state,
          menuItems: state.menuItems.map(item => {
            if (item.types.includes(ActionTypes.App.REFRESH) && item.types.includes(ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER)) {
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
}

export default lobbyForRobotPlayer
