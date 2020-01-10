import * as ActionTypes from '../constants/ActionTypes'
import {
  avatar,
  enterHumanPlayerLobby,
  enterOnymousAudienceLobby,
  enterRobotPlayerLobby
} from './fakeServer'
import reducer, {initialState} from './lobbyForAudience'
import {message} from '../actions'

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
      isPlayer: false,
      menuItems: [
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
          types: [ActionTypes.App.REFRESH, ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
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
describe('message/LOBBY', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        message.lobby(enterHumanPlayerLobby)
      )
    ).toStrictEqual(
      initialState
    )
  })
  test('onymous audience', () => {
    expect(
      reducer(
        initialState,
        message.lobby(enterOnymousAudienceLobby)
      )
    ).toStrictEqual({
      image: '',
      isPlayer: false,
      menuItems: [
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
          types: [ActionTypes.App.REFRESH, ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE]
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
    })
  })
  test('robot player', () => {
    expect(
      reducer(
        initialState,
        message.lobby(enterRobotPlayerLobby)
      )
    ).toStrictEqual(
      initialState
    )
  })
})
