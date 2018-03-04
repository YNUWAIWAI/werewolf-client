import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  default: {
    "name": "Alice's village",
    "id": 1,
    "hostPlayer": {
      "name": "Alice",
      "isAnonymous": false
    },
    "playerSetting": {
      "number": 15,
      "current": 8,
      "robot": {
        "min": 7,
        "current": 3
      },
      "human": {
        "max": 8,
        "current": 5
      }
    },
    "roleSetting": {
      "villager": 6,
      "werewolf": 2,
      "seer": 1,
      "medium": 1,
      "madman": 1,
      "hunter": 1,
      "mason": 2,
      "werehumster": 1
    },
    "avatar": "fixed",
    "comment": null
  }
}

const buildVillage = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return Object.assign(
        {},
        state,
        {
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
