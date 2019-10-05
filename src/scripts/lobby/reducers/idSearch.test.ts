import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from '../types'
import {
  avatar,
  searchResult
} from './fakeServer'
import reducer, {initialState} from './idSearch'

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
  ).toEqual(
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
  ).toEqual(
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
  ).toEqual(
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
  ).toEqual(
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
        type: ActionTypes.idSearch.CHANGE_SEARCH_ID
      }
    )
  ).toEqual(
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
        type: ActionTypes.idSearch.CHANGE_VALIDITY,
        validity: true
      }
    )
  ).toEqual(
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
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(
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
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(
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
