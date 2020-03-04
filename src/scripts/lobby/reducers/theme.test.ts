import reducer, {initialState} from './theme'
import {changeTheme} from '../actions'
import {lobby} from '../types'

test('CHANGE_THEME', () => {
  expect(
    reducer(
      initialState,
      changeTheme(lobby.Theme.light)
    )
  ).toStrictEqual(
    lobby.Theme.light
  )
})
