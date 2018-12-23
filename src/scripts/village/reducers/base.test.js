// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './base'
import {firstMorning} from './fakeServer'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      {
        payload: firstMorning,
        type: ActionTypes.socket.MESSAGE
      }
    )
  ).toEqual({
    clientTimestamp: '2006-10-07T12:06:56.568+09:00',
    date: 1,
    intensionalDisclosureRange: 'private',
    phase: 'morning',
    phaseStartTime: '2006-10-07T12:06:56.568+09:00',
    phaseTimeLimit: 600,
    serverTimestamp: '2006-10-07T12:06:56.568+09:00',
    token: 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    village: {
      '@id': 'https://licos.online/state/0.2/village',
      'id': 3,
      'lang': 'ja',
      'name': '横国の森の奥にある時代に取り残された小さな村',
      'totalNumberOfAgents': 15
    }
  })
})
