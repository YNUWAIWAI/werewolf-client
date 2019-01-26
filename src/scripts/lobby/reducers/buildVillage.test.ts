/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import reducer, {initialState} from './buildVillage'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

describe('buildVillage/CHANGE_AVATAR', () => {
  test('fixed', () => {
    expect(
      reducer(
        initialState,
        {
          avatar: lobby.Avatar.fixed,
          type: ActionTypes.buildVillage.CHANGE_AVATAR
        }
      )
    ).toEqual(
      {
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.fixed,
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
  test('random', () => {
    expect(
      reducer(
        initialState,
        {
          avatar: lobby.Avatar.random,
          type: ActionTypes.buildVillage.CHANGE_AVATAR
        }
      )
    ).toEqual(
      {
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: expect.any(String)
        }
      }
    )
  })
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
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [],
      name: '',
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.random,
        comment: 'comment',
        hostName: 'Anonymous',
        isHuman: true,
        member: lobby.Member.A,
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Cursed Village'
      }
    }
  )
})
test('buildVillage/CHANGE_HOST_NAME', () => {
  expect(
    reducer(
      {
        ... initialState,
        value: {
          ... initialState.value,
          avatar: lobby.Avatar.fixed,
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        }
      },
      {
        hostName: 'hostName',
        type: ActionTypes.buildVillage.CHANGE_HOST_NAME
      }
    )
  ).toEqual(
    {
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [],
      name: '',
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.fixed,
        comment: '',
        hostName: 'hostName',
        isHuman: true,
        member: lobby.Member.A,
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
        member: lobby.Member.B,
        type: ActionTypes.buildVillage.CHANGE_MEMBER
      }
    )
  ).toEqual(
    {
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [],
      name: '',
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Anonymous',
        isHuman: true,
        member: lobby.Member.B,
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 0,
          numberOfPlayers: 5,
          numberOfRobots: 5,
          villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 0,
          numberOfPlayers: 8,
          numberOfRobots: 8,
          villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 2,
          numberOfPlayers: 10,
          numberOfRobots: 8,
          villageName: 'Cursed Village'
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
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [],
      name: '',
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Anonymous',
        isHuman: true,
        member: lobby.Member.A,
        numberOfHumans: 7,
        numberOfPlayers: 15,
        numberOfRobots: 8,
        villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: false,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: false,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: false,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: false,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: false,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Cursed Village'
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
        image: '',
        initialFixedValue: {
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        },
        menuItems: [],
        name: '',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: false
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Cursed Village'
        }
      }
    )
  })
})
test('buildVillage/CHANGE_VILLAGE_NAME', () => {
  expect(
    reducer(
      {
        ... initialState,
        value: {
          ... initialState.value,
          avatar: lobby.Avatar.fixed,
          hostName: 'Alice',
          villageName: 'Alice\'s village'
        }
      },
      {
        type: ActionTypes.buildVillage.CHANGE_VILLAGE_NAME,
        villageName: 'villageName'
      }
    )
  ).toEqual(
    {
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [],
      name: '',
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
        member: lobby.Member.A,
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
          avatar: lobby.Avatar.fixed,
          comment: 'comment',
          hostName: 'hostName',
          isHuman: false,
          member: lobby.Member.B,
          numberOfHumans: 7,
          numberOfPlayers: 14,
          numberOfRobots: 7,
          villageName: 'villageName'
        }
      },
      {
        type: ActionTypes.Target.LEAVE_WAITING_PAGE
      }
    )
  ).toEqual(
    {
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [],
      name: '',
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Anonymous',
        isHuman: true,
        member: lobby.Member.A,
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: expect.any(String)
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
        type: ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER
      }
    )
  ).toEqual(
    {
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [
        {
          id: 'Menu.buildVillage',
          types: [ActionTypes.Target.BUILD_VILLAGE]
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
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Anonymous',
        isHuman: true,
        member: lobby.Member.A,
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Cursed Village'
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
          avatar: lobby.Avatar.fixed,
          comment: 'comment',
          hostName: 'hostName',
          isHuman: false,
          member: lobby.Member.B,
          numberOfHumans: 7,
          numberOfPlayers: 14,
          numberOfRobots: 7,
          villageName: 'villageName'
        }
      },
      {
        type: ActionTypes.Target.SHOW_MAIN
      }
    )
  ).toEqual(
    {
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [],
      name: '',
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Anonymous',
        isHuman: true,
        member: lobby.Member.A,
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: expect.any(String)
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
        type: ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER
      }
    )
  ).toEqual(
    {
      image: '',
      initialFixedValue: {
        hostName: 'Alice',
        villageName: 'Alice\'s village'
      },
      menuItems: [
        {
          id: 'Menu.buildVillage',
          types: [ActionTypes.Target.BUILD_VILLAGE]
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
      validity: {
        avatar: true,
        comment: true,
        hostName: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      },
      value: {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Anonymous',
        isHuman: false,
        member: lobby.Member.A,
        numberOfHumans: 14,
        numberOfPlayers: 15,
        numberOfRobots: 1,
        villageName: 'Cursed Village'
      }
    }
  )
})
describe('scoket/MESSAGE', () => {
  const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
  const SERVER2CLIENT = `${BASE_URI}/server2client`
  const ajv = new Ajv()
  const payload: lobby.Payload = {
    image: '/assets/images/avatar/default/user.png',
    lang: lobby.Language.ja,
    name: 'Kevin',
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
    type: lobby.PayloadType.avatar
  }

  test('validate the JSON of avatar', async () => {
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
        image: '/assets/images/avatar/default/user.png',
        initialFixedValue: {
          hostName: 'Kevin',
          villageName: 'Kevin\'s village'
        },
        menuItems: [],
        name: 'Kevin',
        validity: {
          avatar: true,
          comment: true,
          hostName: true,
          numberOfPlayers: true,
          numberOfRobots: true,
          villageName: true
        },
        value: {
          avatar: lobby.Avatar.random,
          comment: '',
          hostName: 'Anonymous',
          isHuman: true,
          member: lobby.Member.A,
          numberOfHumans: 14,
          numberOfPlayers: 15,
          numberOfRobots: 1,
          villageName: 'Cursed Village'
        }
      }
    )
  })
})
