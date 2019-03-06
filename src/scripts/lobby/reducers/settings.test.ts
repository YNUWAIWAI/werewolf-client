import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import reducer, {initialState} from './settings'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'
import {settings} from './fakeServer'

describe('scoket/MESSAGE', () => {
  describe('settings', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`

    test('validate the JSON', async () => {
      expect.hasAssertions()
      const ajv = new Ajv()
      const schema = await fetch(`${SERVER2CLIENT}/settings.json`)
        .then(res => res.json())
      const validate = ajv.validate(schema, settings)

      if (!validate) {
        console.error(ajv.errors)
      }
      expect(validate).toBe(true)
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
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.Target.SHOW_MAIN]
            }
          ]
        }
      )
    })
  })
})
