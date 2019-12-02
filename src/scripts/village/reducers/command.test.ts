import {
  firstMorning,
  flavorText,
  night,
  noon,
  result
} from './fakeServer'
import reducer, {
  Content,
  initialState
} from './command'
import {message} from '../actions'

describe('message/SYSTEM_MESSAGE', () => {
  test('noon', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(noon)
      )
    ).toStrictEqual(
      {
        content: Content.CommandSelection,
        isDead: false
      }
    )
  })
  test('firstMorning', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(firstMorning)
      )
    ).toStrictEqual(
      {
        content: Content.CommandInputBox,
        isDead: false
      }
    )
  })
  test('flavorText', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(flavorText)
      )
    ).toStrictEqual(
      {
        content: Content.CommandSelection,
        isDead: false
      }
    )
  })
  test('night', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(night)
      )
    ).toStrictEqual(
      {
        content: Content.CommandSelection,
        isDead: false
      }
    )
  })
  test('result', () => {
    expect(
      reducer(
        initialState,
        message.systemMessage(result)
      )
    ).toStrictEqual(
      {
        content: Content.CommandPostMortem,
        isDead: false
      }
    )
  })
})
