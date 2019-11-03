import * as ActionTypes from '../constants/ActionTypes'
import {
  avatar,
  searchResult
} from './fakeServer'
import reducer, {initialState} from './idSearch'
import {lobby} from '../types'

describe('CHANGE_LOBBY', () => {
  test('anonymousAudience', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.LobbyType.anonymousAudience,
          type: ActionTypes.App.CHANGE_LOBBY
        }
      )
    ).toStrictEqual(
      {
        header: 'Header.idSearch(audience)',
        id: -1,
        image: '',
        isPlayer: false,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        name: '',
        searched: false,
        villageItems: []
      }
    )
  })
  test('human', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.LobbyType.human,
          type: ActionTypes.App.CHANGE_LOBBY
        }
      )
    ).toStrictEqual(
      {
        header: 'Header.idSearch(human player)',
        id: -1,
        image: '',
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        name: '',
        searched: false,
        villageItems: []
      }
    )
  })
  test('onymousAudience', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.LobbyType.onymousAudience,
          type: ActionTypes.App.CHANGE_LOBBY
        }
      )
    ).toStrictEqual(
      {
        header: 'Header.idSearch(audience)',
        id: -1,
        image: '',
        isPlayer: false,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        name: '',
        searched: false,
        villageItems: []
      }
    )
  })
  test('robot', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.LobbyType.robot,
          type: ActionTypes.App.CHANGE_LOBBY
        }
      )
    ).toStrictEqual(
      {
        header: 'Header.idSearch(robot player)',
        id: -1,
        image: '',
        isPlayer: true,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        name: '',
        searched: false,
        villageItems: []
      }
    )
  })

})
test('ID_SEARCH', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ]
      },
      {
        type: ActionTypes.Target.ID_SEARCH
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.search',
          isLoading: true,
          types: [ActionTypes.Target.ID_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.SHOW_MAIN]
        }
      ]
    }
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
      header: 'Header.idSearch(audience)',
      id: -1,
      image: '',
      isPlayer: false,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.search',
          types: [ActionTypes.Target.ID_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      villageItems: []
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
      header: 'Header.idSearch(human player)',
      id: -1,
      image: '',
      isPlayer: true,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.search',
          types: [ActionTypes.Target.ID_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForHumanPlayer',
          types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      villageItems: []
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
      header: 'Header.idSearch(robot player)',
      id: -1,
      image: '',
      isPlayer: true,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.search',
          types: [ActionTypes.Target.ID_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForRobotPlayer',
          types: [ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      villageItems: []
    }
  )
})
test('idSearch/CHANGE_SEARCH_ID', () => {
  expect(
    reducer(
      initialState,
      {
        id: 123,
        type: ActionTypes.IdSearch.CHANGE_SEARCH_ID
      }
    )
  ).toStrictEqual(
    {
      header: '',
      id: 123,
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      searched: false,
      villageItems: []
    }
  )
})
test('idSearch/CHANGE_VALIDITY', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ]
      },
      {
        propName: 'id',
        type: ActionTypes.IdSearch.CHANGE_VALIDITY,
        validity: true
      }
    )
  ).toStrictEqual(
    {
      header: '',
      id: -1,
      image: '',
      isPlayer: true,
      menuItems: [
        {
          disabled: false,
          id: 'Menu.search',
          types: [ActionTypes.Target.ID_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      villageItems: []
    }
  )
})
describe('socket/MESSAGE', () => {
  test('avatar', () => {
    expect(
      reducer(
        initialState,
        {
          payload: avatar,
          type: ActionTypes.Socket.MESSAGE
        }
      )
    ).toStrictEqual(
      {
        header: '',
        id: -1,
        image: '/assets/images/avatar/default/user.png',
        isPlayer: true,
        menuItems: [],
        name: 'Alice',
        searched: false,
        villageItems: []
      }
    )
  })
  test('searchResult', () => {
    expect(
      reducer(
        {
          ... initialState,
          menuItems: [
            {
              disabled: false,
              id: 'Menu.search',
              isLoading: true,
              types: [ActionTypes.Target.ID_SEARCH]
            },
            {
              id: 'Menu.returnToLobbyForHumanPlayer',
              types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.SHOW_MAIN]
            }
          ]
        },
        {
          payload: searchResult,
          type: ActionTypes.Socket.MESSAGE
        }
      )
    ).toStrictEqual(
      {
        header: '',
        id: -1,
        image: '',
        isPlayer: true,
        menuItems: [
          {
            disabled: false,
            id: 'Menu.search',
            isLoading: false,
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
          }
        ],
        name: '',
        searched: true,
        villageItems: [
          {
            avatar: lobby.Avatar.fixed,
            comment: null,
            hostPlayer: {
              isAnonymous: false,
              isHuman: true,
              name: 'Alice'
            },
            id: 1,
            idForSearching: 123,
            name: 'Alice\'s village',
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
        ]
      }
    )
  })
})
