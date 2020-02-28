import * as React from 'react'
import SelectAvatarTableBodyTest from './SelectAvatarTableBodyTest'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyTest
      additionalClassName={[]}
      handleSelect={handleSelect}
      test={lobby.TestStatus.notPassed}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSelect', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyTest
      additionalClassName={[]}
      handleSelect={handleSelect}
      test={lobby.TestStatus.notPassed}
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item.test').simulate('click')
  expect(handleSelect).toHaveBeenCalledTimes(1)
})
