import {
  changeVolume,
  toggleMute
} from '../actions'
import reducer, {initialState} from './audio'

test('CHANGE_VOLUME', () => {
  expect(
    reducer(
      initialState,
      changeVolume(0)
    )
  ).toStrictEqual(
    {
      muted: false,
      volume: 0
    }
  )
})
test('TOGGLE_MUTE', () => {
  expect(
    reducer(
      initialState,
      toggleMute(false)
    )
  ).toStrictEqual(
    {
      ... initialState,
      muted: false
    }
  )
})
