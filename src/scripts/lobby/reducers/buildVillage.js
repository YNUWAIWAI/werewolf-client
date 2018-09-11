// @flow
import * as ActionTypes from '../constants/ActionTypes'
import type {Avatar, Member, MenuItem, Payload$Avatar} from 'lobby'
import type {
  BuildVillage$ChangeAvatar,
  BuildVillage$ChangeComment,
  BuildVillage$ChangeHostName,
  BuildVillage$ChangeMember,
  BuildVillage$ChangeNumberOfPlayers,
  BuildVillage$ChangeNumberOfRobots,
  BuildVillage$ChangeValidity,
  BuildVillage$ChangeVillageName,
  SocketMessage
} from '../actions'

export type State = {
  +initialFixedValue: {
    hostName: string,
    villageName: string
  },
  +menuItems: MenuItem[],
  +validity: {
    +avatar: boolean,
    +comment: boolean,
    +hostName: boolean,
    +numberOfPlayers: boolean,
    +numberOfRobots: boolean,
    +villageName: boolean
  },
  +value: {
    +avatar: Avatar,
    +comment: string,
    +hostName: string,
    +isHuman: boolean,
    +member: Member,
    +numberOfHumans: number,
    +numberOfPlayers: number,
    +numberOfRobots: number,
    +villageName: string
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
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER}

export const initialState = {
  initialFixedValue: {
    hostName: 'Alice',
    villageName: 'Alice\'s village'
  },
  menuItems: [],
  validity: {
    avatar: true,
    comment: true,
    hostName: true,
    numberOfPlayers: true,
    numberOfRobots: true,
    villageName: true
  },
  value: {
    avatar: 'random',
    comment: '',
    hostName: 'Anonymous',
    isHuman: true,
    member: 'A',
    numberOfHumans: 14,
    numberOfPlayers: 15,
    numberOfRobots: 1,
    villageName: 'Cursed Village'
  }
}
const anonymousVillageName = [
  'Cursed Village',
  'Secret Village',
  'Doubtful Village'
]
const getAnonymousVillageName = () => anonymousVillageName[Math.floor(Math.random() * anonymousVillageName.length)]
const buildVillage = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.buildVillage.CHANGE_AVATAR:
      if (action.avatar === 'fixed') {
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
    case ActionTypes.LEAVE_WAITING_PAGE:
      return {
        ... state,
        validity: initialState.validity,
        value: {
          ... initialState.value,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            text: 'Build',
            types: [ActionTypes.BUILD_VILLAGE]
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
        validity: initialState.validity,
        value: {
          ... state.value,
          isHuman: true
        }
      }
    case ActionTypes.SHOW_MAIN:
      return {
        ... state,
        validity: initialState.validity,
        value: {
          ... initialState.value,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            text: 'Build',
            types: [ActionTypes.BUILD_VILLAGE]
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
        validity: initialState.validity,
        value: {
          ... state.value,
          isHuman: false
        }
      }
    case ActionTypes.SOCKET_MESSAGE:
      switch (action.payload.type) {
        case 'avatar': {
          const payload: Payload$Avatar = action.payload

          return {
            ... state,
            initialFixedValue: {
              hostName: payload.name,
              villageName: `${payload.name}'s village`
            }
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
