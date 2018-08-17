// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './token'

describe('CHANGE_TOKEN', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: 'human player',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.CHANGE_TOKEN
        }
      )
    ).toEqual(
      {
        'human player': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        'lobby': '',
        'onymous audience': '',
        'robot player': ''
      }
    )
  })
  test('robot player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: 'robot player',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.CHANGE_TOKEN
        }
      )
    ).toEqual(
      {
        'human player': '',
        'lobby': '',
        'onymous audience': '',
        'robot player': '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      }
    )
  })
  test('onymous audience', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: 'onymous audience',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.CHANGE_TOKEN
        }
      )
    ).toEqual(
      {
        'human player': '',
        'lobby': '',
        'onymous audience': '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        'robot player': ''
      }
    )
  })
})
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
      'human player': '',
      'lobby': 'onymous audience',
      'onymous audience': '',
      'robot player': ''
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
      'human player': '',
      'lobby': 'human player',
      'onymous audience': '',
      'robot player': ''
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
      'human player': '',
      'lobby': 'robot player',
      'onymous audience': '',
      'robot player': ''
    }
  )
})
