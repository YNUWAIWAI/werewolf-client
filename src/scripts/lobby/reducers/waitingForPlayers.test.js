// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer from './waitingForPlayers'
import {waitingPage} from './fakeServer'

test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  expect(
    reducer(
      {
        isPlayer: true,
        menuItems: [],
        players: []
      },
      {
        type: ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER
      }
    )
  ).toEqual(
    {
      isPlayer: true,
      menuItems: [
        {
          text: 'Play',
          types: [ActionTypes.PLAY_GAME]
        },
        {
          text: 'Return to Lobby for Human Player',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
        }
      ],
      players: []
    }
  )
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  expect(
    reducer(
      {
        isPlayer: true,
        menuItems: [],
        players: []
      },
      {
        type: ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER
      }
    )
  ).toEqual(
    {
      isPlayer: true,
      menuItems: [
        {
          text: 'Play',
          types: [ActionTypes.PLAY_GAME]
        },
        {
          text: 'Return to Lobby for Robot Player',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
        }
      ],
      players: []
    }
  )
})
test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      {
        isPlayer: true,
        menuItems: [],
        players: []
      },
      {
        payload: waitingPage,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual(
    {
      isPlayer: true,
      menuItems: [],
      players: [
        {
          avatarImage: null,
          isAnonymous: true,
          isHost: true,
          isMe: false,
          name: 'Anonymous',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        },
        {
          avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
          isAnonymous: true,
          isHost: false,
          isMe: true,
          name: 'Cathy',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
        },
        {
          avatarImage: null,
          isAnonymous: true,
          isHost: false,
          isMe: false,
          name: 'Anonymous',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
        },
        {
          avatarImage: null,
          isAnonymous: true,
          isHost: false,
          isMe: false,
          name: 'Anonymous',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        },
        {
          avatarImage: null,
          isAnonymous: true,
          isHost: false,
          isMe: false,
          name: 'Anonymous',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
        },
        {
          avatarImage: null,
          isAnonymous: true,
          isHost: false,
          isMe: false,
          name: 'Anonymous',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
        },
        {
          avatarImage: null,
          isAnonymous: true,
          isHost: false,
          isMe: false,
          name: 'Anonymous',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
        },
        {
          avatarImage: null,
          isAnonymous: true,
          isHost: false,
          isMe: false,
          name: 'Anonymous',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
        }
      ],
      village: {
        avatar: 'random',
        comment: 'Experts recommended',
        hostPlayer: {
          isAnonymous: true,
          name: 'Anonymous'
        },
        id: 1,
        idForSearching: 123,
        name: 'Fairytale village',
        playerSetting: {
          current: 8,
          human: {
            current: 5,
            max: 8
          },
          number: 15,
          robot: {
            current: 3,
            min: 7
          }
        },
        roleSetting: {
          hunter: 1,
          madman: 1,
          mason: 2,
          medium: 1,
          seer: 1,
          villager: 6,
          werehumster: 1,
          werewolf: 2
        }
      }
    }
  )
})
