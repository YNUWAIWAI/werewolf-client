/* global village */
import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import {initialState as base} from '../reducers/base'
import fakeStore from '../containers/fakeStore'
import fetch from 'node-fetch'
import middleware from './timeWatcher'
import {socket} from '../actions'

const BASE_URI = `https://werewolf.world/schema/${VERSION}`

describe('socket/MESSAGE', () => {
  describe('phase: night -> morning, date: 0 -> 1', () => {
    const store = fakeStore({
      base: {
        ... base,
        date: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
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
        'characterLimit': 10,
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
    const store = fakeStore({
      base: {
        ... base,
        date: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
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
        'characterLimit': 10,
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
  describe('phase: night -> flavor text, date: 0', () => {
    const store = fakeStore({
      base: {
        ... base,
        date: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
    const dispatchAPI = jest.fn()
    const actionHandler = nextHandler(dispatchAPI)
    const payload: village.Payload$flavorTextMessage = {
      '@context': [
        village.BaseContext.Base,
        village.BaseContext.FlavorText
      ],
      '@id': 'https://licos.online/state/0.2/village#3/flavorTextMessage',
      'clientTimestamp': '2006-10-07T12:06:56.568+09:00',
      'date': 0,
      'directionality': village.Directionality.serverToClient,
      'extensionalDisclosureRange': [],
      'flavorText': [],
      'intensionalDisclosureRange': village.Channel.public,
      'phase': village.Phase.flavorText,
      'phaseStartTime': '2006-10-07T12:06:56.568+09:00',
      'phaseTimeLimit': 600,
      'serverTimestamp': '2006-10-07T12:06:56.568+09:00',
      'token': 'eFVr3O93oLhmnE8OqTMl5VSVGIV',
      'village': {
        '@context': village.Context.Village,
        '@id': 'https://licos.online/state/0.2/village',
        'characterLimit': 10,
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
        to: 'flavor text',
        type: ActionTypes.global.CHANGE_PHASE
      })
    })
  })
  describe('phase: night, date: 0 -> 1', () => {
    const store = fakeStore({
      base: {
        ... base,
        date: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
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
        'characterLimit': 10,
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
    const store = fakeStore({
      base: {
        ... base,
        date: 0,
        phase: village.Phase.night
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const nextHandler = middleware(store)
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
        'characterLimit': 10,
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
