// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation, myMessageOnChat} from './fakeServer'
import reducer, {initialState} from './timer'

test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      initialState,
      {
        payload: firstDayConversation,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    phase: 'day conversation',
    phaseTimeLimit: 600
  })
})
test('SOCKET_MESSAGE phase is not changed', () => {
  expect(
    reducer(
      {
        phase: 'day conversation',
        phaseTimeLimit: 900
      },
      {
        payload: myMessageOnChat,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    phase: 'day conversation',
    phaseTimeLimit: 900
  })
})

