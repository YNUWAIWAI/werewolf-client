// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './advancedSearch'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

test('ADVANCED_SEARCH', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            id: 'Menu.search',
            types: [ActionTypes.ADVANCED_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.SHOW_MAIN]
          }
        ]
      },
      {
        type: ActionTypes.ADVANCED_SEARCH
      }
    )
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: '',
      image: '',
      isPlayer: true,
      menuItems: [
        {
          id: 'Menu.search',
          isLoading: true,
          types: [ActionTypes.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: '',
        maximum: -1,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
    }
  )
})
test('advancedSearch/CHANGE_AVATAR', () => {
  expect(
    reducer(
      initialState,
      {
        avatar: 'fixed',
        type: ActionTypes.advancedSearch.CHANGE_AVATAR
      }
    )
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: '',
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: '',
        maximum: -1,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: true,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: true,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: true,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: true,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: true
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: '',
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: 'comment',
        hostName: '',
        maximum: -1,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
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
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: '',
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: 'hostName',
        maximum: -1,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
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
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: '',
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: '',
        maximum: 15,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
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
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: '',
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: '',
        maximum: -1,
        minimum: 4,
        villageName: ''
      },
      villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: true,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: true,
          maximum: false,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: true,
          minimum: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: true,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
    ).toEqual(
      {
        checked: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        },
        header: '',
        image: '',
        isPlayer: true,
        menuItems: [],
        name: '',
        searched: false,
        validity: {
          avatar: true,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: true
        },
        value: {
          avatar: 'random',
          comment: '',
          hostName: '',
          maximum: -1,
          minimum: -1,
          villageName: ''
        },
        villageItems: []
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
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: '',
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: '',
        maximum: -1,
        minimum: -1,
        villageName: 'villageName'
      },
      villageItems: []
    }
  )
})
test('SHOW_LOBBY_FOR_AUDIENCE', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.SHOW_LOBBY_FOR_AUDIENCE
      }
    )
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: 'Header.advancedSearch(audience)',
      image: '',
      isPlayer: false,
      menuItems: [
        {
          id: 'Menu.search',
          types: [ActionTypes.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: '',
        maximum: -1,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
    }
  )
})
test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER
      }
    )
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: 'Header.advancedSearch(human player)',
      image: '',
      isPlayer: true,
      menuItems: [
        {
          id: 'Menu.search',
          types: [ActionTypes.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForHumanPlayer',
          types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: '',
        maximum: -1,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
    }
  )
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER
      }
    )
  ).toEqual(
    {
      checked: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      header: 'Header.advancedSearch(robot player)',
      image: '',
      isPlayer: true,
      menuItems: [
        {
          id: 'Menu.search',
          types: [ActionTypes.ADVANCED_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForRobotPlayer',
          types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      validity: {
        avatar: true,
        comment: false,
        hostName: false,
        maximum: false,
        minimum: false,
        villageName: false
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: '',
        maximum: -1,
        minimum: -1,
        villageName: ''
      },
      villageItems: []
    }
  )
})
describe('socket/MESSAGE', () => {
  describe('avatar', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()
    const payload = {
      image: '/assets/images/avatar/default/user.png',
      lang: 'ja',
      name: 'Alice',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
      type: 'avatar'
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/avatar.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, payload)

          expect(validate).toBe(true)
        })
    })

    test('reduce correctly', () => {
      expect(
        reducer(
          initialState,
          {
            payload,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: '',
          image: '/assets/images/avatar/default/user.png',
          isPlayer: true,
          menuItems: [],
          name: 'Alice',
          searched: false,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: 'random',
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
          villageItems: []
        }
      )
    })
  })
  describe('searchResult', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()
    const payload = {
      error: null,
      type: 'searchResult',
      villages: [
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

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/searchResult.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, payload)

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
                id: 'Menu.search',
                isLoading: true,
                types: [ActionTypes.ADVANCED_SEARCH]
              },
              {
                id: 'Menu.returnToLobbyForAudience',
                types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
              },
              {
                id: 'Menu.returnToMainPage',
                types: [ActionTypes.SHOW_MAIN]
              }
            ]
          },
          {
            payload,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        {
          checked: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          header: '',
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.search',
              isLoading: false,
              types: [ActionTypes.ADVANCED_SEARCH]
            },
            {
              id: 'Menu.returnToLobbyForAudience',
              types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.SHOW_MAIN]
            }
          ],
          name: '',
          searched: true,
          validity: {
            avatar: true,
            comment: false,
            hostName: false,
            maximum: false,
            minimum: false,
            villageName: false
          },
          value: {
            avatar: 'random',
            comment: '',
            hostName: '',
            maximum: -1,
            minimum: -1,
            villageName: ''
          },
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
})

