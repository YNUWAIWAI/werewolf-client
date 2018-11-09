// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {enterHumanPlayerLobby, enterOnymousAudienceLobby, enterRobotPlayerLobby} from './fakeServer'
import reducer, {initialState} from './lobbyForHumanPlayer'
import Ajv from 'ajv'
import {VERSION} from '../constants/Version'
import fetch from 'node-fetch'

test('REFRESH', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.REFRESH
      }
    )
  ).toEqual(
    {
      image: '',
      isPlayer: true,
      menuItems: [
        {
          id: 'Menu.showBuildVillage',
          types: [ActionTypes.SHOW_BUILD_VILLAGE]
        },
        {
          id: 'Menu.showIdSearch',
          types: [ActionTypes.SHOW_ID_SEARCH]
        },
        {
          id: 'Menu.showAdvancedSearch',
          types: [ActionTypes.SHOW_ADVANCED_SEARCH]
        },
        {
          id: 'Menu.refresh',
          isLoading: true,
          types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
        },
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      name: '',
      villageItems: []
    }
  )
})
describe('socket/MESSAGE', () => {
  describe('human player', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/lobby.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, enterHumanPlayerLobby)

          expect(validate).toBe(true)
        })
    })
    test('reduce correctly', () => {
      expect(
        reducer(
          initialState,
          {
            payload: enterHumanPlayerLobby,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        {
          image: '',
          isPlayer: true,
          menuItems: [
            {
              id: 'Menu.showBuildVillage',
              types: [ActionTypes.SHOW_BUILD_VILLAGE]
            },
            {
              id: 'Menu.showIdSearch',
              types: [ActionTypes.SHOW_ID_SEARCH]
            },
            {
              id: 'Menu.showAdvancedSearch',
              types: [ActionTypes.SHOW_ADVANCED_SEARCH]
            },
            {
              id: 'Menu.refresh',
              isLoading: false,
              types: [ActionTypes.REFRESH, ActionTypes.SHOW_LOBBY_FOR_HUMAN_PLAYER]
            },
            {
              id: 'Menu.returnToMainPage',
              types: [ActionTypes.SHOW_MAIN]
            }
          ],
          name: '',
          villageItems: [
            {
              avatar: 'fixed',
              comment: null,
              hostPlayer: {
                isAnonymous: false,
                isHuman: true,
                name: 'Alice'
              },
              id: 1,
              idForSearching: 123,
              name: 'Alice\'s village',
              playerSetting: {
                current: 8,
                human: {
                  current: 5,
                  max: 8
                },
                number: 15,
                robot: {
                  current: 3,
                  min: 7
                }
              },
              roleSetting: {
                hunter: 1,
                madman: 1,
                mason: 2,
                medium: 1,
                seer: 1,
                villager: 6,
                werehamster: 1,
                werewolf: 2
              }
            },
            {
              avatar: 'random',
              comment: 'Open to beginners',
              hostPlayer: {
                isAnonymous: true,
                isHuman: false,
                name: 'Anonymous'
              },
              id: 2,
              idForSearching: 456,
              name: 'Ruined village',
              playerSetting: {
                current: 4,
                human: {
                  current: 2,
                  max: 3
                },
                number: 5,
                robot: {
                  current: 2,
                  min: 2
                }
              },
              roleSetting: {
                hunter: 0,
                madman: 0,
                mason: 0,
                medium: 0,
                seer: 1,
                villager: 3,
                werehamster: 0,
                werewolf: 1
              }
            }
          ]
        }
      )
    })
  })
  describe('onymous audience', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/lobby.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, enterOnymousAudienceLobby)

          expect(validate).toBe(true)
        })
    })
    test('reduce correctly', () => {
      expect(
        reducer(
          initialState,
          {
            payload: enterOnymousAudienceLobby,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        initialState
      )
    })
  })
  describe('robot player', () => {
    const BASE_URI = `https://werewolf.world/lobby/schema/${VERSION}`
    const SERVER2CLIENT = `${BASE_URI}/server2client`
    const ajv = new Ajv()

    test('validate the JSON', async () => {
      expect.hasAssertions()
      await fetch(`${SERVER2CLIENT}/lobby.json`)
        .then(res => res.json())
        .then(schema => {
          const validate = ajv.validate(schema, enterRobotPlayerLobby)

          expect(validate).toBe(true)
        })
    })
    test('reduce correctly', () => {
      expect(
        reducer(
          initialState,
          {
            payload: enterRobotPlayerLobby,
            type: ActionTypes.socket.MESSAGE
          }
        )
      ).toEqual(
        initialState
      )
    })
  })
})
