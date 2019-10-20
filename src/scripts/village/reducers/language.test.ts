import * as ActionTypes from '../constants/ActionTypes'
import * as village from '../types'
import reducer, {initialState} from './language'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: village.Language.en,
        type: ActionTypes.global.CHANGE_LANGUAGE
      }
    )
  ).toStrictEqual(
    village.Language.en
  )
})
