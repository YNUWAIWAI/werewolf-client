import * as ActionTypes from '../constants/ActionTypes'
import {activateNextButton, deactivateNextButton} from '../actions'
import reducer, {initialState} from './commandPostMortem'

describe('commandPostMortem', () => {
  test('ACTIVATE_NEXT_BUTTON', () => {
    expect(
      reducer(
        initialState,
        activateNextButton(1)
      )
    ).toEqual(
      {
        navigation: [
          {
            className: 'show-result',
            id: 'CommandNavigation.showResult',
            type: ActionTypes.Navigation.SHOW_RESULT
          },
          {
            className: 'next-game',
            id: 'CommandNavigation.nextGame',
            type: ActionTypes.Navigation.NEXT_GAME
          },
          {
            className: 'return-to-lobby',
            id: 'CommandNavigation.returnToLobby',
            type: ActionTypes.Navigation.RETURN_TO_LOBBY
          }
        ]
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
        navigation: [
          {
            className: 'show-result',
            id: 'CommandNavigation.showResult',
            type: ActionTypes.Navigation.SHOW_RESULT
          },
          {
            className: 'return-to-lobby expand',
            id: 'CommandNavigation.returnToLobby',
            type: ActionTypes.Navigation.RETURN_TO_LOBBY
          }
        ]
      }
    )
  })
})
