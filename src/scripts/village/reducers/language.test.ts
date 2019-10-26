import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './language'
import {village} from '../types'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: village.Language.en,
        type: ActionTypes.CHANGE_LANGUAGE
      }
    )
  ).toStrictEqual(
    village.Language.en
  )
})
