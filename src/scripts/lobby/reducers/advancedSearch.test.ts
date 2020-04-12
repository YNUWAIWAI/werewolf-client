import * as ActionTypes from '../constants/ActionTypes'
import {
  advancedSearch,
  message
} from '../actions'
import {
  avatar,
  searchResult
} from './fakeServer'
import reducer, {initialState} from './advancedSearch'
import {lobby} from '../types'

test('ADVANCED_SEARCH', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
        type: ActionTypes.AdvancedSearch.SEARCH
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.search',
          isLoading: true,
          types: [ActionTypes.AdvancedSearch.SEARCH]
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
      advancedSearch.changeAvatar(true)(lobby.Avatar.fixed)
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
        advancedSearch.changeCheckbox('avatar')(true)
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
        advancedSearch.changeCheckbox('comment')(true)
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
        advancedSearch.changeCheckbox('hostName')(true)
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
        advancedSearch.changeCheckbox('maximum')(true)
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
        advancedSearch.changeCheckbox('minimum')(true)
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
        advancedSearch.changeCheckbox('villageName')(true)
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
      advancedSearch.changeComment(true)('comment')
    )
  ).toStrictEqual(
    {
      ... initialState,
      checked: {
        ... initialState.checked,
        comment: true
      },
      validity: {
        ... initialState.validity,
        comment: true
      },
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
      advancedSearch.changeHostName(true)('hostName')
    )
  ).toStrictEqual(
    {
      ... initialState,
      checked: {
        ... initialState.checked,
        hostName: true
      },
      validity: {
        ... initialState.validity,
        hostName: true
      },
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
      advancedSearch.changeMaximum(true)(15)
    )
  ).toStrictEqual(
    {
      ... initialState,
      checked: {
        ... initialState.checked,
        maximum: true
      },
      validity: {
        ... initialState.validity,
        maximum: true
      },
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
      advancedSearch.changeMinimum(true)(4)
    )
  ).toStrictEqual(
    {
      ... initialState,
      checked: {
        ... initialState.checked,
        minimum: true
      },
      validity: {
        ... initialState.validity,
        minimum: true
      },
      value: {
        ... initialState.value,
        minimum: 4
      }
    }
  )
})
test('advancedSearch/CHANGE_VILLAGE_NAME', () => {
  expect(
    reducer(
      initialState,
      advancedSearch.changeVillageName(true)('villageName')
    )
  ).toStrictEqual(
    {
      ... initialState,
      checked: {
        ... initialState.checked,
        villageName: true
      },
      validity: {
        ... initialState.validity,
        villageName: true
      },
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
          types: [ActionTypes.AdvancedSearch.SEARCH]
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
          types: [ActionTypes.AdvancedSearch.SEARCH]
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
          types: [ActionTypes.AdvancedSearch.SEARCH]
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
      image: 'https://werewolf.world/image/0.3/user.jpg',
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
            types: [ActionTypes.AdvancedSearch.SEARCH]
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
          types: [ActionTypes.AdvancedSearch.SEARCH]
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

