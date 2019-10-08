import {day, firstMorning, flavorText, night, result} from './fakeServer'
import reducer, {Content, initialState} from './command'
import {socket} from '../actions'

describe('socket/MESSAGE', () => {
  test('day', () => {
    expect(
      reducer(
        initialState,
        socket.message(day)
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
        socket.message(firstMorning)
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
        socket.message(flavorText)
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
        socket.message(night)
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
        socket.message(result)
      )
    ).toStrictEqual(
      {
        content: Content.CommandPostMortem,
        isDead: false
      }
    )
  })
})
