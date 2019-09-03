import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from 'types/lobby'
import reducer, {initialState} from './language'
import {avatar} from './fakeServer'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: lobby.Language.ja,
        type: ActionTypes.global.CHANGE_LANGUAGE
      }
    )
  ).toEqual(
    lobby.Language.ja
  )
})
describe('socket/MESSAGE', () => {
  test('avatar', () => {
    expect(
      reducer(
        initialState,
        {
          payload: avatar,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toEqual(
      'ja'
    )
  })
})

