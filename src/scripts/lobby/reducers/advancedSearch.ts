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
    avatar: false,
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
    case ActionTypes.AdvancedSearch.SEARCH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.AdvancedSearch.SEARCH)) {
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
        checked: {
          ... state.checked,
          avatar: true
        },
        validity: {
          ... state.validity,
          avatar: false
        },
        value: {
          ... state.value,
          avatar: action.avatar
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_CHECKBOX:
      if (action.propName === 'avatar') {
        return state
      }

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
        checked: {
          ... state.checked,
          comment: action.valid
        },
        validity: {
          ... state.validity,
          comment: action.valid
        },
        value: {
          ... state.value,
          comment: action.comment
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_HOST_NAME:
      return {
        ... state,
        checked: {
          ... state.checked,
          hostName: action.valid
        },
        validity: {
          ... state.validity,
          hostName: action.valid
        },
        value: {
          ... state.value,
          hostName: action.hostName
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_MAXIMUM:
      return {
        ... state,
        checked: {
          ... state.checked,
          maximum: action.valid
        },
        validity: {
          ... state.validity,
          maximum: action.valid
        },
        value: {
          ... state.value,
          maximum: action.maximum
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_MINIMUM:
      return {
        ... state,
        checked: {
          ... state.checked,
          minimum: action.valid
        },
        validity: {
          ... state.validity,
          minimum: action.valid
        },
        value: {
          ... state.value,
          minimum: action.minimum
        }
      }
    case ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME:
      return {
        ... state,
        checked: {
          ... state.checked,
          villageName: action.valid
        },
        validity: {
          ... state.validity,
          villageName: action.valid
        },
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
                types: [ActionTypes.AdvancedSearch.SEARCH]
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
                types: [ActionTypes.AdvancedSearch.SEARCH]
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
                types: [ActionTypes.AdvancedSearch.SEARCH]
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
          if (item.types.includes(ActionTypes.AdvancedSearch.SEARCH)) {
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
