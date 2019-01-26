/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import {
  BuildVillage$ChangeAvatar,
  BuildVillage$ChangeComment,
  BuildVillage$ChangeHostName,
  BuildVillage$ChangeMember,
  BuildVillage$ChangeNumberOfPlayers,
  BuildVillage$ChangeNumberOfRobots,
  BuildVillage$ChangeValidity,
  BuildVillage$ChangeVillageName,
  SocketMessage,
  Transition
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {getAnonymousVillageName} from '../util'

export interface State {
  readonly image: string
  readonly initialFixedValue: {
    hostName: string
    villageName: string
  }
  readonly menuItems: MenuItem[]
  readonly name: string
  readonly validity: {
    readonly avatar: boolean
    readonly comment: boolean
    readonly hostName: boolean
    readonly numberOfPlayers: boolean
    readonly numberOfRobots: boolean
    readonly villageName: boolean
  }
  readonly value: {
    readonly avatar: lobby.Avatar
    readonly comment: string
    readonly hostName: string
    readonly isHuman: boolean
    readonly member: lobby.Member
    readonly numberOfHumans: number
    readonly numberOfPlayers: number
    readonly numberOfRobots: number
    readonly villageName: string
  }
}
type Action =
  | BuildVillage$ChangeAvatar
  | BuildVillage$ChangeComment
  | BuildVillage$ChangeHostName
  | BuildVillage$ChangeMember
  | BuildVillage$ChangeNumberOfPlayers
  | BuildVillage$ChangeNumberOfRobots
  | BuildVillage$ChangeValidity
  | BuildVillage$ChangeVillageName
  | SocketMessage
  | Transition

export const initialState: State = {
  image: '',
  initialFixedValue: {
    hostName: 'Alice',
    villageName: 'Alice\'s village'
  },
  menuItems: [],
  name: '',
  validity: {
    avatar: true,
    comment: true,
    hostName: true,
    numberOfPlayers: true,
    numberOfRobots: true,
    villageName: true
  },
  value: {
    avatar: lobby.Avatar.random,
    comment: '',
    hostName: 'Anonymous',
    isHuman: true,
    member: lobby.Member.A,
    numberOfHumans: 14,
    numberOfPlayers: 15,
    numberOfRobots: 1,
    villageName: 'Cursed Village'
  }
}
const buildVillage = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.buildVillage.CHANGE_AVATAR:
      if (action.avatar === lobby.Avatar.fixed) {
        return {
          ... state,
          value: {
            ... state.value,
            avatar: action.avatar,
            hostName: state.initialFixedValue.hostName,
            villageName: state.initialFixedValue.villageName
          }
        }
      }

      return {
        ... state,
        value: {
          ... state.value,
          avatar: action.avatar,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.buildVillage.CHANGE_COMMENT:
      return {
        ... state,
        value: {
          ... state.value,
          comment: action.comment
        }
      }
    case ActionTypes.buildVillage.CHANGE_HOST_NAME:
      return {
        ... state,
        value: {
          ... state.value,
          hostName: action.hostName
        }
      }
    case ActionTypes.buildVillage.CHANGE_MEMBER:
      return {
        ... state,
        value: {
          ... state.value,
          member: action.member
        }
      }
    case ActionTypes.buildVillage.CHANGE_NUMBER_OF_PLAYERS:
      if (action.numberOfPlayers < state.value.numberOfRobots) {
        return {
          ... state,
          value: {
            ... state.value,
            numberOfHumans: 0,
            numberOfPlayers: action.numberOfPlayers,
            numberOfRobots: action.numberOfPlayers
          }
        }
      }

      return {
        ... state,
        value: {
          ... state.value,
          numberOfHumans: action.numberOfPlayers - state.value.numberOfRobots,
          numberOfPlayers: action.numberOfPlayers
        }
      }
    case ActionTypes.buildVillage.CHANGE_NUMBER_OF_ROBOTS:
      return {
        ... state,
        value: {
          ... state.value,
          numberOfHumans: state.value.numberOfPlayers - action.numberOfRobots,
          numberOfRobots: action.numberOfRobots
        }
      }
    case ActionTypes.buildVillage.CHANGE_VALIDITY:
      return {
        ... state,
        validity: {
          ... state.validity,
          [action.propName]: action.validity
        }
      }
    case ActionTypes.buildVillage.CHANGE_VILLAGE_NAME:
      return {
        ... state,
        value: {
          ... state.value,
          villageName: action.villageName
        }
      }
    case ActionTypes.Target.LEAVE_WAITING_PAGE:
      return {
        ... state,
        validity: initialState.validity,
        value: {
          ... initialState.value,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            id: 'Menu.buildVillage',
            types: [ActionTypes.Target.BUILD_VILLAGE]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        validity: initialState.validity,
        value: {
          ... state.value,
          isHuman: true
        }
      }
    case ActionTypes.Target.SHOW_MAIN:
      return {
        ... state,
        validity: initialState.validity,
        value: {
          ... initialState.value,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            id: 'Menu.buildVillage',
            types: [ActionTypes.Target.BUILD_VILLAGE]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        validity: initialState.validity,
        value: {
          ... state.value,
          isHuman: false
        }
      }
    case ActionTypes.socket.MESSAGE:
      switch (action.payload.type) {
        case lobby.PayloadType.avatar: {
          const payload = action.payload

          return {
            ... state,
            image: payload.image,
            initialFixedValue: {
              hostName: payload.name,
              villageName: `${payload.name}'s village`
            },
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

export default buildVillage
