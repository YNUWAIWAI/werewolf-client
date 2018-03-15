// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation} from './fakeServer'
import reducer from './base'

test('initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    clientTimestamp: '',
    date: 0,
    intensionalDisclosureRange: 'public',
    phase: 'night',
    phaseStartTime: '',
    phaseTimeLimit: 0,
    serverTimestamp: '',
    token: '',
    totalNumberOfAgents: 0,
    villageId: 0,
    villageName: ''
  })
})
test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      {
        clientTimestamp: '',
        date: 0,
        intensionalDisclosureRange: 'public',
        phase: 'night',
        phaseStartTime: '',
        phaseTimeLimit: 0,
        serverTimestamp: '',
        token: '',
        totalNumberOfAgents: 0,
        villageId: 0,
        villageName: ''
      },
      {
        payload: firstDayConversation,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    clientTimestamp: '2006-10-07T12:06:56.568+09:00',
    date: 1,
    intensionalDisclosureRange: 'private',
    phase: 'day conversation',
    phaseStartTime: '2006-10-07T12:06:56.568+09:00',
    phaseTimeLimit: 600,
    serverTimestamp: '2006-10-07T12:06:56.568+09:00',
    token: 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
    totalNumberOfAgents: 15,
    villageId: 3,
    villageName: '横国の森の奥にある時代に取り残された小さな村'

  })
})
