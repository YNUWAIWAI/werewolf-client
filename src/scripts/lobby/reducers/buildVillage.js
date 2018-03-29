// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import type {ChangeAvatar, ChangeComment, ChangeHostName, ChangeMember, ChangeNumberOfPlayers, ChangeNumberOfRobots, ChangeVillageName} from '../actions'

export type State = {
  village: {
    villageName: string,
    member: Member,
    numberOfPlayers: number,
    numberOfRobots: number,
    numberOfHumans: number,
    avatar: string,
    comment: string
  }
}
type Action =
  | ChangeAvatar
  | ChangeComment
  | ChangeHostName
  | ChangeMember
  | ChangeNumberOfPlayers
  | ChangeNumberOfRobots
  | ChangeVillageName
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER}
  | {type: typeof ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER}

const initialState = {
  village: {
    villageName: 'Alice\'s village',
    hostName: 'Alice',
    member: 'A',
    numberOfPlayers: 15,
    numberOfRobots: 1,
    numberOfHumans: 14,
    avatar: 'fixed',
    comment: ''
  }
}

const buildVillage = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionTypes.CHANGE_AVATAR:
      return {
        ... state,
        village: {
          ... state.village,
          avatar: action.avatar
        }
      }
    case ActionTypes.CHANGE_COMMENT:
      return {
        ... state,
        village: {
          ... state.village,
          comment: action.comment
        }
      }
    case ActionTypes.CHANGE_HOST_NAME:
      return {
        ... state,
        village: {
          ... state.village,
          hostName: action.hostName
        }
      }
    case ActionTypes.CHANGE_MEMBER:
      return {
        ... state,
        village: {
          ... state.village,
          member: action.member
        }
      }
    case ActionTypes.CHANGE_NUMBER_OF_PLAYERS:
      if (state.village.numberOfHumans === 0 && action.numberOfPlayers < state.village.numberOfRobots) {
        return {
          ... state,
          village: {
            ... state.village,
            numberOfPlayers: action.numberOfPlayers,
            numberOfRobots: action.numberOfPlayers
          }
        }
      }

      return {
        ... state,
        village: {
          ... state.village,
          numberOfHumans: action.numberOfPlayers - state.village.numberOfRobots,
          numberOfPlayers: action.numberOfPlayers
        }
      }
    case ActionTypes.CHANGE_NUMBER_OF_ROBOTS:
      return {
        ... state,
        village: {
          ... state.village,
          numberOfHumans: state.village.numberOfPlayers - action.numberOfRobots,
          numberOfRobots: action.numberOfRobots
        }
      }
    case ActionTypes.CHANGE_VILLAGE_NAME:
      return {
        ... state,
        village: {
          ... state.village,
          villageName: action.villageName
        }
      }
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            text: 'Build',
            type: ActionTypes.BUILD_VILLAGE
          },
          {
            text: 'Return to Lobby for Human Player',
            type: ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER
          },
          {
            text: 'Return to the Main Page',
            type: ActionTypes.SHOW_MAIN
          }
        ],
        village: {
          ... state.village,
          isHuman: true
        }
      }
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return {
        ... state,
        menuItems: [
          {
            text: 'Build',
            type: ActionTypes.BUILD_VILLAGE
          },
          {
            text: 'Return to Lobby for Robot Player',
            type: ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER
          },
          {
            text: 'Return to the Main Page',
            type: ActionTypes.SHOW_MAIN
          }
        ],
        village: {
          ... state.village,
          isHuman: false
        }
      }
    default:
      return state
  }
}

export default buildVillage
