import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './modal'
import {ImagePath} from '../constants/ImagePath'
import {lobby} from '../types'

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
    type: lobby.ModalType.confirmation,
    visible: true
  })
})
test('SELECT_NO', () => {
  expect(
    reducer(
      {
        type: lobby.ModalType.confirmation,
        visible: true
      },
      {
        type: ActionTypes.Confirmation.SELECT_NO
      }
    )
  ).toStrictEqual({
    type: lobby.ModalType.confirmation,
    visible: false
  })
})
test('SELECT_YES', () => {
  expect(
    reducer(
      {
        type: lobby.ModalType.confirmation,
        visible: true
      },
      {
        type: ActionTypes.Confirmation.SELECT_YES
      }
    )
  ).toStrictEqual({
    type: lobby.ModalType.confirmation,
    visible: false
  })
})
test('selectAvatarImage/CLOSE_MODAL', () => {
  expect(
    reducer(
      initialState,
      {
        type: ActionTypes.SelectAvatarImage.CLOSE_MODAL
      }
    )
  ).toStrictEqual({
    type: lobby.ModalType.avatarImageSelect,
    visible: false
  })
})
test('selectHumanAvatar/SHOW_AVATAR_IMAGE_SELECT', () => {
  expect(
    reducer(
      initialState,
      {
        image: ImagePath.Character.a,
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        type: ActionTypes.SelectHumanAvatar.SHOW_AVATAR_IMAGE_SELECT
      }
    )
  ).toStrictEqual({
    type: lobby.ModalType.avatarImageSelect,
    visible: true
  })
})
test('selectRobotAvatar/SHOW_AVATAR_IMAGE_SELECT', () => {
  expect(
    reducer(
      initialState,
      {
        image: ImagePath.Character.a,
        token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300',
        type: ActionTypes.SelectRobotAvatar.SHOW_AVATAR_IMAGE_SELECT
      }
    )
  ).toStrictEqual({
    type: lobby.ModalType.avatarImageSelect,
    visible: true
  })
})
