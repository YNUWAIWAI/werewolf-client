import * as React from 'react'
import {ImagePath} from '../../../constants/ImagePath'
import SelectAvatarTableBodyImage from './SelectAvatarTableBodyImage'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleClick = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyImage
      additionalClassName={[]}
      handleClick={handleClick}
      handleSelect={handleSelect}
      image={ImagePath.Character.a}
      navigative
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleClick', () => {
  const handleClick = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyImage
      additionalClassName={[]}
      handleClick={handleClick}
      handleSelect={handleSelect}
      image={ImagePath.Character.a}
      navigative
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item > img').simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
test('handleSelect', () => {
  const handleClick = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyImage
      additionalClassName={[]}
      handleClick={handleClick}
      handleSelect={handleSelect}
      image={ImagePath.Character.a}
      navigative
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item.image').simulate('click')
  expect(handleSelect).toHaveBeenCalledTimes(1)
})
