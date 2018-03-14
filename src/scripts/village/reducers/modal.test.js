// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer from './modal'

test('initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    visible: false
  })
})
test('SELECT_OPTION', () => {
  const state = {
    visible: false
  }
  const action = {
    agentId: 1,
    type: ActionTypes.SELECT_OPTION,
  }

  expect(reducer(state, action)).toEqual({
    id: 1,
    visible: true
  })
})
test('SELECT_NO', () => {
  const state = {
    id: 1,
    visible: true
  }
  const action = {
    type: ActionTypes.SELECT_NO,
  }

  expect(reducer(state, action)).toEqual({
    visible: false
  })
})
test('SELECT_YES', () => {
  const state = {
    id: 1,
    visible: true
  }
  const action = {
    type: ActionTypes.SELECT_YES,
  }

  expect(reducer(state, action)).toEqual({
    visible: false
  })
})
