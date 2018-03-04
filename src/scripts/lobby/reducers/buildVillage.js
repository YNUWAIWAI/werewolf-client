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
  },
  menuItems: [
    {
      text: 'Build',
      type: ActionTypes.BUILD_VILLAGE
    },
    {
      text: 'Return to the Main Page',
      type: ActionTypes.SHOW_MAIN
    }
  ]
}

const buildVillage = (state = initialState, action) => state

export default buildVillage
