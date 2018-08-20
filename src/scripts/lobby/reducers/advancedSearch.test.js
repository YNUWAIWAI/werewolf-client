// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './advancedSearch'

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
