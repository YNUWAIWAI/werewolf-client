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
import {village} from '../types'

describe('CHANGE_PHASE', () => {
  test('noon -> night', () => {
    const action: ChangePhase = {
      from: village.Phase.noon,
      to: village.Phase.night,
      type: ActionTypes.CHANGE_PHASE
    }

    expect(
      reducer(
        initialState,
        action
      )
    ).toStrictEqual({
      loading: true,
      visible: false
    })
  })
  test('night -> result', () => {
    const action: ChangePhase = {
      from: village.Phase.night,
      to: village.Phase.result,
      type: ActionTypes.CHANGE_PHASE
    }

    expect(
      reducer(
        initialState,
        action
      )
    ).toStrictEqual(initialState)
  })
  test('result -> postMortem', () => {
    const action: ChangePhase = {
      from: village.Phase.result,
      to: village.Phase.postMortem,
      type: ActionTypes.CHANGE_PHASE
    }

    expect(
      reducer(
        initialState,
        action
      )
    ).toStrictEqual(initialState)
  })
})
test('HIDE_RESULT', () => {
  const action: HideResult = {
    type: ActionTypes.HIDE_RESULT
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toStrictEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_NO', () => {
  const action: SelectNo = {
    type: ActionTypes.SELECT_NO
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toStrictEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_YES', () => {
  const action: SelectYes = {
    characterId: '1',
    type: ActionTypes.SELECT_YES
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toStrictEqual({
    loading: true,
    visible: false
  })
})
test('SELECT_OPTION', () => {
  const action: SelectOption = {
    characterId: '1',
    type: ActionTypes.SELECT_OPTION
  }

  expect(
    reducer(
      initialState,
      action
    )
  ).toStrictEqual({
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
  ).toStrictEqual({
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
  ).toStrictEqual({
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
  ).toStrictEqual({
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
  ).toStrictEqual({
    loading: true,
    visible: true
  })
  expect(
    reducer(
      initialState,
      socket.message(result)
    )
  ).toStrictEqual({
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
  ).toStrictEqual({
    loading: false,
    visible: false
  })
})
