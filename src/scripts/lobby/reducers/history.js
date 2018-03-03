import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  isPlayer: false,
  menuItems: [
    {
      text: ' Return to the Main Page',
      type: ActionTypes.SHOW_MAIN
    }
  ],
  villageItems: [
    {
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
    {
      "name": "Ruined village",
      "id": 2,
      "hostPlayer": {
        "name": "Anonymous",
        "isAnonymous": true
      },
      "playerSetting": {
        "number": 5,
        "current": 4,
        "robot": {
          "min": 2,
          "current": 2
        },
        "human": {
          "max": 3,
          "current": 2
        }
      },
      "roleSetting": {
        "villager": 3,
        "werewolf": 1,
        "seer": 1,
        "medium": 0,
        "madman": 0,
        "hunter": 0,
        "mason": 0,
        "werehumster": 0
      },
      "avatar": "random",
      "comment": "Open to beginners"
    }
  ]
}

const history = (state = initialState, action) => state

export default history
