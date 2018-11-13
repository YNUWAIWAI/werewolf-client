// @flow
import * as ActionTypes from '../constants/ActionTypes'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import {initialState as agents} from '../reducers/agents'
import {initialState as base} from '../reducers/base'
import {initialState as chat} from '../reducers/chat'
import {initialState as commandInputBox} from '../reducers/commandInputBox'
import {initialState as commandSelection} from '../reducers/commandSelection'
import fetch from 'node-fetch'
import {initialState as hideButton} from '../reducers/hideButton'
import {initialState as language} from '../reducers/language'
import middleware from './client2server'
import {initialState as modal} from '../reducers/modal'
import {initialState as obfucator} from '../reducers/obfucator'
import {initialState as prediction} from '../reducers/prediction'
import {initialState as result} from '../reducers/result'
import {initialState as roles} from '../reducers/roles'

const BASE_URI = `https://raw.githubusercontent.com/ktr-skmt/werewolfworld/gh-pages/schema/${VERSION}`
// const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
const ajv = new Ajv()

describe('CHANGE_PREDICTION_BOARD', () => {
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
    type: ActionTypes.CHANGE_PREDICTION_BOARD
  }

  test('validate the JSON of advancedSearch', async () => {
    expect.hasAssertions()
    await fetch(`${BASE_URI}/boardMessage.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, advancedSearchPayload)

        expect(validate).toBe(true)
      })
  })
  test('dispatch correctly', () => {
    actionHandler(action)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      payload: advancedSearchPayload,
      type: ActionTypes.socket.SEND
    })
  })

})
