// @flow
/* eslint sort-keys: 0 */
import * as ActionTypes from '../constants/ActionTypes'
import {initialState as agents} from '../reducers/agents'
import {initialState as base} from '../reducers/base'
import {initialState as chat} from '../reducers/chat'
import {initialState as commandInputBox} from '../reducers/commandInputBox'
import {initialState as commandSelection} from '../reducers/commandSelection'
import {initialState as hideButton} from '../reducers/hideButton'
import {initialState as language} from '../reducers/language'
import middleware from './timeWatcher'
import {initialState as modal} from '../reducers/modal'
import {initialState as obfucator} from '../reducers/obfucator'
import {initialState as prediction} from '../reducers/prediction'
import {initialState as result} from '../reducers/result'
import {initialState as roles} from '../reducers/roles'

describe('socket/MESSAGE', () => {
  test('phase: night -> day conversation, date: 0 -> 1', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents,
      base,
      chat,
      commandInputBox,
      commandSelection,
      hideButton,
      language,
      modal,
      obfucator,
      prediction,
      result,
      roles
    })
    const nextHandler = middleware({
      dispatch,
      getState
    })
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      payload: {
        '@context': [
          'https://werewolf.world/context/0.1/base.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.1/systemMessage',
        'villageId': 3,
        'villageName': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15,
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
        'phase': 'day conversation',
        'date': 1,
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'directionality': 'server to client',
        'intensionalDisclosureRange': 'private',
        'extensionalDisclosureRange': [],
        'myAgent': {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'myAgentId': 1,
          'myAgentName': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'myAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
          'myRole': {
            '@id': 'https://werewolf.world/resource/0.1/villager',
            'myRoleName': {
              'en': 'Villager',
              'ja': '村人'
            },
            'myRoleImage': 'https://werewolf.world/image/0.1/villager.jpg'
          }
        },
        'agent': [],
        'role': []
      },
      type: ActionTypes.socket.MESSAGE
    }

    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenCalledWith({
      from: 'night',
      to: 'day conversation',
      type: ActionTypes.CHANGE_PHASE
    })
    expect(dispatch).toHaveBeenCalledWith({
      from: 0,
      to: 1,
      type: ActionTypes.CHANGE_DATE
    })
  })
  test('phase: night -> day conversation, date: 0', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents,
      base,
      chat,
      commandInputBox,
      commandSelection,
      hideButton,
      language,
      modal,
      obfucator,
      prediction,
      result,
      roles
    })
    const nextHandler = middleware({
      dispatch,
      getState
    })
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      payload: {
        '@context': [
          'https://werewolf.world/context/0.1/base.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.1/systemMessage',
        'villageId': 3,
        'villageName': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15,
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
        'phase': 'day conversation',
        'date': 0,
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'directionality': 'server to client',
        'intensionalDisclosureRange': 'private',
        'extensionalDisclosureRange': [],
        'myAgent': {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'myAgentId': 1,
          'myAgentName': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'myAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
          'myRole': {
            '@id': 'https://werewolf.world/resource/0.1/villager',
            'myRoleName': {
              'en': 'Villager',
              'ja': '村人'
            },
            'myRoleImage': 'https://werewolf.world/image/0.1/villager.jpg'
          }
        },
        'agent': [],
        'role': []
      },
      type: ActionTypes.socket.MESSAGE
    }

    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      from: 'night',
      to: 'day conversation',
      type: ActionTypes.CHANGE_PHASE
    })
  })
  test('phase: night, date: 0 -> 1', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents,
      base,
      chat,
      commandInputBox,
      commandSelection,
      hideButton,
      language,
      modal,
      obfucator,
      prediction,
      result,
      roles
    })
    const nextHandler = middleware({
      dispatch,
      getState
    })
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      payload: {
        '@context': [
          'https://werewolf.world/context/0.1/base.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.1/systemMessage',
        'villageId': 3,
        'villageName': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15,
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
        'phase': 'night',
        'date': 1,
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'directionality': 'server to client',
        'intensionalDisclosureRange': 'private',
        'extensionalDisclosureRange': [],
        'myAgent': {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'myAgentId': 1,
          'myAgentName': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'myAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
          'myRole': {
            '@id': 'https://werewolf.world/resource/0.1/villager',
            'myRoleName': {
              'en': 'Villager',
              'ja': '村人'
            },
            'myRoleImage': 'https://werewolf.world/image/0.1/villager.jpg'
          }
        },
        'agent': [],
        'role': []
      },
      type: ActionTypes.socket.MESSAGE
    }

    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      from: 0,
      to: 1,
      type: ActionTypes.CHANGE_DATE
    })
  })
  test('phase: night, date: 0', () => {
    const dispatch = jest.fn()
    const getState = () => ({
      agents,
      base,
      chat,
      commandInputBox,
      commandSelection,
      hideButton,
      language,
      modal,
      obfucator,
      prediction,
      result,
      roles
    })
    const nextHandler = middleware({
      dispatch,
      getState
    })
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const action = {
      payload: {
        '@context': [
          'https://werewolf.world/context/0.1/base.jsonld'
        ],
        '@id': 'https://werewolf.world/resource/0.1/systemMessage',
        'villageId': 3,
        'villageName': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15,
        'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
        'phase': 'night',
        'date': 0,
        'phaseTimeLimit': 600,
        'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
        'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
        'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
        'directionality': 'server to client',
        'intensionalDisclosureRange': 'private',
        'extensionalDisclosureRange': [],
        'myAgent': {
          '@id': 'https://werewolf.world/resource/0.1/Walter',
          'myAgentId': 1,
          'myAgentName': {
            'en': 'Walter',
            'ja': 'ヴァルター'
          },
          'myAgentImage': 'https://werewolf.world/image/0.1/Walter.jpg',
          'myRole': {
            '@id': 'https://werewolf.world/resource/0.1/villager',
            'myRoleName': {
              'en': 'Villager',
              'ja': '村人'
            },
            'myRoleImage': 'https://werewolf.world/image/0.1/villager.jpg'
          }
        },
        'agent': [],
        'role': []
      },
      type: ActionTypes.socket.MESSAGE
    }

    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
})
