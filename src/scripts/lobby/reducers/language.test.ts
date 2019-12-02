import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './language'
import {avatar} from './fakeServer'
import {lobby} from '../types'
import {message} from '../actions'

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
test('message/AVATAR', () => {
  expect(
    reducer(
      initialState,
      message.avatar(avatar)
    )
  ).toStrictEqual(
    lobby.Language.en
  )
})

