import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './timer'
import {firstMorning} from './fakeServer'
import {socket} from '../actions'

test('TICK', () => {
  expect(
    reducer(
      initialState,
      {
        start: 10000,
        time: 1000,
        type: ActionTypes.App.TICK
      }
    )
  ).toStrictEqual(
    {
      phaseStartTime: 0,
      phaseTimeLimit: 0,
      start: 10000,
      time: 1000
    }
  )
})
test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      socket.message(firstMorning)
    )
  ).toStrictEqual(
    {
      phaseStartTime: 1160190416568,
      phaseTimeLimit: 600000,
      start: 0,
      time: 0
    }
  )
})
