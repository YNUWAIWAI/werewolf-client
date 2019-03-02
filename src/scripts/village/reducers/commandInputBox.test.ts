/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {firstMorning, firstMorning2, myMessageOnChat, theirMessageOnChat} from './fakeServer'
import reducer, {initialState} from './commandInputBox'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('isMine={true}', () => {
    expect(reducer(
      initialState,
      socket.message(myMessageOnChat)
    )).toEqual({
      characterLimit: 140,
      limited: {
        available: false,
        postCount: 0
      },
      postCountLimit: 10,
      public: {
        postCount: 7
      }
    })
  })
  test('isMine={false}', () => {
    expect(reducer(
      initialState,
      socket.message(theirMessageOnChat)
    )).toEqual(initialState)
  })
  test('seer 1', () => {
    expect(reducer(
      initialState,
      socket.message(firstMorning)
    )).toEqual({
      characterLimit: 140,
      limited: {
        available: false,
        postCount: 0
      },
      postCountLimit: 10,
      public: {
        postCount: 0
      }
    })
  })
  test('seer 2', () => {
    expect(reducer(
      initialState,
      socket.message(firstMorning2)
    )).toEqual({
      characterLimit: 140,
      limited: {
        available: true,
        postCount: 0
      },
      postCountLimit: 10,
      public: {
        postCount: 0
      }
    })
  })
})
test('CHANGE_DATE', () => {
  expect(reducer(
    {
      characterLimit: 140,
      limited: {
        available: true,
        postCount: 10
      },
      postCountLimit: 10,
      public: {
        postCount: 10
      }
    },
    {
      from: village.Phase.morning,
      to: village.Phase.day,
      type: ActionTypes.global.CHANGE_PHASE
    }
  )).toEqual({
    characterLimit: 140,
    limited: {
      available: true,
      postCount: 0
    },
    postCountLimit: 10,
    public: {
      postCount: 0
    }
  })
})
