// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './language'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: 'ja',
        type: ActionTypes.CHANGE_LANGUAGE
      }
    )
  ).toEqual(
    'ja'
  )
})
describe('PLAYED', () => {
  const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
  const SERVER2CLIENT = `${BASE_URI}/server2client`
  const ajv = new Ajv()
  const payload = {
    lang: 'ja',
    type: 'played'
  }

  test('validate the JSON', async () => {
    expect.hasAssertions()
    await fetch(`${SERVER2CLIENT}/played.json`)
      .then(res => res.json())
      .then(schema => {
        const validate = ajv.validate(schema, payload)

        expect(validate).toBe(true)
      })
  })

  test('reduce correctly', () => {
    expect(
      reducer(
        initialState,
        {
          payload,
          type: ActionTypes.PLAYED
        }
      )
    ).toEqual(
      'ja'
    )
  })
})
