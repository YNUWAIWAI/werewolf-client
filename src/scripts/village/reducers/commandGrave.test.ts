import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './commandGrave'

describe('commandGrave', () => {
  test('RETURN_TO_LOBBY', () => {
    expect(
      reducer(
        initialState,
        {
          type: ActionTypes.Navigation.RETURN_TO_LOBBY
        }
      )
    ).toEqual(
      {
        navigation: [
          {
            className: 'return-to-lobby',
            id: 'CommandNavigation.returnToLobby',
            isLoading: true,
            type: ActionTypes.Navigation.RETURN_TO_LOBBY
          }
        ]
      }
    )
  })
})
