import * as React from 'react'
import SelectAvatarTableBodyCheckbox from './SelectAvatarTableBodyCheckbox'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyCheckbox
      additionalClassName={[]}
      checked
      handleClick={handleClick}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleClick', () => {
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyCheckbox
      additionalClassName={[]}
      checked
      handleClick={handleClick}
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item.check-box').simulate('click')
  expect(handleClick).toHaveBeenCalledTimes(1)
})
