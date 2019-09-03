import * as React from 'react'
import {Language, getMessages} from '@i18n/landing'
import SubmitButton from './SubmitButton'
import {initRenderer} from '@tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <SubmitButton
      type="login"
    />
  )

  expect(wrapper.text()).toBe('Login')
})
