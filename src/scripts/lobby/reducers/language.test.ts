import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './language'
import {avatar} from './fakeServer'
import {lobby} from '../types'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: lobby.Language.en,
        type: ActionTypes.App.CHANGE_LANGUAGE
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
          type: ActionTypes.Socket.MESSAGE
        }
      )
    ).toStrictEqual(
      lobby.Language.en
    )
  })
})

