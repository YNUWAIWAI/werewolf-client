import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './modal'

test('CONFIRM_KICK_OUT_PLAYER', () => {
  expect(
    reducer(
      initialState,
      {
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        type: ActionTypes.global.CONFIRM_KICK_OUT_PLAYER
      }
    )
  ).toEqual({
    descriptionId: 'Modal.description(kickOutPlayer)',
    visible: true
  })
})
test('SELECT_NO', () => {
  expect(
    reducer(
      {
        descriptionId: 'Modal.description(kickOutPlayer)',
        visible: true
      },
      {
        type: ActionTypes.global.SELECT_NO
      }
    )
  ).toEqual({
    descriptionId: 'Modal.description(kickOutPlayer)',
    visible: false
  })
})
test('SELECT_YES', () => {
  expect(
    reducer(
      {
        descriptionId: 'Modal.description(kickOutPlayer)',
        visible: true
      },
      {
        type: ActionTypes.global.SELECT_NO
      }
    )
  ).toEqual({
    descriptionId: 'Modal.description(kickOutPlayer)',
    visible: false
  })
})
