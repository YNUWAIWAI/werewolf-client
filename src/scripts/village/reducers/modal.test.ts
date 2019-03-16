/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './modal'

test('CHANGE_PHASE', () => {
  expect(
    reducer(
      initialState,
      {
        from: village.Phase.day,
        to: village.Phase.night,
        type: ActionTypes.global.CHANGE_PHASE
      }
    )
  ).toEqual(
    {
      id: -1,
      visible: false
    }
  )
})
test('SELECT_OPTION', () => {
  expect(
    reducer(
      initialState,
      {
        agentId: 1,
        type: ActionTypes.global.SELECT_OPTION
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
        type: ActionTypes.global.SELECT_NO
      }
    )
  ).toEqual(
    {
      id: 1,
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
        agentId: 1,
        type: ActionTypes.global.SELECT_YES
      }
    )
  ).toEqual(
    {
      id: 1,
      visible: false
    }
  )
})
