/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import {
  ChangePhase,
  ClickNavigationButton,
  HideResult,
  SelectNo,
  SelectOption,
  SelectYes,
  socket
} from '../actions'
import {firstMorning, result} from './fakeServer'
import reducer, {initialState} from './obfucator'

describe('CHANGE_PHASE', () => {
  test('day -> night', () => {
    const action: ChangePhase = {
      from: village.Phase.day,
      to: village.Phase.night,
      type: ActionTypes.global.CHANGE_PHASE
    }

    expect(
      reducer(
        initialState,
        action
      )
    ).toEqual({
      loading: true,
      visible: false
    })
  })
  test('night -> result', () => {
    const action: ChangePhase = {
      from: village.Phase.night,
      to: village.Phase.result,
      type: ActionTypes.global.CHANGE_PHASE
    }

    expect(
      reducer(
        initialState,
        action
      )
    ).toEqual(initialState)
  })
  test('result -> postMortem', () => {
    const action: ChangePhase = {
      from: village.Phase.result,
      to: village.Phase.postMortem,
      type: ActionTypes.global.CHANGE_PHASE
    }

    expect(
      reducer(
        initialState,
        action
      )
    ).toEqual(initialState)
  })
})
test('HIDE_RESULT', () => {
  const action: HideResult = {
    type: ActionTypes.global.HIDE_RESULT
  }

  expect(
    reducer(
      initialState,
      action
    )).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_NO', () => {
  const action: SelectNo = {
    type: ActionTypes.global.SELECT_NO
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_YES', () => {
  const action: SelectYes = {
    agentId: 1,
    type: ActionTypes.global.SELECT_YES
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_OPTION', () => {
  const action: SelectOption = {
    agentId: 1,
    type: ActionTypes.global.SELECT_OPTION
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: false,
    visible: true
  })
})
test('SHOW_RESULT', () => {
  const action: ClickNavigationButton = {
    type: ActionTypes.Navigation.SHOW_RESULT
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toEqual({
    loading: false,
    visible: true
  })
})
test('socket/CLOSE', () => {
  expect(
    reducer(
      initialState,
      socket.close(new CloseEvent('close event'))
    )
  ).toEqual({
    loading: true,
    visible: true
  })
})
test('socket/ERROR', () => {
  expect(
    reducer(
      initialState,
      socket.error(new Event('error'))
    )
  ).toEqual({
    loading: true,
    visible: true
  })
})
test('socket/MESSAGE', () => {
  expect(
    reducer(
      initialState,
      socket.message(firstMorning)
    )
  ).toEqual({
    loading: true,
    visible: true
  })
  expect(
    reducer(
      initialState,
      socket.message(result)
    )
  ).toEqual({
    loading: false,
    visible: true
  })
})
test('socket/OPEN', () => {
  expect(
    reducer(
      initialState,
      socket.open(new Event('open'))
    )
  ).toEqual({
    loading: false,
    visible: false
  })
})
