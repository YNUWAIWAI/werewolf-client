import * as ActionTypes from '../constants/ActionTypes'
import {
  avatar,
  enterHumanPlayerLobby,
  enterOnymousAudienceLobby,
  enterRobotPlayerLobby
} from './fakeServer'
import reducer, {initialState} from './lobbyForRobotPlayer'

test('REFRESH', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.App.REFRESH
      }
    )
  ).toStrictEqual(
    {
      image: '',
      isPlayer: true,
      menuItems: [
        {
          id: 'Menu.showBuildVillage',
          types: [ActionTypes.App.SHOW_BUILD_VILLAGE]
        },
        {
          id: 'Menu.showIdSearch',
          types: [ActionTypes.App.SHOW_ID_SEARCH]
        },
        {
          id: 'Menu.showAdvancedSearch',
          types: [ActionTypes.App.SHOW_ADVANCED_SEARCH]
        },
        {
          id: 'Menu.refresh',
          isLoading: true,
          types: [ActionTypes.App.REFRESH, ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.App.SHOW_MAIN]
        }
      ],
      name: '',
      villageItems: []
    }
  )
})
describe('scoket/MESSAGE', () => {
  test('avatar', () => {
    expect(
      reducer(
        initialState,
        {
          payload: avatar,
          type: ActionTypes.Socket.MESSAGE
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
  describe('lobby', () => {
    test('human player', () => {
      expect(
        reducer(
          initialState,
          {
            payload: enterHumanPlayerLobby,
            type: ActionTypes.Socket.MESSAGE
          }
        )
      ).toStrictEqual(
        initialState
      )
    })
    test('onymous audience', () => {
      expect(
        reducer(
          initialState,
          {
            payload: enterOnymousAudienceLobby,
            type: ActionTypes.Socket.MESSAGE
          }
        )
      ).toStrictEqual(
        initialState
      )
    })
    test('robot player', () => {
      expect(
        reducer(
          initialState,
          {
            payload: enterRobotPlayerLobby,
            type: ActionTypes.Socket.MESSAGE
          }
        )
      ).toStrictEqual(
        {
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.showBuildVillage',
              types: [ActionTypes.App.SHOW_BUILD_VILLAGE]
            },
            {
              id: 'Menu.showIdSearch',
              types: [ActionTypes.App.SHOW_ID_SEARCH]
            },
            {
              id: 'Menu.showAdvancedSearch',
              types: [ActionTypes.App.SHOW_ADVANCED_SEARCH]
            },
            {
              id: 'Menu.refresh',
              isLoading: false,
              types: [ActionTypes.App.REFRESH, ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.App.SHOW_MAIN]
            }
          ],
          name: '',
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
            },
            {
              avatar: 'random',
              comment: 'Open to beginners',
              hostPlayer: {
                isAnonymous: true,
                isHuman: false,
                name: 'Anonymous'
              },
              id: 2,
              idForSearching: 456,
              name: 'Ruined village',
              playerSetting: {
                current: 4,
                human: {
                  current: 2,
                  max: 3
                },
                number: 5,
                robot: {
                  current: 2,
                  min: 2
                }
              },
              roleSetting: {
                hunter: 0,
                madman: 0,
                mason: 0,
                medium: 0,
                seer: 1,
                villager: 3,
                werehamster: 0,
                werewolf: 1
              }
            }
          ]
        }
      )
    })
  })
})
