// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './language'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: 'en',
        type: ActionTypes.CHANGE_LANGUAGE
      }
    )
  ).toEqual(
    'en'
  )
})
