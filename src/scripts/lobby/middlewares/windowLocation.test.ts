import * as ActionTypes from '../constants/ActionTypes'
import {
  SelectVillage,
  ShowVillage,
  SubmitLogout,
  Transition
} from '../actions'
import fakeStore from '../containers/fakeStore'
import middleware from './windowLocation'

test('LOGOUT', () => {
  const spy = jest.spyOn(window.location, 'replace').mockImplementation(() => '')
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: SubmitLogout = {
    type: ActionTypes.global.LOGOUT
  }

  actionHandler(action)
  expect(spy).toHaveBeenCalled()
})
test('SELECT_VILLAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: SelectVillage = {
    id: 4,
    type: ActionTypes.global.SELECT_VILLAGE
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeDefined()
})
test('BUILD_VILLAGE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.BUILD_VILLAGE
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeDefined()
})
test('SHOW_SETTINGS', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.SHOW_SETTINGS
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeDefined()
})
test('SHOW_CREDITS', () => {
  const spy = jest.spyOn(window, 'open').mockReturnValue(window)
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.SHOW_CREDITS
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeDefined()
  expect(spy).toHaveBeenCalled()
})
test('SHOW_HOW_TO_PLAY', () => {
  const spy = jest.spyOn(window, 'open').mockReturnValue(window)
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.SHOW_HOW_TO_PLAY
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeDefined()
  expect(spy).toHaveBeenCalled()
})
test('SHOW_LOBBY_FOR_AUDIENCE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.SHOW_LOBBY_FOR_AUDIENCE
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeNull()
})
test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.SHOW_LOBBY_FOR_HUMAN_PLAYER
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeNull()
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: Transition = {
    type: ActionTypes.Target.SHOW_LOBBY_FOR_ROBOT_PLAYER
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeNull()
})
test('SHOW_VILLAGE', () => {
  const spy = jest.spyOn(window.location, 'replace').mockImplementation(() => '')
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ShowVillage = {
    type: ActionTypes.global.SHOW_VILLAGE
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeNull()
  expect(spy).toHaveBeenCalled()
})
