import * as ActionTypes from '../constants/ActionTypes'
import {
  firstMorning,
  firstMorning2,
  firstMorning6,
  firstMorning7,
  myMessageOnChat,
  theirMessageOnChat
} from './fakeServer'
import reducer, {initialState} from './commandInputBox'
import {socket} from '../actions'
import {village} from '../types'

describe('socket/MESSAGE', () => {
  test('isMine={true}', () => {
    expect(reducer(
      initialState,
      socket.message(myMessageOnChat)
    )).toStrictEqual({
      public: {
        numberOfChatMessages: 7
      },
      werewolf: {
        available: false,
        numberOfChatMessages: 0
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
      public: {
        numberOfChatMessages: 0
      },
      werewolf: {
        available: false,
        numberOfChatMessages: 0
      }
    })
  })
  test('seer 2', () => {
    expect(reducer(
      initialState,
      socket.message(firstMorning2)
    )).toStrictEqual({
      public: {
        numberOfChatMessages: 0
      },
      werewolf: {
        available: false,
        numberOfChatMessages: 0
      }
    })
  })
  test('werewolf 1', () => {
    expect(reducer(
      initialState,
      socket.message(firstMorning6)
    )).toStrictEqual({
      public: {
        numberOfChatMessages: 0
      },
      werewolf: {
        available: false,
        numberOfChatMessages: 0
      }
    })
  })
  test('werewolf 2', () => {
    expect(reducer(
      initialState,
      socket.message(firstMorning7)
    )).toStrictEqual({
      public: {
        numberOfChatMessages: 0
      },
      werewolf: {
        available: true,
        numberOfChatMessages: 0
      }
    })
  })
})
test('CHANGE_DAY', () => {
  expect(reducer(
    {
      public: {
        numberOfChatMessages: 10
      },
      werewolf: {
        available: true,
        numberOfChatMessages: 10
      }
    },
    {
      from: village.Phase.morning,
      to: village.Phase.noon,
      type: ActionTypes.CHANGE_PHASE
    }
  )).toStrictEqual({
    public: {
      numberOfChatMessages: 0
    },
    werewolf: {
      available: true,
      numberOfChatMessages: 0
    }
  })
})
