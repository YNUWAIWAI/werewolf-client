// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './idSearch'

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
      header: 'Audience\'s ID Search',
      menuItems: [
        {
          text: 'Search',
          types: [ActionTypes.SEARCH_FOR_ID]
        },
        {
          text: 'Return to Lobby for Audience',
          types: [ActionTypes.SHOW_LOBBY_FOR_AUDIENCE]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ]
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
      header: 'Human Player\'s ID Search',
      menuItems: [
        {
          text: 'Search',
          types: [ActionTypes.SEARCH_FOR_ID]
        },
        {
          text: 'Return to Lobby for Human Player',
          types: [ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ]
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
      header: 'Robot Player\'s ID Search',
      menuItems: [
        {
          text: 'Search',
          types: [ActionTypes.SEARCH_FOR_ID]
        },
        {
          text: 'Return to Lobby for Robot Player',
          types: [ActionTypes.SHOW_LOBBY_FOR_ROBOT_PLAYER]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ]
    }
  )
})
