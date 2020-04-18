import * as ActionTypes from '../constants/ActionTypes'
import {
  avatarImageSelect,
  createNewHumanAvatar,
  selectHumanAvatar,
  selectRobotAvatar
} from '../actions'
import reducer, {initialState} from './avatarImageList'
import {ImagePath} from '../constants/ImagePath'

test('avatarImageSelect/SELECT_AVATAR', () => {
  expect(
    reducer(
      initialState,
      avatarImageSelect.selectAvatar(ImagePath.Character.a)
    )
  ).toStrictEqual({
    ... initialState,
    selectedImage: ImagePath.Character.a
  })
})
test('createNewHumanAvatar/SHOW_AVATAR_IMAGE_SELECT', () => {
  const image = ImagePath.Character.a

  expect(
    reducer(
      initialState,
      createNewHumanAvatar.showAvatarImageSelect(image)
    )
  ).toStrictEqual({
    ... initialState,
    scope: ActionTypes.Scope.CreateNewHumanAvatar,
    selectedImage: image,
    token: ''
  })
})
test('selectHumanAvatar/SHOW_AVATAR_IMAGE_SELECT', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  const image = ImagePath.Character.a

  expect(
    reducer(
      initialState,
      selectHumanAvatar.showAvatarImageSelect(token)(image)
    )
  ).toStrictEqual({
    ... initialState,
    scope: ActionTypes.Scope.SelectHumanAvatar,
    selectedImage: image,
    token
  })
})
test('selectRobotAvatar/SHOW_AVATAR_IMAGE_SELECT', () => {
  const token = '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  const image = ImagePath.Character.a

  expect(
    reducer(
      initialState,
      selectRobotAvatar.showAvatarImageSelect(token)(image)
    )
  ).toStrictEqual({
    ... initialState,
    scope: ActionTypes.Scope.SelectRobotAvatar,
    selectedImage: image,
    token
  })
})
