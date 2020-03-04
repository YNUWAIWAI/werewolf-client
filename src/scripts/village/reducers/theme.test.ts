import reducer, {initialState} from './theme'
import {changeTheme} from '../actions'
import {village} from '../types'

test('CHANGE_THEME', () => {
  expect(
    reducer(
      initialState,
      changeTheme(village.Theme.light)
    )
  ).toStrictEqual(
    village.Theme.light
  )
})
