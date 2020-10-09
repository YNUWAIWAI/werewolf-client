import * as React from 'react'
import {ImagePath} from '../../../constants/ImagePath'
import {SelectAvatarTableBodyAvatar} from './SelectAvatarTableBodyAvatar'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleAvatarImageClick = jest.fn()
  const handleAvatarNameChange = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAvatar
      additionalClassName={[]}
      handleAvatarImageClick={handleAvatarImageClick}
      handleAvatarNameChange={handleAvatarNameChange}
      handleSelect={handleSelect}
      image={ImagePath.Character.a}
      name="Alice"
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSelect', () => {
  const handleAvatarImageClick = jest.fn()
  const handleAvatarNameChange = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAvatar
      additionalClassName={[]}
      handleAvatarImageClick={handleAvatarImageClick}
      handleAvatarNameChange={handleAvatarNameChange}
      handleSelect={handleSelect}
      image={ImagePath.Character.a}
      name="Alice"
      navigatable
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item.avatar').simulate('click')
  expect(handleSelect).toHaveBeenCalledTimes(1)
})
