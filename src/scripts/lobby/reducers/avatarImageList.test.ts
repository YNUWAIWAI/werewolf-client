import * as ActionTypes from '../constants/ActionTypes'
import reducer, {initialState} from './avatarImageList'
import {ImagePath} from '../constants/ImagePath'
import {lobby} from '../types'

test('avatarImageSelect/SELECT_AVATAR', () => {
  expect(
    reducer(
      initialState,
      {
        image: ImagePath.Character.a,
        type: ActionTypes.AvatarImageSelect.SELECT_AVATAR
      }
    )
  ).toStrictEqual({
    ... initialState,
    selectedImage: ImagePath.Character.a
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
    ... initialState,
    lobby: lobby.LobbyType.human,
    selectedImage: ImagePath.Character.a,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
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
    ... initialState,
    lobby: lobby.LobbyType.robot,
    selectedImage: ImagePath.Character.a,
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  })
})
