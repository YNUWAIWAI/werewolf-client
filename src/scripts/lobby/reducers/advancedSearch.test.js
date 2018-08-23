// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './advancedSearch'
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
      name: ''
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
      name: ''
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
      name: ''
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
        menuItems: [],
        name: 'Alice'
      }
    )
  })
})

