import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import reducer, {initialState} from './idSearch'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

test('SHOW_LOBBY_FOR_AUDIENCE', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE
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
          types: [ActionTypes.Target.ID_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      villageItems: []
    }
  )
})
test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER
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
          types: [ActionTypes.Target.ID_SEARCH]
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
      searched: false,
      villageItems: []
    }
  )
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER
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
          types: [ActionTypes.Target.ID_SEARCH]
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
      searched: false,
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
      searched: false,
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
            types: [ActionTypes.Target.ID_SEARCH]
          },
          {
            id: 'Menu.returnToLobbyForAudience',
            types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
          },
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.Target.SHOW_MAIN]
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
          types: [ActionTypes.Target.ID_SEARCH]
        },
        {
          id: 'Menu.returnToLobbyForAudience',
          types: [ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.Target.SHOW_MAIN]
        }
      ],
      name: '',
      searched: false,
      villageItems: []
    }
  )
})
describe('socket/MESSAGE', () => {
  const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
  const SERVER2CLIENT = `${BASE_URI}/server2client`
  const ajv = new Ajv()
  const payload: lobby.Payload = {
    image: '/assets/images/avatar/default/user.png',
    lang: lobby.Language.ja,
    name: 'Alice',
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
        header: '',
        id: -1,
        image: '/assets/images/avatar/default/user.png',
        isPlayer: true,
        menuItems: [],
        name: 'Alice',
        searched: false,
        villageItems: []
      }
    )
  })
})
