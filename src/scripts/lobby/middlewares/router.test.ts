import * as ActionTypes from '../constants/ActionTypes'
import middleware, {
  LobbyType,
  getLobbyType
} from './router'
import {ChangeLobby} from '../actions'
import {createHashHistory} from 'history'
import fakeStore from '../containers/fakeStore'
import {lobby} from '../types'

describe('getLobbyType', () => {
  test('/audience', () => {
    expect(getLobbyType('/audience')).toBe('audience')
  })
  test('/audience/', () => {
    expect(getLobbyType('/audience/')).toBe('audience')
  })
  test('/audience/lobby', () => {
    expect(getLobbyType('/audience/lobby')).toBe('audience')
  })
  test('/', () => {
    expect(getLobbyType('/')).toBeNull()
  })
})
describe('INIT', () => {
  test('/audience', () => {
    const history = createHashHistory()
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action: {type: ActionTypes.App.INIT} = {
      type: ActionTypes.App.INIT
    }

    history.push('/audience')
    actionHandler(action)
    expect(dispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith({
      lobby: lobby.LobbyType.onymousAudience,
      type: ActionTypes.App.CHANGE_LOBBY
    })
  })
  test('/human', () => {
    const history = createHashHistory()
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    history.push('/human')
    actionHandler({
      type: ActionTypes.App.INIT
    })
    expect(dispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith({
      lobby: lobby.LobbyType.human,
      type: ActionTypes.App.CHANGE_LOBBY
    })
  })
  test('/robot', () => {
    const history = createHashHistory()
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    history.push('/robot')
    actionHandler({
      type: ActionTypes.App.INIT
    })
    expect(dispatch).toHaveBeenCalled()
    expect(dispatch).toHaveBeenCalledWith({
      lobby: lobby.LobbyType.robot,
      type: ActionTypes.App.CHANGE_LOBBY
    })
  })
  test('/', () => {
    const history = createHashHistory()
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    history.push('/')
    actionHandler({
      type: ActionTypes.App.INIT
    })
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
})
