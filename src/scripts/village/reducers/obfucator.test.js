// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './obfucator'

test('TOGGLE_OBFUCATOR visible={true}', () => {
  const action = {
    type: ActionTypes.TOGGLE_OBFUCATOR,
    visible: true
  }

  expect(reducer(initialState, action)).toEqual({
    visible: true
  })
})
test('TOGGLE_OBFUCATOR visible={false}', () => {
  const action = {
    type: ActionTypes.TOGGLE_OBFUCATOR,
    visible: false
  }

  expect(reducer(initialState, action)).toEqual({
    visible: false
  })
})
test('UNRELATED_ACTION', () => {
  const action = {
    type: 'UNRELATED_ACTION',
    visible: false
  }

  expect(reducer(initialState, action)).toEqual({
    visible: true
  })
})
