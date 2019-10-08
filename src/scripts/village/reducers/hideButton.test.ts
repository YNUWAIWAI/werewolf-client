import * as ActionTypes from '../constants/ActionTypes'
import reducer from './hideButton'

test('CLICK_HIDE_BUTTON hide={true}', () => {
  expect(
    reducer({
      hide: false
    },
    {
      hide: true,
      type: ActionTypes.global.CLICK_HIDE_BUTTON
    })
  ).toStrictEqual({
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
      type: ActionTypes.global.CLICK_HIDE_BUTTON
    })
  ).toStrictEqual({
    hide: false
  })
})
