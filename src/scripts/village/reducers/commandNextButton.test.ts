import {activateNextButton, deactivateNextButton} from '../actions'
import reducer, {Status, initialState} from './commandNextButton'

describe('commandNextButton', () => {
  test('ACTIVATE_NEXT_BUTTON', () => {
    expect(
      reducer(
        initialState,
        activateNextButton(1)
      )
    ).toEqual(
      {
        status: Status.active
      }
    )
  })
  test('DEACTIVATE_NEXT_BUTTON', () => {
    expect(
      reducer(
        initialState,
        deactivateNextButton()
      )
    ).toEqual(
      {
        status: Status.invisible
      }
    )
  })
})
