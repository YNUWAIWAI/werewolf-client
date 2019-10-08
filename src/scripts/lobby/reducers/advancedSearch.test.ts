import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from '../types'
import {
  avatar,
  searchResult
} from './fakeServer'
import reducer, {initialState} from './advancedSearch'

test('ADVANCED_SEARCH', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.Target.ADVANCED_SEARCH]
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
        searched: false
      },
      {
        type: ActionTypes.Target.ADVANCED_SEARCH
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.search',
          isLoading: true,
          types: [ActionTypes.Target.ADVANCED_SEARCH]
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
      searched: false
    }
  )
})
test('advancedSearch/CHANGE_AVATAR', () => {
  expect(
    reducer(
      initialState,
      {
        avatar: lobby.Avatar.fixed,
        type: ActionTypes.advancedSearch.CHANGE_AVATAR
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        avatar: lobby.Avatar.fixed
      }
    }
  )
})
describe('advancedSearch/CHANGE_CHECKBOX', () => {
  test('avatar', () => {
    expect(
      reducer(
        initialState,
        {
          checked: true,
          propName: 'avatar',
          type: ActionTypes.advancedSearch.CHANGE_CHECKBOX
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        checked: {
          ... initialState.checked,
          avatar: true
        }
      }
    )
  })
  test('comment', () => {
    expect(
      reducer(
        initialState,
        {
          checked: true,
          propName: 'comment',
          type: ActionTypes.advancedSearch.CHANGE_CHECKBOX
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        checked: {
          ... initialState.checked,
          comment: true
        }
      }
    )
  })
  test('hostName', () => {
    expect(
      reducer(
        initialState,
        {
          checked: true,
          propName: 'hostName',
          type: ActionTypes.advancedSearch.CHANGE_CHECKBOX
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        checked: {
          ... initialState.checked,
          hostName: true
        }
      }
    )
  })
  test('maximum', () => {
    expect(
      reducer(
        initialState,
        {
          checked: true,
          propName: 'maximum',
          type: ActionTypes.advancedSearch.CHANGE_CHECKBOX
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        checked: {
          ... initialState.checked,
          maximum: true
        }
      }
    )
  })
  test('minimum', () => {
    expect(
      reducer(
        initialState,
        {
          checked: true,
          propName: 'minimum',
          type: ActionTypes.advancedSearch.CHANGE_CHECKBOX
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        checked: {
          ... initialState.checked,
          minimum: true
        }
      }
    )
  })
  test('villageName', () => {
    expect(
      reducer(
        initialState,
        {
          checked: true,
          propName: 'villageName',
          type: ActionTypes.advancedSearch.CHANGE_CHECKBOX
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        checked: {
          ... initialState.checked,
          villageName: true
        }
      }
    )
  })
})
test('advancedSearch/CHANGE_COMMENT', () => {
  expect(
    reducer(
      initialState,
      {
        comment: 'comment',
        type: ActionTypes.advancedSearch.CHANGE_COMMENT
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        comment: 'comment'
      }
    }
  )
})
test('advancedSearch/CHANGE_HOST_NAME', () => {
  expect(
    reducer(
      initialState,
      {
        hostName: 'hostName',
        type: ActionTypes.advancedSearch.CHANGE_HOST_NAME
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        hostName: 'hostName'
      }
    }
  )
})
test('advancedSearch/CHANGE_MAXIMUM', () => {
  expect(
    reducer(
      initialState,
      {
        maximum: 15,
        type: ActionTypes.advancedSearch.CHANGE_MAXIMUM
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        maximum: 15
      }
    }
  )
})
test('advancedSearch/CHANGE_MINIMUM', () => {
  expect(
    reducer(
      initialState,
      {
        minimum: 4,
        type: ActionTypes.advancedSearch.CHANGE_MINIMUM
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        minimum: 4
      }
    }
  )
})
describe('advancedSearch/CHANGE_VALIDITY', () => {
  test('avatar', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'avatar',
          type: ActionTypes.advancedSearch.CHANGE_VALIDITY,
          validity: true
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          avatar: true
        }
      }
    )
  })
  test('comment', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'comment',
          type: ActionTypes.advancedSearch.CHANGE_VALIDITY,
          validity: true
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          comment: true
        }
      }
    )
  })
  test('hostName', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'hostName',
          type: ActionTypes.advancedSearch.CHANGE_VALIDITY,
          validity: true
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          hostName: true
        }
      }
    )
  })
  test('maximum', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'maximum',
          type: ActionTypes.advancedSearch.CHANGE_VALIDITY,
          validity: true
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          maximum: true
        }
      }
    )
  })
  test('minimum', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'minimum',
          type: ActionTypes.advancedSearch.CHANGE_VALIDITY,
          validity: true
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          minimum: true
        }
      }
    )
  })
  test('villageName', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'villageName',
          type: ActionTypes.advancedSearch.CHANGE_VALIDITY,
          validity: true
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          villageName: true
        }
      }
    )
  })
})
test('advancedSearch/CHANGE_VILLAGE_NAME', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.advancedSearch.CHANGE_VILLAGE_NAME,
        villageName: 'villageName'
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        villageName: 'villageName'
      }
    }
  )
})
test('SHOW_ADVANCED_SEARCH', () => {
  expect(
    reducer(
      {
        ... initialState,
        checked: {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        },
        searched: true,
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: 'comment',
          hostName: 'hostName',
          maximum: 10,
          minimum: 5,
          villageName: 'Cursed Village'
        }
      },
      {
        type: ActionTypes.Target.SHOW_ADVANCED_SEARCH
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      searched: false
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
      ... initialState,
      header: 'Header.advancedSearch(audience)',
      isPlayer: false,
      menuItems: [
        {
          id: 'Menu.search',
          types: [ActionTypes.Target.ADVANCED_SEARCH]
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
      ... initialState,
      header: 'Header.advancedSearch(human player)',
      isPlayer: true,
      menuItems: [
        {
          id: 'Menu.search',
          types: [ActionTypes.Target.ADVANCED_SEARCH]
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
      ... initialState,
      header: 'Header.advancedSearch(robot player)',
      isPlayer: true,
      menuItems: [
        {
          id: 'Menu.search',
          types: [ActionTypes.Target.ADVANCED_SEARCH]
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
    ).toStrictEqual(
      {
        ... initialState,
        image: '/assets/images/avatar/default/user.png',
        name: 'Alice'
      }
    )
  })
  describe('searchResult', () => {
    expect(
      reducer(
        {
          ... initialState,
          menuItems: [
            {
              id: 'Menu.search',
              isLoading: true,
              types: [ActionTypes.Target.ADVANCED_SEARCH]
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
          payload: searchResult,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        menuItems: [
          {
            id: 'Menu.search',
            isLoading: false,
            types: [ActionTypes.Target.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.global.SHOW_MAIN]
          }
        ],
        searched: true,
        villageItems: [
          {
            avatar: 'fixed',
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

