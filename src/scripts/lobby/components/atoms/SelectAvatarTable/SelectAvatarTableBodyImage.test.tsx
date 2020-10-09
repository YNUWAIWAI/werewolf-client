import * as React from 'react'
import {ImagePath} from '../../../constants/ImagePath'
import {SelectAvatarTableBodyImage} from './SelectAvatarTableBodyImage'
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
      navigatable
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
      navigatable
    />
  )

  wrapper.find('.image > button').simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
describe('handleSelect', () => {
  test('event.target === event.currentTarget', () => {
    const handleClick = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyImage
        additionalClassName={[]}
        handleClick={handleClick}
        handleSelect={handleSelect}
        image={ImagePath.Character.a}
        navigatable
      />
    )

    wrapper.find('.image').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
  test('event.target !== event.currentTarget', () => {
    const handleClick = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyImage
        additionalClassName={[]}
        handleClick={handleClick}
        handleSelect={handleSelect}
        image={ImagePath.Character.a}
        navigatable
      />
    )

    wrapper.find('.image').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
})
