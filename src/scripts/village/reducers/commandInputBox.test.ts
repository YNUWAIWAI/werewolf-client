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
import {message} from '../actions'
import {village} from '../types'

describe('message/CHAT_MESSAGE', () => {
  test('isMine={true}', () => {
    expect(reducer(
      initialState,
      message.chatMessage(myMessageOnChat)
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
      message.chatMessage(theirMessageOnChat)
    )).toStrictEqual(initialState)
  })
})
describe('message/SYSTEM_MESSAGE', () => {
  test('seer 1', () => {
    expect(reducer(
      initialState,
      message.systemMessage(firstMorning)
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
      message.systemMessage(firstMorning2)
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
      message.systemMessage(firstMorning6)
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
      message.systemMessage(firstMorning7)
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
      type: ActionTypes.App.CHANGE_PHASE
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
