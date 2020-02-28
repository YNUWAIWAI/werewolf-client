import * as ActionTypes from '../constants/ActionTypes'
import middleware, {getLobbyType} from './router'
import {createMemoryHistory} from 'history'
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
    const history = createMemoryHistory()
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
    const history = createMemoryHistory()
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
    const history = createMemoryHistory()
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
    const history = createMemoryHistory()
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
describe('SELECT_VILLAGE', () => {
  test('lobbyType: human', () => {
    const history = createMemoryHistory()
    const replace = jest.fn()
    const store = fakeStore()

    history.push('/human/lobby')
    history.replace = replace

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      id: 1,
      type: ActionTypes.App.SELECT_VILLAGE
    })
    expect(replace).toHaveBeenCalled()
    expect(replace).toHaveBeenCalledWith('/human/waitingForPlayers')
  })
  test('lobbyType: null', () => {
    const history = createMemoryHistory()
    const replace = jest.fn()
    const store = fakeStore()

    history.replace = replace

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      id: 1,
      type: ActionTypes.App.SELECT_VILLAGE
    })
    expect(replace).toHaveBeenCalled()
    expect(replace).toHaveBeenCalledWith('/')
  })
})
describe('BUILD_VILLAGE', () => {
  test('lobbyType: human', () => {
    const history = createMemoryHistory()
    const replace = jest.fn()
    const store = fakeStore()

    history.push('/human/buildVillage')
    history.replace = replace

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.BUILD_VILLAGE
    })
    expect(replace).toHaveBeenCalled()
    expect(replace).toHaveBeenCalledWith('/human/waitingForPlayers')
  })
  test('lobbyType: null', () => {
    const history = createMemoryHistory()
    const replace = jest.fn()
    const store = fakeStore()

    history.replace = replace

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.BUILD_VILLAGE
    })
    expect(replace).toHaveBeenCalled()
    expect(replace).toHaveBeenCalledWith('/')
  })
})
describe('SHOW_ADVANCED_SEARCH', () => {
  test('lobbyType: human', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push('/human/lobby')
    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_ADVANCED_SEARCH
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/human/advancedSearch')
  })
  test('lobbyType: null', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_ADVANCED_SEARCH
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/')
  })
})
describe('SHOW_BUILD_VILLAGE', () => {
  test('lobbyType: human', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push('/human/lobby')
    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_BUILD_VILLAGE
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/human/buildVillage')
  })
  test('lobbyType: null', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_BUILD_VILLAGE
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/')
  })
})
describe('SHOW_CREATE_NEW_AVATAR', () => {
  test('lobbyType: human', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push('/human/selectAvatar')
    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_CREATE_NEW_AVATAR
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/human/createNewAvatar')
  })
  test('lobbyType: robot', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push('/robot/selectAvatar')
    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_CREATE_NEW_AVATAR
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/robot/createNewAvatar')
  })
})
test('SHOW_HISTORY', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_HISTORY
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/history')
})
describe('SHOW_ID_SEARCH', () => {
  test('lobbyType: human', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push('/human/lobby')
    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_ID_SEARCH
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/human/idSearch')
  })
  test('lobbyType: null', () => {
    const history = createMemoryHistory()
    const push = jest.fn()
    const store = fakeStore()

    history.push = push

    const nextHandler = middleware(history)(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)

    actionHandler({
      type: ActionTypes.App.SHOW_ID_SEARCH
    })
    expect(push).toHaveBeenCalled()
    expect(push).toHaveBeenCalledWith('/')
  })
})
test('SHOW_LOBBY_FOR_AUDIENCE', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_LOBBY_FOR_AUDIENCE
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/audience/lobby')
})
test('SHOW_LOBBY_FOR_HUMAN_PLAYER', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_LOBBY_FOR_HUMAN_PLAYER
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/human/lobby')
})
test('SHOW_LOBBY_FOR_ROBOT_PLAYER', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_LOBBY_FOR_ROBOT_PLAYER
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/robot/lobby')
})
test('SHOW_MAIN', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_MAIN
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/')
})
test('SHOW_SELECT_HUMAN_AVATAR', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_SELECT_HUMAN_AVATAR
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/human/selectAvatar')
})
test('SHOW_SELECT_ROBOT_AVATAR', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_SELECT_ROBOT_AVATAR
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/robot/selectAvatar')
})
test('SHOW_SETTINGS', () => {
  const history = createMemoryHistory()
  const push = jest.fn()
  const store = fakeStore()

  history.push = push

  const nextHandler = middleware(history)(store)
  const dispatchAPI = jest.fn()
  const actionHandler = nextHandler(dispatchAPI)

  actionHandler({
    type: ActionTypes.App.SHOW_SETTINGS
  })
  expect(push).toHaveBeenCalled()
  expect(push).toHaveBeenCalledWith('/settings')
})
