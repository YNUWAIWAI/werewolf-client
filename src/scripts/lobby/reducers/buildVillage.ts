import * as ActionTypes from '../constants/ActionTypes'
import {
  BuildVillage,
  ChangeLobby,
  Message,
  Transition
} from '../actions'
import {MenuItemProps as MenuItem} from '../components/organisms/Menu'
import {getAnonymousVillageName} from '../util'
import {lobby} from '../types'

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
  | BuildVillage.ChangeAvatar
  | BuildVillage.ChangeComment
  | BuildVillage.ChangeMember
  | BuildVillage.ChangeNumberOfPlayers
  | BuildVillage.ChangeNumberOfRobots
  | BuildVillage.ChangeVillageName
  | ChangeLobby
  | Message.Avatar
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
    numberOfHumans: 15,
    numberOfPlayers: 15,
    numberOfRobots: 0,
    villageName: 'Cursed village'
  }
}
const buildVillage = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.App.CHANGE_LOBBY:
      switch (action.lobby) {
        case lobby.LobbyType.human:
          return {
            ... state,
            menuItems: [
              {
                id: 'Menu.buildVillage',
                types: [ActionTypes.BuildVillage.BUILD]
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
            validity: initialState.validity,
            value: {
              ... state.value,
              isHuman: true
            }
          }
        case lobby.LobbyType.robot:
          return {
            ... state,
            menuItems: [
              {
                id: 'Menu.buildVillage',
                types: [ActionTypes.BuildVillage.BUILD]
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
            validity: initialState.validity,
            value: {
              ... state.value,
              isHuman: false
            }
          }
        default:
          return state
      }
    case ActionTypes.BuildVillage.CHANGE_AVATAR:
      if (action.avatar === lobby.Avatar.fixed) {
        return {
          ... state,
          validity: {
            ... state.validity,
            avatar: action.valid
          },
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
        validity: {
          ... state.validity,
          avatar: action.valid
        },
        value: {
          ... state.value,
          avatar: action.avatar,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.BuildVillage.CHANGE_COMMENT:
      return {
        ... state,
        validity: {
          ... state.validity,
          comment: action.valid
        },
        value: {
          ... state.value,
          comment: action.comment
        }
      }
    case ActionTypes.BuildVillage.CHANGE_MEMBER:
      return {
        ... state,
        value: {
          ... state.value,
          member: action.member
        }
      }
    case ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS:
      if (action.numberOfPlayers < state.value.numberOfRobots) {
        return {
          ... state,
          validity: {
            ... state.validity,
            numberOfPlayers: action.valid
          },
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
        validity: {
          ... state.validity,
          numberOfPlayers: action.valid
        },
        value: {
          ... state.value,
          numberOfHumans: action.numberOfPlayers - state.value.numberOfRobots,
          numberOfPlayers: action.numberOfPlayers
        }
      }
    case ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS:
      return {
        ... state,
        validity: {
          ... state.validity,
          numberOfRobots: action.valid
        },
        value: {
          ... state.value,
          numberOfHumans: state.value.numberOfPlayers - action.numberOfRobots,
          numberOfRobots: action.numberOfRobots
        }
      }
    case ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME:
      return {
        ... state,
        validity: {
          ... state.validity,
          villageName: action.valid
        },
        value: {
          ... state.value,
          villageName: action.villageName
        }
      }
    case ActionTypes.WaitingPage.LEAVE_WAITING_PAGE:
      return {
        ... state,
        validity: initialState.validity,
        value: {
          ... initialState.value,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            id: 'Menu.buildVillage',
            types: [ActionTypes.BuildVillage.BUILD]
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
        validity: initialState.validity,
        value: {
          ... state.value,
          isHuman: true
        }
      }
    case ActionTypes.App.SHOW_MAIN:
      return {
        ... state,
        validity: initialState.validity,
        value: {
          ... initialState.value,
          hostName: 'Anonymous',
          villageName: getAnonymousVillageName()
        }
      }
    case ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            id: 'Menu.buildVillage',
            types: [ActionTypes.BuildVillage.BUILD]
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
        validity: initialState.validity,
        value: {
          ... state.value,
          isHuman: false
        }
      }
    case ActionTypes.Message.AVATAR: {
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
}

export default buildVillage
