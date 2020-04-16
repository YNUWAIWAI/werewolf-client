import * as React from 'react'
import SelectAvatarTableBodyAvatarName from './SelectAvatarTableBodyAvatarName'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChange = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAvatarName
      additionalClassName={[]}
      handleChange={handleChange}
      handleSelect={handleSelect}
      name="Alice"
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
describe('handleSelect', () => {
  test('event.target === event.currentTarget', () => {
    const handleChange = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAvatarName
        additionalClassName={[]}
        handleChange={handleChange}
        handleSelect={handleSelect}
        name="Alice"
        navigatable
      />
    )

    wrapper.find('.lo--select-avatar--table--body--item.avatar-name').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(1)
  })
  test('event.target !== event.currentTarget', () => {
    const handleChange = jest.fn()
    const handleSelect = jest.fn()
    const wrapper = mountWithIntl(
      <SelectAvatarTableBodyAvatarName
        additionalClassName={[]}
        handleChange={handleChange}
        handleSelect={handleSelect}
        name="Alice"
        navigatable
      />
    )

    wrapper.find('.lo--select-avatar--table--body--item.avatar-name > .input').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(0)
  })
})
