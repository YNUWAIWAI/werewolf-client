import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './timer'

test('TICK', () => {
  expect(
    reducer(
      initialState,
      {
        start: 10000,
        time: 1000,
        type: ActionTypes.global.TICK
      }
    )
  ).toEqual(
    {
      start: 10000,
      time: 1000
    }
  )
})
