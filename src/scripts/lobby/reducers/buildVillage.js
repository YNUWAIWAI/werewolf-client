import * as ActionTypes from '../constants/ActionTypes'

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

const buildVillage = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_AVATAR:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              avatar: action.avatar
            }
          )
        }
      )
    case ActionTypes.CHANGE_COMMENT:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              comment: action.comment
            }
          )
        }
      )
    case ActionTypes.CHANGE_HOST_NAME:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              hostName: action.hostName
            }
          )
        }
      )
    case ActionTypes.CHANGE_MEMBER:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              member: action.member
            }
          )
        }
      )
    case ActionTypes.CHANGE_NUMBER_OF_PLAYERS:
      if (state.village.numberOfHumans === 0 && action.numberOfPlayers < state.village.numberOfRobots) {
        return Object.assign(
          {},
          state,
          {
            village: Object.assign(
              {},
              state.village,
              {
                numberOfPlayers: action.numberOfPlayers,
                numberOfRobots: action.numberOfPlayers
              }
            )
          }
        )
      }

      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              numberOfHumans: action.numberOfPlayers - state.village.numberOfRobots,
              numberOfPlayers: action.numberOfPlayers,
            }
          )
        }
      )
    case ActionTypes.CHANGE_NUMBER_OF_ROBOTS:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              numberOfHumans: state.village.numberOfPlayers - action.numberOfRobots,
              numberOfRobots: action.numberOfRobots
            }
          )
        }
      )
    case ActionTypes.CHANGE_VILLAGE_NAME:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              villageName: action.villageName
            }
          )
        }
      )
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              isHuman: true
            }
          ),
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
          ]
        }
      )
    case ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER:
      return Object.assign(
        {},
        state,
        {
          village: Object.assign(
            {},
            state.village,
            {
              isHuman: false
            }
          ),
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
          ]
        }
      )
    default:
      return state
  }
}

export default buildVillage
