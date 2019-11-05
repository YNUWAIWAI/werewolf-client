import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './token'
import {lobby} from '../types'

test('CHANGE_LOBBY', () => {
  expect(
    reducer(
      {
        ... initialState,
        lobby: lobby.LobbyType.human
      },
      {
        lobby: lobby.LobbyType.robot,
        type: ActionTypes.App.CHANGE_LOBBY
      }
    )
  ).toStrictEqual(
    {
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: '',
      lobby: lobby.LobbyType.robot,
      [lobby.LobbyType.onymousAudience]: '',
      [lobby.LobbyType.robot]: ''
    }
  )
})
describe('CHANGE_TOKEN', () => {
  test('human player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.LobbyType.human,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.App.CHANGE_TOKEN
        }
      )
    ).toStrictEqual(
      {
        [lobby.LobbyType.anonymousAudience]: '',
        [lobby.LobbyType.human]: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        lobby: lobby.LobbyType.human,
        [lobby.LobbyType.onymousAudience]: '',
        [lobby.LobbyType.robot]: ''
      }
    )
  })
  test('robot player', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.LobbyType.robot,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.App.CHANGE_TOKEN
        }
      )
    ).toStrictEqual(
      {
        [lobby.LobbyType.anonymousAudience]: '',
        [lobby.LobbyType.human]: '',
        lobby: lobby.LobbyType.human,
        [lobby.LobbyType.onymousAudience]: '',
        [lobby.LobbyType.robot]: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
      }
    )
  })
  test('onymous audience', () => {
    expect(
      reducer(
        initialState,
        {
          lobby: lobby.LobbyType.onymousAudience,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
          type: ActionTypes.App.CHANGE_TOKEN
        }
      )
    ).toStrictEqual(
      {
        [lobby.LobbyType.anonymousAudience]: '',
        [lobby.LobbyType.human]: '',
        lobby: lobby.LobbyType.human,
        [lobby.LobbyType.onymousAudience]: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        [lobby.LobbyType.robot]: ''
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
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: '',
      lobby: 'onymous audience',
      [lobby.LobbyType.onymousAudience]: '',
      [lobby.LobbyType.robot]: ''
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
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: '',
      lobby: lobby.LobbyType.human,
      [lobby.LobbyType.onymousAudience]: '',
      [lobby.LobbyType.robot]: ''
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
      [lobby.LobbyType.anonymousAudience]: '',
      [lobby.LobbyType.human]: '',
      lobby: lobby.LobbyType.robot,
      [lobby.LobbyType.onymousAudience]: '',
      [lobby.LobbyType.robot]: ''
    }
  )
})
