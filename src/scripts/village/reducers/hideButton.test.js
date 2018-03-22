// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer from './hideButton'

test('CLICK_HIDE_BUTTON hide={true}', () => {
  expect(
    reducer({
      hide: false
    },
    {
      hide: true,
      type: ActionTypes.CLICK_HIDE_BUTTON
    })
  ).toEqual({
    hide: true
  })
})
test('CLICK_HIDE_BUTTON hide={false}', () => {
  expect(
    reducer({
      hide: true
    },
    {
      hide: false,
      type: ActionTypes.CLICK_HIDE_BUTTON
    })
  ).toEqual({
    hide: false
  })
})
