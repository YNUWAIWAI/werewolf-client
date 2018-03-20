// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {myMessageOnChat, theirMessageOnChat} from './fakeServer'
import reducer from './chat'

test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      {
        items: []
      },
      {
        payload: myMessageOnChat,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    items: [
      myMessageOnChat
    ]
  })
})

test('SOCKET_MESSAGE 2 items', () => {
  expect(
    reducer(
      {
        items: [
          myMessageOnChat
        ]
      },
      {
        payload: theirMessageOnChat,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual({
    items: [
      myMessageOnChat,
      theirMessageOnChat
    ]
  })
})

