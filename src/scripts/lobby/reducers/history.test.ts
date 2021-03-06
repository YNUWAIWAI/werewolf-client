import * as ActionTypes from '../constants/ActionTypes'
import {enterHumanPlayerLobby} from './fakeServer'
import {message} from '../actions'
import reducer from './history'

test('socket/MESSAGE', () => {
  expect(
    reducer(
      {
        isPlayer: false,
        menuItems: [
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ],
        villageItems: []
      },
      message.lobby(enterHumanPlayerLobby)
    )
  ).toStrictEqual(
    {
      isPlayer: false,
      menuItems: [
        {
          id: 'Menu.returnToMainPage',
          types: [ActionTypes.App.SHOW_MAIN]
        }
      ],
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
