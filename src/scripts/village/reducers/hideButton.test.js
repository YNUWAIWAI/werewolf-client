// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer from './hideButton'

test('initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    hide: false
  })
})
test('CLICK_HIDE_BUTTON hide={true}', () => {
  const action = {
    hide: true,
    type: ActionTypes.CLICK_HIDE_BUTTON
  }

  expect(reducer(undefined, action)).toEqual({
    hide: true
  })
})
test('CLICK_HIDE_BUTTON hide={false}', () => {
  const action = {
    hide: false,
    type: ActionTypes.CLICK_HIDE_BUTTON
  }

  expect(reducer(undefined, action)).toEqual({
    hide: false
  })
})
