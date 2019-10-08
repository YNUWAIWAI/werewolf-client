import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './settings'
import {settings} from './fakeServer'

describe('scoket/MESSAGE', () => {
  test('settings', () => {
    expect(
      reducer(
        initialState,
        {
          payload: settings,
          type: ActionTypes.socket.MESSAGE
        }
      )
    ).toStrictEqual(
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
