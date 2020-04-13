import * as ActionTypes from '../constants/ActionTypes'
import {
  buildVillage,
  message
} from '../actions'
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
            types: [ActionTypes.BuildVillage.BUILD]
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
            types: [ActionTypes.BuildVillage.BUILD]
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
        buildVillage.changeAvatar(true)(lobby.Avatar.fixed)
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
        buildVillage.changeAvatar(true)(lobby.Avatar.random)
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
      buildVillage.changeComment(true)('comment')
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
      buildVillage.changeMember(true)(lobby.Member.B)
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
        buildVillage.changeNumberOfPlayers(true)(5)
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
        buildVillage.changeNumberOfPlayers(true)(8)
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
        buildVillage.changeNumberOfPlayers(true)(10)
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
      buildVillage.changeNumberOfRobots(true)(8)
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
      buildVillage.changeVillageName(true)('villageName')
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
        type: ActionTypes.WaitingPage.LEAVE_WAITING_PAGE
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
        type: ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.buildVillage',
          types: [ActionTypes.BuildVillage.BUILD]
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
        type: ActionTypes.App.SHOW_MAIN
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
        type: ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER
      }
    )
  ).toStrictEqual(
    {
      ... initialState,
      menuItems: [
        {
          id: 'Menu.buildVillage',
          types: [ActionTypes.BuildVillage.BUILD]
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
      validity: initialState.validity,
      value: {
        ... initialState.value,
        isHuman: false
      }
    }
  )
})
test('message/AVATAR', () => {
  expect(
    reducer(
      initialState,
      message.avatar(avatar2)
    )
  ).toStrictEqual(
    {
      ... initialState,
      image: 'https://werewolf.world/image/0.3/user.jpg',
      initialFixedValue: {
        hostName: 'Kevin',
        villageName: 'Kevin\'s village'
      },
      name: 'Kevin'
    }
  )
})
