import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './settings'
import {lobby} from '../types'
import {settings} from './fakeServer'

describe('scoket/MESSAGE', () => {
  test('settings', () => {
    expect(
      reducer(
        initialState,
        {
          payload: settings,
          type: ActionTypes.Socket.MESSAGE
        }
      )
    ).toStrictEqual(
      {
        initialValue: {
          language: lobby.Language.en,
          userEmail: 'kenhirai@ynu.jp',
          userName: 'ken hirai'
        },
        menuItems: [
          {
            id: 'Menu.returnToMainPage',
            types: [ActionTypes.App.SHOW_MAIN]
          }
        ]
      }
    )
  })
})
