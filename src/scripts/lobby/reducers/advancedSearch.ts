import * as ActionTypes from '../constants/ActionTypes'
import {
  AdvancedSearch,
  ChangeLobby,
  Message,
  Transition
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {lobby} from '../types'

export interface State {
  readonly checked: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  }
  readonly header: string
  readonly image: string
  readonly isPlayer: boolean
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly searched: boolean
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly maximum: boolean
    readonly minimum: boolean
    readonly villageName: boolean
  }
  readonly value: {
    readonly avatar: lobby.Avatar
    readonly comment: string
    readonly hostName: string
    readonly maximum: number
    readonly minimum: number
    readonly villageName: string
  }
  readonly villageItems: lobby.Village[]
}
type Action =
  | AdvancedSearch.ChangeAvatar
  | AdvancedSearch.ChangeCheckbox
  | AdvancedSearch.ChangeComment
  | AdvancedSearch.ChangeHostName
  | AdvancedSearch.ChangeMaximum
  | AdvancedSearch.ChangeMinimum
  | AdvancedSearch.ChangeValidity
  | AdvancedSearch.ChangeVillageName
  | ChangeLobby
  | Message.Avatar
  | Message.SearchResult
  | Transition

export const initialState: State = {
  checked: {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  },
  header: '@dummy',
  image: '',
  isPlayer: true,
  menuItems: [],
  name: '',
  searched: false,
  validity: {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  },
  value: {
    avatar: lobby.Avatar.random,
    comment: '',
    hostName: '',
    maximum: -1,
    minimum: -1,
    villageName: ''
  },
  villageItems: []
}

const advancedSearch = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.ADVANCED_SEARCH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.App.ADVANCED_SEARCH)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        }),
        searched: false
      }
    case ActionTypes.AdvancedSearch.CHANGE_AVATAR:
      return {
        ... state,
        value: {
          ... state.value,
          avatar: action.avatar
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_CHECKBOX:
      return {
        ... state,
        checked: {
          ... state.checked,
          [action.propName]: action.checked
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_COMMENT:
      return {
        ... state,
        value: {
          ... state.value,
          comment: action.comment
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_HOST_NAME:
      return {
        ... state,
        value: {
          ... state.value,
          hostName: action.hostName
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_MAXIMUM:
      return {
        ... state,
        value: {
          ... state.value,
          maximum: action.maximum
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_MINIMUM:
      return {
        ... state,
        value: {
          ... state.value,
          minimum: action.minimum
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_VALIDITY:
      return {
        ... state,
        validity: {
          ... state.validity,
          [action.propName]: action.validity
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME:
      return {
        ... state,
        value: {
          ... state.value,
          villageName: action.villageName
        }
      }
    case ActionTypes.App.CHANGE_LOBBY:
      switch (action.lobby) {
        case lobby.LobbyType.anonymousAudience:
        case lobby.LobbyType.onymousAudience:
          return {
            ... state,
            header: 'Header.advancedSearch(audience)',
            isPlayer: false,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.App.ADVANCED_SEARCH]
              },
              {
                id: 'Menu.returnToLobbyForAudience',
                types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.App.SHOW_MAIN]
              }
            ],
            villageItems: []
          }
        case lobby.LobbyType.human:
          return {
            ... state,
            header: 'Header.advancedSearch(human player)',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.App.ADVANCED_SEARCH]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.App.SHOW_MAIN]
              }
            ],
            villageItems: []
          }
        case lobby.LobbyType.robot:
          return {
            ... state,
            header: 'Header.advancedSearch(robot player)',
            isPlayer: true,
            menuItems: [
              {
                id: 'Menu.search',
                types: [ActionTypes.App.ADVANCED_SEARCH]
              },
              {
                id: 'Menu.returnToLobbyForRobotPlayer',
                types: [ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.App.SHOW_MAIN]
              }
            ],
            villageItems: []
          }
        default:
          return state
      }
    case ActionTypes.App.SHOW_ADVANCED_SEARCH:
      return {
        ... state,
        checked: initialState.checked,
        searched: false,
        validity: initialState.validity,
        value: initialState.value
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        header: 'Header.advancedSearch(audience)',
        isPlayer: false,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        header: 'Header.advancedSearch(human player)',
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        header: 'Header.advancedSearch(robot player)',
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.Message.AVATAR: {
      const payload = action.payload

      return {
        ... state,
        image: payload.image,
        name: payload.name
      }
    }
    case ActionTypes.Message.SEARCH_RESULT: {
      const payload = action.payload

      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.App.ADVANCED_SEARCH)) {
            return {
              ... item,
              isLoading: false
            }
          }

          return item
        }),
        searched: true,
        villageItems: payload.villages
      }
    }
    default:
      return state
  }
}

export default advancedSearch
