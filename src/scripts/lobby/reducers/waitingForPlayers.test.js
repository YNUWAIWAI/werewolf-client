// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './waitingForPlayers'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'
import {waitingPage} from './fakeServer'

describe('CHANGE_LOBBY', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: 'human player',
          type: ActionTypes.CHANGE_LOBBY
        }
      )
    ).toEqual(
      {
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.playGame',
            types: [ActionTypes.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
          }
        ],
        players: []
      }
    )
  })
  test('onymous audience', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: 'onymous audience',
          type: ActionTypes.CHANGE_LOBBY
        }
      )
    ).toEqual(
      {
        isPlayer: false,
        menuItems: [
          {
            id: 'Menu.playGame',
            types: [ActionTypes.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
          }
        ],
        players: []
      }
    )
  })
  test('robot player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: 'robot player',
          type: ActionTypes.CHANGE_LOBBY
        }
      )
    ).toEqual(
      {
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.playGame',
            types: [ActionTypes.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
          }
        ],
        players: []
      }
    )
  })
})
test('SHOW_LOBBY_FOR_AUDIENCE', () => {
  expect(
    reducer(
      {
        isPlayer: true,
        menuItems: [],
        players: []
      },
      {
        type: ActionTypes.SHOW_LOBBY_FOR_AUDIENCE
      }
    )
  ).toEqual(
    {
      isPlayer: false,
      menuItems: [
        {
          id: 'Menu.playGame',
          types: [ActionTypes.PLAY_GAME]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
        }
      ],
      players: []
    }
  )
})
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
          id: 'Menu.playGame',
          types: [ActionTypes.PLAY_GAME]
        },
        {
          id: 'Menu.returnToLobbyForHumanPlayer',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
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
          id: 'Menu.playGame',
          types: [ActionTypes.PLAY_GAME]
        },
        {
          id: 'Menu.returnToLobbyForRobotPlayer',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
        }
      ],
      players: []
    }
  )
})
describe('socket/MESSAGE', () => {
  describe('played', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()
    const playedPayload = {
      error: null,
      type: 'played'
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/played.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, playedPayload)

          expect(validate).toBe(true)
        })
    })

    test('reduce correctly', () => {
      expect(
        reducer(
          {
            ... initialState,
            menuItems: [
              {
                id: 'Menu.playGame',
                isLoading: true,
                types: [ActionTypes.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForHumanPlayer',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
              }
            ]
          },
          {
            payload: playedPayload,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        {
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.playGame',
              isLoading: false,
              types: [ActionTypes.PLAY_GAME]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.LEAVE_WAITING_PAGE, ActionTypes.SHOW_MAIN]
            }
          ],
          players: []
        }
      )
    })
  })
  describe('waitingPage', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/waitingPage.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, waitingPage)

          expect(validate).toBe(true)
        })
    })

    test('reduce correctly', () => {
      expect(
        reducer(
          {
            isPlayer: true,
            menuItems: [],
            players: []
          },
          {
            payload: waitingPage,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        {
          isPlayer: true,
          menuItems: [],
          players: [
            {
              avatarImage: '/assets/images/avatar/default/user.png',
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
              avatarImage: '/assets/images/avatar/default/user.png',
              isAnonymous: true,
              isHost: false,
              isMe: false,
              name: 'Anonymous',
              token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
            },
            {
              avatarImage: '/assets/images/avatar/default/user.png',
              isAnonymous: true,
              isHost: false,
              isMe: false,
              name: 'Anonymous',
              token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
            },
            {
              avatarImage: '/assets/images/avatar/default/user.png',
              isAnonymous: true,
              isHost: false,
              isMe: false,
              name: 'Anonymous',
              token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
            },
            {
              avatarImage: '/assets/images/avatar/default/user.png',
              isAnonymous: true,
              isHost: false,
              isMe: false,
              name: 'Anonymous',
              token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
            },
            {
              avatarImage: '/assets/images/avatar/default/user.png',
              isAnonymous: true,
              isHost: false,
              isMe: false,
              name: 'Anonymous',
              token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
            },
            {
              avatarImage: '/assets/images/avatar/default/user.png',
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
              isHuman: true,
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
  })
})
