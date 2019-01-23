import * as ActionTypes from '../constants/ActionTypes'
import * as Ajv from 'ajv'
import reducer, {initialState} from './language'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

test('CHANGE_LANGUAGE', () => {
  expect(
    reducer(
      initialState,
      {
        language: lobby.Language.ja,
        type: ActionTypes.global.CHANGE_LANGUAGE
      }
    )
  ).toEqual(
    lobby.Language.ja
  )
})
describe('socket/MESSAGE', () => {
  describe('avatar', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()
    const payload: lobby.Payload = {
      image: '/assets/images/avatar/default/user.png',
      lang: lobby.Language.ja,
      name: 'Alice',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3301',
      type: lobby.PayloadType.avatar
    }

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/avatar.json`)
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
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        'ja'
      )
    })
  })
})

