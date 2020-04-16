import * as React from 'react'
import SelectAvatarTableBodyLanguage from './SelectAvatarTableBodyLanguage'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleChange = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyLanguage
      additionalClassName={[]}
      handleChange={handleChange}
      handleSelect={handleSelect}
      language={lobby.Language.en}
      navigatable
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleSelect', () => {
  const handleChange = jest.fn()
  const handleSelect = jest.fn()
  const wrapper = mountWithIntl(
    <SelectAvatarTableBodyLanguage
      additionalClassName={[]}
      handleChange={handleChange}
      handleSelect={handleSelect}
      language={lobby.Language.en}
      navigatable
    />
  )

  wrapper.find('.lo--select-avatar--table--body--item.language').simulate('click')
  expect(handleSelect).toHaveBeenCalledTimes(1)
})
