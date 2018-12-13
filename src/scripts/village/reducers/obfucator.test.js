// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './obfucator'

test('HIDE_RESULT', () => {
  const action = {
    type: ActionTypes.HIDE_RESULT
  }

  expect(reducer(initialState, action)).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_NO', () => {
  const action = {
    type: ActionTypes.SELECT_NO
  }

  expect(reducer(initialState, action)).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_YES', () => {
  const action = {
    agentId: 1,
    type: ActionTypes.SELECT_YES
  }

  expect(reducer(initialState, action)).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_OPTION', () => {
  const action = {
    agentId: 1,
    type: ActionTypes.SELECT_OPTION
  }

  expect(reducer(initialState, action)).toEqual({
    loading: false,
    visible: true
  })
})
test('SHOW_RESULT', () => {
  const action = {
    type: ActionTypes.SHOW_RESULT
  }

  expect(reducer(initialState, action)).toEqual({
    loading: false,
    visible: true
  })
})
test('socket/CLOSE', () => {
  const action = {
    type: ActionTypes.socket.CLOSE
  }

  expect(reducer(initialState, action)).toEqual({
    loading: true,
    visible: true
  })
test('socket/ERROR', () => {
  const action = {
    type: ActionTypes.socket.ERROR
  }

  expect(reducer(initialState, action)).toEqual({
    loading: true,
    visible: true
  })
})
test('socket/OPEN', () => {
  const action = {
    type: ActionTypes.socket.OPEN
  }

  expect(reducer(initialState, action)).toEqual({
    loading: false,
    visible: false
  })
})
test('TOGGLE_OBFUCATOR visible={true}', () => {
  const action = {
    type: ActionTypes.TOGGLE_OBFUCATOR,
    visible: true
  }

  expect(reducer(initialState, action)).toEqual({
    loading: true,
    visible: true
  })
})
test('TOGGLE_OBFUCATOR visible={false}', () => {
  const action = {
    type: ActionTypes.TOGGLE_OBFUCATOR,
    visible: false
  }

  expect(reducer(initialState, action)).toEqual({
    loading: true,
    visible: false
  })
})
