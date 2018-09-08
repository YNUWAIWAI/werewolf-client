// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './buildVillage'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

test('buildVillage/CHANGE_AVATAR', () => {
  expect(
    reducer(
      initialState,
      {
        avatar: 'random',
        type: ActionTypes.buildVillage.CHANGE_AVATAR
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'random',
        comment: '',
        hostName: 'Alice',
        isHuman: true,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
    }
  )
})
test('buildVillage/CHANGE_COMMENT', () => {
  expect(
    reducer(
      initialState,
      {
        comment: 'comment',
        type: ActionTypes.buildVillage.CHANGE_COMMENT
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: 'comment',
        hostName: 'Alice',
        isHuman: true,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
    }
  )
})
test('buildVillage/CHANGE_HOST_NAME', () => {
  expect(
    reducer(
      initialState,
      {
        hostName: 'hostName',
        type: ActionTypes.buildVillage.CHANGE_HOST_NAME
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'hostName',
        isHuman: true,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
    }
  )
})
test('buildVillage/CHANGE_MEMBER', () => {
  expect(
    reducer(
      initialState,
      {
        member: 'B',
        type: ActionTypes.buildVillage.CHANGE_MEMBER
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'Alice',
        isHuman: true,
        member: 'B',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
    }
  )
})
describe('buildVillage/CHANGE_NUMBER_OF_PLAYERS', () => {
  test('numberOfPlayers < numberOfRobots', () => {
    expect(
      reducer(
        {
          ... initialState,
          value: {
            ... initialState.value,
            numberOfHumans: 7,
            numberOfPlayers: 15,
            numberOfRobots: 8
          }
        },
        {
          numberOfPlayers: 5,
          type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_PLAYERS
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 0,
          numberOfPlayers: 5,
          numberOfRobots: 5,
          villageName: 'Alice\'s village'
        }
      }
    )
  })
  test('numberOfPlayers = numberOfRobots', () => {
    expect(
      reducer(
        {
          ... initialState,
          value: {
            ... initialState.value,
            numberOfHumans: 7,
            numberOfPlayers: 15,
            numberOfRobots: 8
          }
        },
        {
          numberOfPlayers: 8,
          type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_PLAYERS
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 0,
          numberOfPlayers: 8,
          numberOfRobots: 8,
          villageName: 'Alice\'s village'
        }
      }
    )
  })
  test('numberOfPlayers > numberOfRobots', () => {
    expect(
      reducer(
        {
          ... initialState,
          value: {
            ... initialState.value,
            numberOfHumans: 7,
            numberOfPlayers: 15,
            numberOfRobots: 8
          }
        },
        {
          numberOfPlayers: 10,
          type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_PLAYERS
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 2,
          numberOfPlayers: 10,
          numberOfRobots: 8,
          villageName: 'Alice\'s village'
        }
      }
    )
  })
})
test('buildVillage/CHANGE_NUMBER_OF_ROBOTS', () => {
  expect(
    reducer(
      initialState,
      {
        numberOfRobots: 8,
        type: ActionTypes.buildVillage.CHANGE_NUMBER_OF_ROBOTS
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'Alice',
        isHuman: true,
        member: 'A',
        numberOfHumans: 7,
        numberOfPlayers: 15,
        numberOfRobots: 8,
        villageName: 'Alice\'s village'
      }
    }
  )
})
describe('buildVillage/CHANGE_VALIDITY', () => {
  test('avatar', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'avatar',
          type: ActionTypes.buildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: false,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Alice\'s village'
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
          type: ActionTypes.buildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: false,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Alice\'s village'
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
          type: ActionTypes.buildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: false,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Alice\'s village'
        }
      }
    )
  })
  test('numberOfPlayers', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'numberOfPlayers',
          type: ActionTypes.buildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: false,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Alice\'s village'
        }
      }
    )
  })
  test('numberOfRobots', () => {
    expect(
      reducer(
        initialState,
        {
          propName: 'numberOfRobots',
          type: ActionTypes.buildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: false,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Alice\'s village'
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
          type: ActionTypes.buildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: false
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Alice\'s village'
        }
      }
    )
  })
})
test('buildVillage/CHANGE_VILLAGE_NAME', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.buildVillage.CHANGE_VILLAGE_NAME,
        villageName: 'villageName'
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'Alice',
        isHuman: true,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'villageName'
      }
    }
  )
})
test('LEAVE_WAITING_PAGE', () => {
  expect(
    reducer(
      {
        ... initialState,
        validity: {
          avatar: false,
          comment: false,
          hostName: false,
          numberOfPlayers: false,
          numberOfRobots: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: 'comment',
          hostName: 'hostName',
          isHuman: false,
          member: 'B',
          numberOfHumans: 7,
          numberOfPlayers: 14,
          numberOfRobots: 7,
          villageName: 'villageName'
        }
      },
      {
        type: ActionTypes.LEAVE_WAITING_PAGE
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'Alice',
        isHuman: true,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
    }
  )
})
test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  expect(
    reducer(
      {
        ... initialState,
        validity: {
          avatar: false,
          comment: false,
          hostName: false,
          numberOfPlayers: false,
          numberOfRobots: false,
          villageName: false
        },
        value: {
          ... initialState.value,
          isHuman: false
        }
      },
      {
        type: ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER
      }
    )
  ).toEqual(
    {
      menuItems: [
        {
          text: 'Build',
          types: [ActionTypes.BUILD_VILLAGE]
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
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'Alice',
        isHuman: true,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
    }
  )
})
test('SHOW_MAIN', () => {
  expect(
    reducer(
      {
        ... initialState,
        validity: {
          avatar: false,
          comment: false,
          hostName: false,
          numberOfPlayers: false,
          numberOfRobots: false,
          villageName: false
        },
        value: {
          avatar: 'random',
          comment: 'comment',
          hostName: 'hostName',
          isHuman: false,
          member: 'B',
          numberOfHumans: 7,
          numberOfPlayers: 14,
          numberOfRobots: 7,
          villageName: 'villageName'
        }
      },
      {
        type: ActionTypes.SHOW_MAIN
      }
    )
  ).toEqual(
    {
      menuItems: [],
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'Alice',
        isHuman: true,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
    }
  )
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  expect(
    reducer(
      {
        ... initialState,
        validity: {
          avatar: false,
          comment: false,
          hostName: false,
          numberOfPlayers: false,
          numberOfRobots: false,
          villageName: false
        },
        value: {
          ... initialState.value,
          isHuman: true
        }
      },
      {
        type: ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER
      }
    )
  ).toEqual(
    {
      menuItems: [
        {
          text: 'Build',
          types: [ActionTypes.BUILD_VILLAGE]
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
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: 'fixed',
        comment: '',
        hostName: 'Alice',
        isHuman: false,
        member: 'A',
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Alice\'s village'
      }
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
        {
          ... initialState,
          value: {
            ... initialState.value,
            hostName: 'hostName',
            villageName: 'villageName'
          }
        },
        {
          payload: avatarPayload,
          type: ActionTypes.SOCKET_MESSAGE
        }
      )
    ).toEqual(
      {
        menuItems: [],
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: 'fixed',
          comment: '',
          hostName: 'Alice',
          isHuman: true,
          member: 'A',
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Alice\'s village'
        }
      }
    )
  })
})

