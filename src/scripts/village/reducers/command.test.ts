/* global village */
import * as ActionTypes from '../constants/ActionTypes'
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
    ).toEqual(
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
    ).toEqual(
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
    ).toEqual(
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
    ).toEqual(
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
    ).toEqual(
      {
        content: Content.CommandPostMortem,
        isDead: false
      }
    )
  })
})
