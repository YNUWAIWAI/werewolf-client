// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './modal'

test('SELECT_OPTION', () => {
  expect(
    reducer(
      initialState,
      {
        agentId: 1,
        type: ActionTypes.SELECT_OPTION,
      }
    )
  ).toEqual(
    {
      id: 1,
      visible: true
    }
  )
})
test('SELECT_NO', () => {
  expect(
    reducer(
      {
        id: 1,
        visible: true
      },
      {
        type: ActionTypes.SELECT_NO
      }
    )
  ).toEqual(
    {
      id: -1,
      visible: false
    }
  )
})
test('SELECT_YES', () => {
  expect(
    reducer(
      {
        id: 1,
        visible: true
      },
      {
        type: ActionTypes.SELECT_YES,
      }
    )
  ).toEqual(
    {
      id: -1,
      visible: false
    }
  )
})
