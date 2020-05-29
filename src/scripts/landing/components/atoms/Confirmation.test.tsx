import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {Confirmation} from './Confirmation'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <Confirmation />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
