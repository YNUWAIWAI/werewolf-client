import * as ActionTypes from '../constants/ActionTypes'
import {played, waitingPage, waitingPage2} from './fakeServer'
import reducer, {initialState} from './waitingForPlayers'
import {lobby} from '../types'

describe('CHANGE_LOBBY', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.Lobby.human,
          type: ActionTypes.global.CHANGE_LOBBY
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.playGame',
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      }
    )
  })
  test('onymous audience', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.Lobby.audience,
          type: ActionTypes.global.CHANGE_LOBBY
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        isPlayer: false,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.playGame',
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      }
    )
  })
  test('robot player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.Lobby.robot,
          type: ActionTypes.global.CHANGE_LOBBY
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.playGame',
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      }
    )
  })
})
test('CONFIRM_KICK_OUT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        name: 'Alice',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        type: ActionTypes.global.CONFIRM_KICK_OUT_PLAYER
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      kickOutToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    }
  )
})
test('PLAY_GAME', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            id: 'Menu.playGame',
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      },
      {
        type: ActionTypes.Target.PLAY_GAME
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.playGame',
          isLoading: true,
          types: [ActionTypes.Target.PLAY_GAME]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
        }
      ]
    },
  )
})
test('SHOW_LOBBY_FOR_AUDIENCE', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      isPlayer: false,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.playGame',
          types: [ActionTypes.Target.PLAY_GAME]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
        }
      ]
    }
  )
})
test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      isPlayer: true,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.playGame',
          types: [ActionTypes.Target.PLAY_GAME]
        },
        {
          id: 'Menu.returnToLobbyForHumanPlayer',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
        }
      ]
    }
  )
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      isPlayer: true,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.playGame',
          types: [ActionTypes.Target.PLAY_GAME]
        },
        {
          id: 'Menu.returnToLobbyForRobotPlayer',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
        }
      ]
    }
  )
})
describe('socket/MESSAGE', () => {
  test('played', () => {
    expect(
      reducer(
        {
          ... initialState,
          menuItems: [
            {
              disabled: false,
              id: 'Menu.playGame',
              isLoading: true,
              types: [ActionTypes.Target.PLAY_GAME]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
            }
          ]
        },
        {
          payload: played,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        menuItems: [
          {
            disabled: false,
            id: 'Menu.playGame',
            isLoading: false,
            types: [ActionTypes.Target.PLAY_GAME]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
          }
        ]
      }
    )
  })
  describe('waitingPage', () => {
    test('isHost: true', () => {
      expect(
        reducer(
          {
            ... initialState,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.playGame',
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForRobotPlayer',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ]
          },
          {
            payload: waitingPage2,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toStrictEqual(
        {
          ... initialState,
          menuItems: [
            {
              disabled: false,
              id: 'Menu.playGame',
              types: [ActionTypes.Target.PLAY_GAME]
            },
            {
              id: 'Menu.returnToLobbyForRobotPlayer',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
            }
          ],
          players: [
            {
              avatarImage: '/assets/images/avatar/default/user.png',
              isAnonymous: true,
              isHost: true,
              isMe: true,
              name: 'Anonymous',
              token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
            },
            {
              avatarImage: 'https://werewolf.world/image/0.1/Friedel.jpg',
              isAnonymous: true,
              isHost: false,
              isMe: false,
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
              werehamster: 1,
              werewolf: 2
            }
          }
        }
      )
    })
    describe('isHost: false', () => {
      expect(
        reducer(
          {
            ... initialState,
            menuItems: [
              {
                disabled: true,
                id: 'Menu.playGame',
                types: [ActionTypes.Target.PLAY_GAME]
              },
              {
                id: 'Menu.returnToLobbyForRobotPlayer',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
              }
            ]
          },
          {
            payload: waitingPage,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toStrictEqual(
        {
          ... initialState,
          menuItems: [
            {
              disabled: true,
              id: 'Menu.playGame',
              types: [ActionTypes.Target.PLAY_GAME]
            },
            {
              id: 'Menu.returnToLobbyForRobotPlayer',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.LEAVE_WAITING_PAGE, ActionTypes.Target.SHOW_MAIN]
            }
          ],
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
              werehamster: 1,
              werewolf: 2
            }
          }
        }
      )
    })
  })
})

