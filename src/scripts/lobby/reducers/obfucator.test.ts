import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './obfucator'
import {socket} from '../actions'

test('CONFIRM_KICK_OUT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        name: 'Alice',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        type: ActionTypes.global.CONFIRM_KICK_OUT_PLAYER
      }
    )
  ).toEqual({
    loading: false,
    visible: true
  })
})
test('SELECT_NO', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.global.SELECT_NO
      }
    )
  ).toEqual({
    loading: false,
    visible: false
  })
})
test('SELECT_YES', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.global.SELECT_YES
      }
    )
  ).toEqual({
    loading: false,
    visible: false
  })
})
test('socket/CLOSE', () => {
  expect(
    reducer(
      initialState,
      socket.close(new CloseEvent('error'))
    )
  ).toEqual({
    loading: true,
    visible: true
  })
})
test('socket/ERROR', () => {
  expect(
    reducer(
      initialState,
      socket.error(new Event('error'))
    )
  ).toEqual({
    loading: true,
    visible: true
  })
})
test('socket/OPEN', () => {
  expect(
    reducer(
      initialState,
      socket.open(new Event('open'))
    )
  ).toEqual({
    loading: false,
    visible: false
  })
})
