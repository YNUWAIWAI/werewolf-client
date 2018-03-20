// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation, results} from './fakeServer'
import reducer from './result'

test('initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    visible: false
  })
})
test('SOCKET_MESSAGE phase is not results', () => {
  expect(
    reducer(
      {
        visible: false
      },
      {
        payload: firstDayConversation,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    visible: false
  })
})
test('SOCKET_MESSAGE phase is results', () => {
  expect(
    reducer(
      {
        visible: false
      },
      {
        payload: results,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    visible: true
  })
})

