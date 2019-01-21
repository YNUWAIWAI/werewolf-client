import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './obfucator'
import {socket} from '../actions'

test('HIDE_RESULT', () => {
  const action = {
    type: ActionTypes.global.HIDE_RESULT
  }

  expect(
    reducer(
      initialState,
      action
    )).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_NO', () => {
  const action = {
    type: ActionTypes.global.SELECT_NO
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_YES', () => {
  const action = {
    agentId: 1,
    type: ActionTypes.global.SELECT_YES
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_OPTION', () => {
  const action = {
    agentId: 1,
    type: ActionTypes.global.SELECT_OPTION
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: false,
    visible: true
  })
})
test('SHOW_RESULT', () => {
  const action = {
    type: ActionTypes.global.SHOW_RESULT
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: false,
    visible: true
  })
})
test('socket/CLOSE', () => {
  expect(
    reducer(
      initialState,
      socket.close(new CloseEvent('close event'))
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
