import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import Lead from './Lead'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <Lead />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
