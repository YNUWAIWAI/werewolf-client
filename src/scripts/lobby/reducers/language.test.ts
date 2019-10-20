import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from '../types'
import reducer, {initialState} from './language'
import {avatar} from './fakeServer'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: lobby.Language.en,
        type: ActionTypes.global.CHANGE_LANGUAGE
      }
    )
  ).toStrictEqual(
    lobby.Language.en
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
    ).toStrictEqual(
      'ja'
    )
  })
})

