import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import SubmitButton from './SubmitButton'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <SubmitButton
      type="login"
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
