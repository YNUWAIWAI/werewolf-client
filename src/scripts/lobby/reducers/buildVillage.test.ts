import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './buildVillage'
import {avatar2} from './fakeServer'
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
      initialState
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
        validity: initialState.validity,
        value: {
          ... initialState.value,
          isHuman: true
        }
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
      initialState
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
        validity: initialState.validity,
        value: {
          ... initialState.value,
          isHuman: false
        }
      }
    )
  })
})
describe('buildVillage/CHANGE_AVATAR', () => {
  test('fixed', () => {
    expect(
      reducer(
        initialState,
        {
          avatar: lobby.Avatar.fixed,
          type: ActionTypes.BuildVillage.CHANGE_AVATAR
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        value: {
          ... initialState.value,
          avatar: lobby.Avatar.fixed,
          hostName: 'Alice',
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
          type: ActionTypes.BuildVillage.CHANGE_AVATAR
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        value: {
          ... initialState.value,
          avatar: lobby.Avatar.random,
          hostName: 'Anonymous',
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
        type: ActionTypes.BuildVillage.CHANGE_COMMENT
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
test('buildVillage/CHANGE_MEMBER', () => {
  expect(
    reducer(
      initialState,
      {
        member: lobby.Member.B,
        type: ActionTypes.BuildVillage.CHANGE_MEMBER
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        member: lobby.Member.B
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
          type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        value: {
          ... initialState.value,
          numberOfHumans: 0,
          numberOfPlayers: 5,
          numberOfRobots: 5
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
          type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        value: {
          ... initialState.value,
          numberOfHumans: 0,
          numberOfPlayers: 8,
          numberOfRobots: 8
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
          type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_PLAYERS
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        value: {
          ... initialState.value,
          numberOfHumans: 2,
          numberOfPlayers: 10,
          numberOfRobots: 8
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
        type: ActionTypes.BuildVillage.CHANGE_NUMBER_OF_ROBOTS
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        numberOfHumans: 7,
        numberOfPlayers: 15,
        numberOfRobots: 8
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
          type: ActionTypes.BuildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          avatar: false
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
          type: ActionTypes.BuildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          comment: false
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
          type: ActionTypes.BuildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          numberOfPlayers: false
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
          type: ActionTypes.BuildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          numberOfRobots: false
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
          type: ActionTypes.BuildVillage.CHANGE_VALIDITY,
          validity: false
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        validity: {
          ... initialState.validity,
          villageName: false
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
        type: ActionTypes.BuildVillage.CHANGE_VILLAGE_NAME,
        villageName: 'villageName'
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      value: {
        ... initialState.value,
        avatar: lobby.Avatar.fixed,
        hostName: 'Alice',
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
  ).toStrictEqual(
    {
      ... initialState,
      validity: initialState.validity,
      value: {
        ... initialState.value,
        hostName: 'Anonymous',
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
  ).toStrictEqual(
    {
      ... initialState,
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
      validity: initialState.validity,
      value: {
        ... initialState.value,
        isHuman: true
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
  ).toStrictEqual(
    {
      ... initialState,
      validity: initialState.validity,
      value: {
        ... initialState.value,
        hostName: 'Anonymous',
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
  ).toStrictEqual(
    {
      ... initialState,
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
      validity: initialState.validity,
      value: {
        ... initialState.value,
        isHuman: false
      }
    }
  )
})
describe('scoket/MESSAGE', () => {
  test('avatar', () => {
    expect(
      reducer(
        initialState,
        {
          payload: avatar2,
          type: ActionTypes.Socket.MESSAGE
        }
      )
    ).toStrictEqual(
      {
        ... initialState,
        image: '/assets/images/avatar/default/user.png',
        initialFixedValue: {
          hostName: 'Kevin',
          villageName: 'Kevin\'s village'
        },
        name: 'Kevin'
      }
    )
  })
})
