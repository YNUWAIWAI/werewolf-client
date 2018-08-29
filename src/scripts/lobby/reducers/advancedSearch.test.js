// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './advancedSearch'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

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
      header: 'Audience\'s Advanced Search',
      image: '',
      isPlayer: false,
      menuItems: [
        {
          text: 'Search',
          types: [ActionTypes.ADVANCED_SEARCH]
        },
        {
          text: 'Return to Lobby for Audience',
          types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
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
      header: 'Human Player\'s Advanced Search',
      image: '',
      isPlayer: true,
      menuItems: [
        {
          text: 'Search',
          types: [ActionTypes.ADVANCED_SEARCH]
        },
        {
          text: 'Return to Lobby for Human Player',
          types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
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
      header: 'Robot Player\'s Advanced Search',
      image: '',
      isPlayer: true,
      menuItems: [
        {
          text: 'Search',
          types: [ActionTypes.ADVANCED_SEARCH]
        },
        {
          text: 'Return to Lobby for Robot Player',
          types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
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
describe('SOCKET_MESSAGE', () => {
  const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
  const SERVER2CLIENT = `${BASE_URI}/server2client`
  const ajv = new Ajv()
  const avatarPayload = {
    error: null,
    image: '/assets/images/avatar/default/user.png',
    name: 'Alice',
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
    type: 'avatar'
  }

  test('validate the JSON of avatar', async () => {
    expect.hasAssertions()
    await fetch(`${SERVER2CLIENT}/avatar.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, avatarPayload)

        expect(validate).toBe(true)
      })
  })

  test('reduce correctly', () => {
    expect(
      reducer(
        initialState,
        {
          payload: avatarPayload,
          type: ActionTypes.SOCKET_MESSAGE
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

