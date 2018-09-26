// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {enterHumanPlayerLobby, enterOnymousAudienceLobby, enterRobotPlayerLobby} from './fakeServer'
import reducer, {initialState} from './lobbyForHumanPlayer'

test('REFRESH', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.REFRESH
      }
    )
  ).toEqual(
    {
      image: '',
      isPlayer: true,
      menuItems: [
        {
          text: 'Build your Village',
          types: [ActionTypes.SHOW_BUILD_VILLAGE]
        },
        {
          text: 'ID Search',
          types: [ActionTypes.SHOW_ID_SEARCH]
        },
        {
          text: 'Advanced Search',
          types: [ActionTypes.SHOW_ADVANCED_SEARCH]
        },
        {
          isLoading: true,
          text: 'Refresh',
          types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
      villageItems: []
    }
  )
})
describe('SOCKET_MESSAGE', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        {
          payload: enterHumanPlayerLobby,
          type: ActionTypes.SOCKET_MESSAGE
        }
      )
    ).toEqual(
      {
        image: '',
        isPlayer: true,
        menuItems: [
          {
            text: 'Build your Village',
            types: [ActionTypes.SHOW_BUILD_VILLAGE]
          },
          {
            text: 'ID Search',
            types: [ActionTypes.SHOW_ID_SEARCH]
          },
          {
            text: 'Advanced Search',
            types: [ActionTypes.SHOW_ADVANCED_SEARCH]
          },
          {
            isLoading: false,
            text: 'Refresh',
            types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        name: '',
        villageItems: [
          {
            avatar: 'fixed',
            comment: null,
            hostPlayer: {
              isAnonymous: false,
              name: 'Alice'
            },
            id: 1,
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
              werehumster: 1,
              werewolf: 2
            }
          },
          {
            avatar: 'random',
            comment: 'Open to beginners',
            hostPlayer: {
              isAnonymous: true,
              name: 'Anonymous'
            },
            id: 2,
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
              werehumster: 0,
              werewolf: 1
            }
          }
        ]
      }
    )
  })
  test('onymous audience', () => {
    expect(
      reducer(
        initialState,
        {
          payload: enterOnymousAudienceLobby,
          type: ActionTypes.SOCKET_MESSAGE
        }
      )
    ).toEqual(
      initialState
    )
  })
  test('robot player', () => {
    expect(
      reducer(
        initialState,
        {
          payload: enterRobotPlayerLobby,
          type: ActionTypes.SOCKET_MESSAGE
        }
      )
    ).toEqual(
      initialState
    )
  })
})
