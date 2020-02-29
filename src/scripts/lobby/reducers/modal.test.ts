import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './modal'

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
    type: 'confirmation',
    visible: true
  })
})
test('SELECT_NO', () => {
  expect(
    reducer(
      {
        type: 'confirmation',
        visible: true
      },
      {
        type: ActionTypes.App.SELECT_NO
      }
    )
  ).toStrictEqual({
    type: 'confirmation',
    visible: false
  })
})
test('SELECT_YES', () => {
  expect(
    reducer(
      {
        type: 'confirmation',
        visible: true
      },
      {
        type: ActionTypes.App.SELECT_YES
      }
    )
  ).toStrictEqual({
    type: 'confirmation',
    visible: false
  })
})
