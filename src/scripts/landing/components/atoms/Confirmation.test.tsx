import * as React from 'react'
import {Language, getMessages} from '@i18n/landing'
import Confirmation from './Confirmation'
import {initRenderer} from '@tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <Confirmation />
  )

  expect(wrapper.text()).toBe('Please agree to our Terms, Data Policy and Cookies Policy before signing up.')
})
