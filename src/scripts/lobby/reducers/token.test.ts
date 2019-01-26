/* global lobby */
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './token'

describe('CHANGE_TOKEN', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.Lobby.human,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.global.CHANGE_TOKEN
        }
      )
    ).toEqual(
      {
        [lobby.Lobby.human]: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        lobby: lobby.Lobby.human,
        [lobby.Lobby.audience]: '',
        [lobby.Lobby.robot]: ''
      }
    )
  })
  test('robot player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.Lobby.robot,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.global.CHANGE_TOKEN
        }
      )
    ).toEqual(
      {
        [lobby.Lobby.human]: '',
        lobby: lobby.Lobby.human,
        [lobby.Lobby.audience]: '',
        [lobby.Lobby.robot]: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      }
    )
  })
  test('onymous audience', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.Lobby.audience,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.global.CHANGE_TOKEN
        }
      )
    ).toEqual(
      {
        [lobby.Lobby.human]: '',
        lobby: lobby.Lobby.human,
        [lobby.Lobby.audience]: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        [lobby.Lobby.robot]: ''
      }
    )
  })
})
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
      [lobby.Lobby.human]: '',
      lobby: 'onymous audience',
      [lobby.Lobby.audience]: '',
      [lobby.Lobby.robot]: ''
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
      [lobby.Lobby.human]: '',
      lobby: lobby.Lobby.human,
      [lobby.Lobby.audience]: '',
      [lobby.Lobby.robot]: ''
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
      [lobby.Lobby.human]: '',
      lobby: lobby.Lobby.robot,
      [lobby.Lobby.audience]: '',
      [lobby.Lobby.robot]: ''
    }
  )
})
