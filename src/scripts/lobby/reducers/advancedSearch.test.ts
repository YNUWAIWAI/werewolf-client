import * as ActionTypes from '../constants/ActionTypes'
import {
  avatar,
  searchResult
} from './fakeServer'
import reducer, {initialState} from './advancedSearch'
import {lobby} from '../types'
import {message} from '../actions'

test('ADVANCED_SEARCH', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        searched: false
      },
      {
        type: ActionTypes.App.ADVANCED_SEARCH
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.search',
          isLoading: true,
          types: [ActionTypes.App.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.App.SHOW_MAIN]
        }
      ],
      searched: false
    }
  )
})
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
        ... initialState,
        header: 'Header.advancedSearch(audience)',
        isPlayer: false,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        searched: false
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
        ... initialState,
        header: 'Header.advancedSearch(human player)',
        isPlayer: true,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForHumanPlayer',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        searched: false
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
        ... initialState,
        header: 'Header.advancedSearch(audience)',
        isPlayer: false,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        searched: false
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
        ... initialState,
        header: 'Header.advancedSearch(robot player)',
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForRobotPlayer',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        searched: false
      }
    )
  })
})
test('advancedSearch/CHANGE_AVATAR', () => {
  expect(
    reducer(
      initialState,
      {
        avatar: lobby.Avatar.fixed,
        type: ActionTypes.AdvancedSearch.CHANGE_AVATAR
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
          type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
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
          type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
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
          type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
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
          type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
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
          type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
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
          type: ActionTypes.AdvancedSearch.CHANGE_CHECKBOX
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
        type: ActionTypes.AdvancedSearch.CHANGE_COMMENT
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
        type: ActionTypes.AdvancedSearch.CHANGE_HOST_NAME
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
        type: ActionTypes.AdvancedSearch.CHANGE_MAXIMUM
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
        type: ActionTypes.AdvancedSearch.CHANGE_MINIMUM
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
          type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY,
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
          type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY,
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
          type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY,
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
          type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY,
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
          type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY,
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
          type: ActionTypes.AdvancedSearch.CHANGE_VALIDITY,
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
        type: ActionTypes.AdvancedSearch.CHANGE_VILLAGE_NAME,
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
        type: ActionTypes.App.SHOW_ADVANCED_SEARCH
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
        type: ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE
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
          types: [ActionTypes.App.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.App.SHOW_MAIN]
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
        type: ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER
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
          types: [ActionTypes.App.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForHumanPlayer',
          types: [ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.App.SHOW_MAIN]
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
        type: ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER
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
          types: [ActionTypes.App.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForRobotPlayer',
          types: [ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.App.SHOW_MAIN]
        }
      ],
      villageItems: []
    }
  )
})
test('message/AVATAR', () => {
  expect(
    reducer(
      initialState,
      message.avatar(avatar)
    )
  ).toStrictEqual(
    {
      ... initialState,
      image: '/assets/images/avatar/default/user.png',
      name: 'Alice'
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
            id: 'Menu.search',
            isLoading: true,
            types: [ActionTypes.App.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ]
      },
      message.searchResult(searchResult)
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.search',
          isLoading: false,
          types: [ActionTypes.App.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.App.SHOW_MAIN]
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

