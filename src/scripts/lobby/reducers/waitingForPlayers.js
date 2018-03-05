import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  isPlayer: true,
  village: {
    "name": "Fairytale village",
    "id": 1,
    "hostPlayer": {
      "name": "Anonymous",
      "isAnonymous": true
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
    "avatar": "random",
    "comment": "Experts recommended"
  },
  players: [
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3301",
      "name": "Anonymous",
      "avatarImage": null,
      "isAnonymous": true,
      "isHost": true,
      "isMe": false
    },
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3302",
      "name": "Cathy",
      "avatarImage": "https://werewolf.world/image/0.1/Friedel.jpg",
      "isAnonymous": true,
      "isHost": false,
      "isMe": true
    },
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3303",
      "name": "Anonymous",
      "avatarImage": null,
      "isAnonymous": true,
      "isHost": false,
      "isMe": false
    },
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3304",
      "name": "Anonymous",
      "avatarImage": null,
      "isAnonymous": true,
      "isHost": false,
      "isMe": false
    },
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3305",
      "name": "Anonymous",
      "avatarImage": null,
      "isAnonymous": true,
      "isHost": false,
      "isMe": false
    },
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3306",
      "name": "Anonymous",
      "avatarImage": null,
      "isAnonymous": true,
      "isHost": false,
      "isMe": false
    },
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3307",
      "name": "Anonymous",
      "avatarImage": null,
      "isAnonymous": true,
      "isHost": false,
      "isMe": false
    },
    {
      "token": "3F2504E0-4F89-11D3-9A0C-0305E82C3308",
      "name": "Anonymous",
      "avatarImage": null,
      "isAnonymous": true,
      "isHost": false,
      "isMe": false
    }
  ]
}
const waitingForPlayers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER:
      return Object.assign(
        {},
        state,
        {
          menuItems: [
            {
              text: 'Play',
              type: ActionTypes.PLAY_GAME
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
              text: 'Play',
              type: ActionTypes.PLAY_GAME
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

export default waitingForPlayers
