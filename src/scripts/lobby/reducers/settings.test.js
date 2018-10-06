// @flow
import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './settings'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'
import {settings} from './fakeServer'

describe('scoket/MESSAGE', () => {
  describe('settings', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/settings.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, settings)

          expect(validate).toBe(true)
        })
    })
    test('reduce correctly', () => {
      expect(
        reducer(
          initialState,
          {
            payload: settings,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        {
          initialValue: {
            language: 'ja',
            userEmail: 'kenhirai@ynu.jp',
            userName: 'ken hirai'
          },
          menuItems: [
            {
              text: 'Return to the Main Page',
              types: [ActionTypes.SHOW_MAIN]
            }
          ]
        }
      )
    })
  })
})
