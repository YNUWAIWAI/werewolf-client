import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './modal'
import {village} from '../types'

test('CHANGE_PHASE', () => {
  expect(
    reducer(
      initialState,
      {
        from: village.Phase.noon,
        to: village.Phase.night,
        type: ActionTypes.global.CHANGE_PHASE
      }
    )
  ).toStrictEqual(
    {
      id: '',
      visible: false
    }
  )
})
test('SELECT_OPTION', () => {
  expect(
    reducer(
      initialState,
      {
        characterId: '1',
        type: ActionTypes.global.SELECT_OPTION
      }
    )
  ).toStrictEqual(
    {
      id: '1',
      visible: true
    }
  )
})
test('SELECT_NO', () => {
  expect(
    reducer(
      {
        id: '1',
        visible: true
      },
      {
        type: ActionTypes.global.SELECT_NO
      }
    )
  ).toStrictEqual(
    {
      id: '1',
      visible: false
    }
  )
})
test('SELECT_YES', () => {
  expect(
    reducer(
      {
        id: '1',
        visible: true
      },
      {
        characterId: '1',
        type: ActionTypes.global.SELECT_YES
      }
    )
  ).toStrictEqual(
    {
      id: '1',
      visible: false
    }
  )
})
