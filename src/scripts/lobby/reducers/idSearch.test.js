// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './idSearch'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

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
      header: 'Header.idSearch(audience)',
      id: -1,
      image: '',
      isPlayer: false,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.search',
          types: [ActionTypes.ID_SEARCH]
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
      header: 'Header.idSearch(human player)',
      id: -1,
      image: '',
      isPlayer: true,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.search',
          types: [ActionTypes.ID_SEARCH]
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
      header: 'Header.idSearch(robot player)',
      id: -1,
      image: '',
      isPlayer: true,
      menuItems: [
        {
          disabled: true,
          id: 'Menu.search',
          types: [ActionTypes.ID_SEARCH]
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
      villageItems: []
    }
  )
})
test('idSearch/CHANGE_SEARCH_ID', () => {
  expect(
    reducer(
      initialState,
      {
        id: 123,
        type: ActionTypes.idSearch.CHANGE_SEARCH_ID
      }
    )
  ).toEqual(
    {
      header: '',
      id: 123,
      image: '',
      isPlayer: true,
      menuItems: [],
      name: '',
      villageItems: []
    }
  )
})
test('idSearch/CHANGE_VALIDITY', () => {
  expect(
    reducer(
      {
        ... initialState,
        menuItems: [
          {
            disabled: true,
            id: 'Menu.search',
            types: [ActionTypes.ID_SEARCH]
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
        propName: 'id',
        type: ActionTypes.idSearch.CHANGE_VALIDITY,
        validity: true
      }
    )
  ).toEqual(
    {
      header: '',
      id: -1,
      image: '',
      isPlayer: true,
      menuItems: [
        {
          disabled: false,
          id: 'Menu.search',
          types: [ActionTypes.ID_SEARCH]
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
      villageItems: []
    }
  )
})
describe('socket/MESSAGE', () => {
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
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(
      {
        header: '',
        id: -1,
        image: '/assets/images/avatar/default/user.png',
        isPlayer: true,
        menuItems: [],
        name: 'Alice',
        villageItems: []
      }
    )
  })
})
