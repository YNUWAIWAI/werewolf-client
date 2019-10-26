import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './token'
import {lobby} from '../types'

test('CHANGE_LOBBY', () => {
  expect(
    reducer(
      {
        ... initialState,
        lobby: lobby.Lobby.human
      },
      {
        lobby: lobby.Lobby.robot,
        type: ActionTypes.App.CHANGE_LOBBY
      }
    )
  ).toStrictEqual(
    {
      [lobby.Lobby.human]: '',
      lobby: lobby.Lobby.robot,
      [lobby.Lobby.audience]: '',
      [lobby.Lobby.robot]: ''
    }
  )
})
describe('CHANGE_TOKEN', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.Lobby.human,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.App.CHANGE_TOKEN
        }
      )
    ).toStrictEqual(
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
          type: ActionTypes.App.CHANGE_TOKEN
        }
      )
    ).toStrictEqual(
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
          type: ActionTypes.App.CHANGE_TOKEN
        }
      )
    ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
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
  ).toStrictEqual(
    {
      [lobby.Lobby.human]: '',
      lobby: lobby.Lobby.robot,
      [lobby.Lobby.audience]: '',
      [lobby.Lobby.robot]: ''
    }
  )
})
