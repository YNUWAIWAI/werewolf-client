import * as ActionTypes from '../constants/ActionTypes'
import * as village from '../types'
import {firstMorning, firstMorning2, myMessageOnChat, theirMessageOnChat} from './fakeServer'
import reducer, {initialState} from './commandInputBox'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('isMine={true}', () => {
    expect(reducer(
      initialState,
      socket.message(myMessageOnChat)
    )).toStrictEqual({
      limited: {
        available: false,
        postCount: 0
      },
      public: {
        postCount: 7
      }
    })
  })
  test('isMine={false}', () => {
    expect(reducer(
      initialState,
      socket.message(theirMessageOnChat)
    )).toStrictEqual(initialState)
  })
  test('seer 1', () => {
    expect(reducer(
      initialState,
      socket.message(firstMorning)
    )).toStrictEqual({
      limited: {
        available: false,
        postCount: 0
      },
      public: {
        postCount: 0
      }
    })
  })
  test('seer 2', () => {
    expect(reducer(
      initialState,
      socket.message(firstMorning2)
    )).toStrictEqual({
      limited: {
        available: true,
        postCount: 0
      },
      public: {
        postCount: 0
      }
    })
  })
})
test('CHANGE_DATE', () => {
  expect(reducer(
    {
      limited: {
        available: true,
        postCount: 10
      },
      public: {
        postCount: 10
      }
    },
    {
      from: village.Phase.morning,
      to: village.Phase.noon,
      type: ActionTypes.global.CHANGE_PHASE
    }
  )).toStrictEqual({
    limited: {
      available: true,
      postCount: 0
    },
    public: {
      postCount: 0
    }
  })
})
