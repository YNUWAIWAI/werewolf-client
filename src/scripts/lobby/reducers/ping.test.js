// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {ping, waitingPage} from './fakeServer'
import reducer, {initialState} from './ping'

test('SOCKET_MESSAGE watingPage', () => {
  expect(
    reducer(
      initialState,
      {
        payload: waitingPage,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual(
    {
      id: '',
      myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
      results: []
    }
  )
})
test('SOCKET_MESSAGE ping', () => {
  expect(
    reducer(
      {
        id: '',
        myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
        results: []
      },
      {
        payload: ping,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual(
    {
      id: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
      results: [
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
        },
        {
          ping: '99.999 s',
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
        }
      ]
    }
  )
})
