import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './confirmation'

test('CONFIRM_KICK_OUT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        name: 'Alice',
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER
      }
    )
  ).toStrictEqual({
    descriptionId: 'Modal.description(kickOutPlayer)',
    type: ActionTypes.App.CONFIRM_KICK_OUT_PLAYER,
    values: {
      name: 'Alice',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    }
  })
})
