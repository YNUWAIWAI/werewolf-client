// @flow
import * as ActionTypes from '../constants/ActionTypes'
import {enterLobby} from './fakeServer'
import reducer from './lobbyForAudience'

test('SOCKET_MESSAGE', () => {
  expect(
    reducer(
      {
        isPlayer: false,
        menuItems: [
          {
            text: 'Search for a Village in session',
            types: [ActionTypes.SEARCH_FOR_A_VILLAGE_IN_SESSION]
          },
          {
            text: 'Search for an Old Village',
            types: [ActionTypes.SEARCH_FOR_AN_OLD_VILLAGE]
          },
          {
            text: 'Refresh',
            types: [ActionTypes.REFRESH]
          },
          {
            text: 'Return to the Main Page',
            types: [ActionTypes.SHOW_MAIN]
          }
        ],
        villageItems: []
      },
      {
        payload: enterLobby,
        type: ActionTypes.SOCKET_MESSAGE
      }
    )
  ).toEqual(
    {
      isPlayer: false,
      menuItems: [
        {
          text: 'Search for a Village in session',
          types: [ActionTypes.SEARCH_FOR_A_VILLAGE_IN_SESSION]
        },
        {
          text: 'Search for an Old Village',
          types: [ActionTypes.SEARCH_FOR_AN_OLD_VILLAGE]
        },
        {
          text: 'Refresh',
          types: [ActionTypes.REFRESH]
        },
        {
          text: 'Return to the Main Page',
          types: [ActionTypes.SHOW_MAIN]
        }
      ],
      villageItems: [
        {
          avatar: 'fixed',
          comment: null,
          hostPlayer: {
            isAnonymous: false,
            name: 'Alice'
          },
          id: 1,
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
            werehumster: 1,
            werewolf: 2
          }
        },
        {
          avatar: 'random',
          comment: 'Open to beginners',
          hostPlayer: {
            isAnonymous: true,
            name: 'Anonymous'
          },
          id: 2,
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
            werehumster: 0,
            werewolf: 1
          }
        }
      ]
    }
  )
})
