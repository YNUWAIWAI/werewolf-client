import * as React from 'react'
import SelectAvatarTableBodyStatus from './SelectAvatarTableBodyStatus'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyStatus
      additionalClassName={[]}
      handleSelect={handleSelect}
      status={lobby.AvatarStatus.awaitingAuthorization}
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSelect', () => {
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyStatus
      additionalClassName={[]}
      handleSelect={handleSelect}
      status={lobby.AvatarStatus.awaitingAuthorization}
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item.status').simulate('click')
  expect(handleSelect).toHaveBeenCalledTimes(1)
})
