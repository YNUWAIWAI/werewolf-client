import * as React from 'react'
import SelectAvatarTableBodyAutomation from './SelectAvatarTableBodyAutomation'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAutomation
      additionalClassName={[]}
      automation={lobby.Automation.full}
      handleSelect={handleSelect}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSelect', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyAutomation
      additionalClassName={[]}
      automation={lobby.Automation.full}
      handleSelect={handleSelect}
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item.automation').simulate('click')
  expect(handleSelect).toHaveBeenCalledTimes(1)
})
