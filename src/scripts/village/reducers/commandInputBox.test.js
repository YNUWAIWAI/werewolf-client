// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {firstDayConversation, firstDayConversationSeer2, myMessageOnChat, theirMessageOnChat} from './fakeServer'
import reducer, {initialState} from './commandInputBox'

test('SOCKET_MESSAGE chatIsMine={true}', () => {
  expect(reducer(
    initialState,
    {
      payload: myMessageOnChat,
      type: ActionTypes.SOCKET_MESSAGE
    }
  )).toEqual({
    limited: {
      available: false,
      postCount: 0,
      postCountLimit: 10,
    },
    private: {
      postCount: 0,
      postCountLimit: 10,
    },
    public: {
      postCount: 7,
      postCountLimit: 10,
    }
  })
})
test('SOCKET_MESSAGE chatIsMine={false}', () => {
  expect(reducer(
    initialState,
    {
      payload: theirMessageOnChat,
      type: ActionTypes.SOCKET_MESSAGE
    }
  )).toEqual(initialState)
})
test('SOCKET_MESSAGE seer 1', () => {
  expect(reducer(
    initialState,
    {
      payload: firstDayConversation,
      type: ActionTypes.SOCKET_MESSAGE
    }
  )).toEqual({
    limited: {
      available: false,
      postCount: 0,
      postCountLimit: 10,
    },
    private: {
      postCount: 0,
      postCountLimit: 10,
    },
    public: {
      postCount: 0,
      postCountLimit: 10,
    }
  })
})
test('SOCKET_MESSAGE seer 2', () => {
  expect(reducer(
    initialState,
    {
      payload: firstDayConversationSeer2,
      type: ActionTypes.SOCKET_MESSAGE
    }
  )).toEqual({
    limited: {
      available: true,
      postCount: 0,
      postCountLimit: 10,
    },
    private: {
      postCount: 0,
      postCountLimit: 10,
    },
    public: {
      postCount: 0,
      postCountLimit: 10,
    }
  })
})
