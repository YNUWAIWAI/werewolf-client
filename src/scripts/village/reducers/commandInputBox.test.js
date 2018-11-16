// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {firstMorning, firstMorning2, myMessageOnChat, theirMessageOnChat} from './fakeServer'
import reducer, {initialState} from './commandInputBox'

describe('socket/MESSAGE', () => {
  test('isMine={true}', () => {
    expect(reducer(
      initialState,
      {
        payload: myMessageOnChat,
        type: ActionTypes.socket.MESSAGE
      }
    )).toEqual({
      limited: {
        available: false,
        postCount: 0,
        postCountLimit: 10
      },
      private: {
        postCount: 0,
        postCountLimit: 10
      },
      public: {
        postCount: 7,
        postCountLimit: 10
      }
    })
  })
  test('isMine={false}', () => {
    expect(reducer(
      initialState,
      {
        payload: theirMessageOnChat,
        type: ActionTypes.socket.MESSAGE
      }
    )).toEqual(initialState)
  })
  test('seer 1', () => {
    expect(reducer(
      initialState,
      {
        payload: firstMorning,
        type: ActionTypes.socket.MESSAGE
      }
    )).toEqual({
      limited: {
        available: false,
        postCount: 0,
        postCountLimit: 10
      },
      private: {
        postCount: 0,
        postCountLimit: 10
      },
      public: {
        postCount: 0,
        postCountLimit: 10
      }
    })
  })
  test('seer 2', () => {
    expect(reducer(
      initialState,
      {
        payload: firstMorning2,
        type: ActionTypes.socket.MESSAGE
      }
    )).toEqual({
      limited: {
        available: true,
        postCount: 0,
        postCountLimit: 10
      },
      private: {
        postCount: 0,
        postCountLimit: 10
      },
      public: {
        postCount: 0,
        postCountLimit: 10
      }
    })
  })
})
