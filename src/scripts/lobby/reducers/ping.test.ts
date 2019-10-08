import * as ActionTypes from '../constants/ActionTypes'
import * as lobby from '../types'
import {ping, waitingPage} from './fakeServer'
import reducer, {initialState} from './ping'

test('socket/MESSAGE watingPage', () => {
  expect(
    reducer(
      initialState,
      {
        payload: waitingPage,
        type: ActionTypes.socket.MESSAGE
      }
    )
  ).toStrictEqual(
    {
      id: '',
      myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
      results: []
    }
  )
})
test('socket/MESSAGE ping', () => {
  expect(
    reducer(
      {
        id: '',
        myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
        results: []
      },
      {
        payload: ping,
        type: ActionTypes.socket.MESSAGE
      }
    )
  ).toStrictEqual(
    {
      id: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
      results: [
        {
          ping: '99.999 s',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        },
        {
          ping: '00.999 s',
          status: lobby.PingStatus.safe,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
        },
        {
          ping: '02.999 s',
          status: lobby.PingStatus.warning,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
        },
        {
          ping: '00.000 s',
          status: lobby.PingStatus.safe,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        },
        {
          ping: '99.999 s',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
        },
        {
          ping: '99.999 s',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
        },
        {
          ping: '99.999 s',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
        },
        {
          ping: '99.999 s',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
        },
        {
          ping: '99.999 s',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
        },
        {
          ping: '99.999 s',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
        }
      ]
    }
  )
})
