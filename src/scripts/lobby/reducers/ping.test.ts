import {
  ping,
  waitingPage
} from './fakeServer'
import reducer, {initialState} from './ping'
import {lobby} from '../types'
import {message} from '../actions'

test('message/PING', () => {
  expect(
    reducer(
      {
        id: '',
        myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
        results: []
      },
      message.ping(ping)
    )
  ).toStrictEqual(
    {
      id: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
      myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
      results: [
        {
          ping: '99.999',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301'
        },
        {
          ping: '00.999',
          status: lobby.PingStatus.safe,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3302'
        },
        {
          ping: '02.999',
          status: lobby.PingStatus.warning,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3303'
        },
        {
          ping: '00.000',
          status: lobby.PingStatus.safe,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3304'
        },
        {
          ping: '99.999',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3305'
        },
        {
          ping: '99.999',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3306'
        },
        {
          ping: '99.999',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3307'
        },
        {
          ping: '99.999',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3308'
        },
        {
          ping: '99.999',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3309'
        },
        {
          ping: '99.999',
          status: lobby.PingStatus.danger,
          token: '3F2504E0-4F89-11D3-9A0C-0305E82C3310'
        }
      ]
    }
  )
})
test('message/WAITNG_PAGE', () => {
  expect(
    reducer(
      initialState,
      message.waitingPage(waitingPage)
    )
  ).toStrictEqual(
    {
      id: '',
      myToken: '3F2504E0-4F89-11D3-9A0C-0305E82C3302',
      results: []
    }
  )
})
