import * as ActionTypes from '../constants/ActionTypes'
import {
  ShowLobby
} from '../actions'
import fakeStore from '../containers/fakeStore'
import middleware from './windowLocation'

test('PROLOGUE', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: {type: ActionTypes.global.PROLOGUE} = {
    type: ActionTypes.global.PROLOGUE
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeDefined()
})
test('SHOW_LOBBY', () => {
  const spy = jest.spyOn(window.location, 'replace').mockImplementation(() => '')
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const nextHandler = middleware(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)
  const action: ShowLobby = {
    type: ActionTypes.global.SHOW_LOBBY
  }

  actionHandler(action)
  expect(window.onbeforeunload).toBeNull()
  expect(spy).toHaveBeenCalled()
})
