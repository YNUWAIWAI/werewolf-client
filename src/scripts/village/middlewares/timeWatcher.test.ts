import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import {initialState as agents} from '../reducers/agents'
import {initialState as base} from '../reducers/base'
import {initialState as chat} from '../reducers/chat'
import {initialState as commandInputBox} from '../reducers/commandInputBox'
import {initialState as commandSelection} from '../reducers/commandSelection'
import fetch from 'node-fetch'
import {initialState as hideButton} from '../reducers/hideButton'
import {initialState as language} from '../reducers/language'
import middleware from './timeWatcher'
import {initialState as modal} from '../reducers/modal'
import {initialState as obfucator} from '../reducers/obfucator'
import {initialState as prediction} from '../reducers/prediction'
import {initialState as result} from '../reducers/result'
import {initialState as roles} from '../reducers/roles'
import {socket} from '../actions'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('socket/MESSAGE', () => {
  describe('phase: night -> morning, date: 0 -> 1', () => {
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
    const payload: village.Payload$systemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
      'agent': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    }

    test('validate the JSON', async () => {
      const ajv = new Ajv()

      expect.hasAssertions()
      await Promise.all([
        fetch(`${BASE_URI}/systemMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/agent.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/base.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/boardResult.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/role.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/votingResult.json`)
          .then(res => res.json())
      ])
        .then(schemas => {
          const [schema, ... rest] = schemas
          const validate = ajv
            .addSchema(rest)
            .validate(schema, payload)

          expect(validate).toBe(true)
        })
    })
    test('dispatch correctly', () => {
      actionHandler(socket.message(payload))
      expect(dispatch).toHaveBeenCalledTimes(2)
      expect(dispatch).toHaveBeenCalledWith({
        from: 'night',
        to: 'morning',
        type: ActionTypes.global.CHANGE_PHASE
      })
      expect(dispatch).toHaveBeenCalledWith({
        from: 0,
        to: 1,
        type: ActionTypes.global.CHANGE_DATE
      })
    })
  })
  describe('phase: night -> morning, date: 0', () => {
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
    const payload: village.Payload$systemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
      'agent': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 0,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.morning,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    }

    test('validate the JSON', async () => {
      const ajv = new Ajv()

      expect.hasAssertions()
      await Promise.all([
        fetch(`${BASE_URI}/systemMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/agent.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/base.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/boardResult.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/role.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/votingResult.json`)
          .then(res => res.json())
      ])
        .then(schemas => {
          const [schema, ... rest] = schemas
          const validate = ajv
            .addSchema(rest)
            .validate(schema, payload)

          expect(validate).toBe(true)
        })
    })
    test('dispatch correctly', () => {
      actionHandler(socket.message(payload))
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        from: 'night',
        to: 'morning',
        type: ActionTypes.global.CHANGE_PHASE
      })
    })
  })
  describe('phase: night, date: 0 -> 1', () => {
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
    const payload: village.Payload$systemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
      'agent': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 1,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.night,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    }

    test('validate the JSON', async () => {
      const ajv = new Ajv()

      expect.hasAssertions()
      await Promise.all([
        fetch(`${BASE_URI}/systemMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/agent.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/base.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/boardResult.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/role.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/votingResult.json`)
          .then(res => res.json())
      ])
        .then(schemas => {
          const [schema, ... rest] = schemas
          const validate = ajv
            .addSchema(rest)
            .validate(schema, payload)

          expect(validate).toBe(true)
        })
    })
    test('dispatch correctly', () => {
      actionHandler(socket.message(payload))
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        from: 0,
        to: 1,
        type: ActionTypes.global.CHANGE_DATE
      })
    })
  })
  describe('phase: night, date: 0', () => {
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
    const payload: village.Payload$systemMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.VotingResult
      ],
      '@id': 'https://licos.online/state/0.2/village#3/systemMessage',
      'agent': [],
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 0,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'intensionalDisclosureRange': village.Channel.private,
      'phase': village.Phase.night,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'role': [],
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'id': 3,
        'lang': village.Language.ja,
        'name': '横国の森の奥にある時代に取り残された小さな村',
        'totalNumberOfAgents': 15
      }
    }

    test('validate the JSON', async () => {
      const ajv = new Ajv()

      expect.hasAssertions()
      await Promise.all([
        fetch(`${BASE_URI}/systemMessage.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/agent.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/avatar.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/base.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/boardResult.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/role.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/time.json`)
          .then(res => res.json()),
        fetch(`${BASE_URI}/votingResult.json`)
          .then(res => res.json())
      ])
        .then(schemas => {
          const [schema, ... rest] = schemas
          const validate = ajv
            .addSchema(rest)
            .validate(schema, payload)

          expect(validate).toBe(true)
        })
    })
    test('dispatch correctly', () => {
      actionHandler(socket.message(payload))
      expect(dispatch).toHaveBeenCalledTimes(0)
    })
  })
})