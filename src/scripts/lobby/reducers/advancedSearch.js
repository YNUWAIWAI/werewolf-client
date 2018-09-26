// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {
  AdvancedSearch$ChangeAvatar,
  AdvancedSearch$ChangeCheckbox,
  AdvancedSearch$ChangeComment,
  AdvancedSearch$ChangeHostName,
  AdvancedSearch$ChangeMaximum,
  AdvancedSearch$ChangeMinimum,
  AdvancedSearch$ChangeValidity,
  AdvancedSearch$ChangeVillageName,
  SocketMessage,
  Transition
} from '../actions'
import type {Avatar, MenuItem, Payload$Avatar, Payload$SearchResult, Village} from 'lobby'

export type State = {
  +checked: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +maximum: boolean,
    +minimum: boolean,
    +villageName: boolean
  },
  +header: string,
  +image: string,
  +isPlayer: boolean,
  +menuItems: MenuItem[],
  +name: string,
  +validity: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +maximum: boolean,
    +minimum: boolean,
    +villageName: boolean
  },
  +value: {
    +avatar: Avatar,
    +comment: string,
    +hostName: string,
    +maximum: number,
    +minimum: number,
    +villageName: string
  },
  +villageItems: Village[]
}
type Action =
  | AdvancedSearch$ChangeAvatar
  | AdvancedSearch$ChangeCheckbox
  | AdvancedSearch$ChangeComment
  | AdvancedSearch$ChangeHostName
  | AdvancedSearch$ChangeMaximum
  | AdvancedSearch$ChangeMinimum
  | AdvancedSearch$ChangeValidity
  | AdvancedSearch$ChangeVillageName
  | SocketMessage
  | Transition

export const initialState = {
  checked: {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  },
  header: '',
  image: '',
  isPlayer: true,
  menuItems: [],
  name: '',
  validity: {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  },
  value: {
    avatar: 'random',
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
    case ActionTypes.ADVANCED_SEARCH:
      return {
        ... state,
        menuItems: state.menuItems.map(item => {
          if (item.types.includes(ActionTypes.ADVANCED_SEARCH)) {
            return {
              ... item,
              isLoading: true
            }
          }

          return item
        })
      }
    case ActionTypes.advancedSearch.CHANGE_AVATAR:
      return {
        ... state,
        value: {
          ... state.value,
          avatar: action.avatar
        }
      }
    case ActionTypes.advancedSearch.CHANGE_CHECKBOX:
      return {
        ... state,
        checked: {
          ... state.checked,
          [action.propName]: action.checked
        }
      }
    case ActionTypes.advancedSearch.CHANGE_COMMENT:
      return {
        ... state,
        value: {
          ... state.value,
          comment: action.comment
        }
      }
    case ActionTypes.advancedSearch.CHANGE_HOST_NAME:
      return {
        ... state,
        value: {
          ... state.value,
          hostName: action.hostName
        }
      }
    case ActionTypes.advancedSearch.CHANGE_MAXIMUM:
      return {
        ... state,
        value: {
          ... state.value,
          maximum: action.maximum
        }
      }
    case ActionTypes.advancedSearch.CHANGE_MINIMUM:
      return {
        ... state,
        value: {
          ... state.value,
          minimum: action.minimum
        }
      }
    case ActionTypes.advancedSearch.CHANGE_VALIDITY:
      return {
        ... state,
        validity: {
          ... state.validity,
          [action.propName]: action.validity
        }
      }
    case ActionTypes.advancedSearch.CHANGE_VILLAGE_NAME:
      return {
        ... state,
        value: {
          ... state.value,
          villageName: action.villageName
        }
      }
    case ActionTypes.SHOW_ADVANCED_SEARCH:
      return {
        ... state,
        checked: initialState.checked,
        validity: initialState.validity,
        value: initialState.value
      }
    case ActionTypes.SHOW_LOBBY_FOR_AUDIENCE:
      return {
        ... state,
        header: 'Audience\'s Advanced Search',
        isPlayer: false,
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.ADVANCED_SEARCH]
          },
          {
            text: 'Return to Lobby for Audience',
            types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        header: 'Human Player\'s Advanced Search',
        isPlayer: true,
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.ADVANCED_SEARCH]
          },
          {
            text: 'Return to Lobby for Human Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        villageItems: []
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        header: 'Robot Player\'s Advanced Search',
        isPlayer: true,
        menuItems: [
          {
            text: 'Search',
            types: [ActionTypes.ADVANCED_SEARCH]
          },
          {
            text: 'Return to Lobby for Robot Player',
            types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        villageItems: []
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
        case 'searchResult': {
          const payload: Payload$SearchResult = action.payload

          return {
            ... state,
            menuItems: state.menuItems.map(item => {
              if (item.types.includes(ActionTypes.ADVANCED_SEARCH)) {
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
        default:
          return state
      }
    default:
      return state
  }
}

export default advancedSearch
