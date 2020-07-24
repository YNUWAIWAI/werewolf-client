import * as React from 'react'
import {
  Language,
  getMessages
} from '../../i18n'
import {Description} from './Description'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(Language.en, getMessages(Language.en))

test('render', () => {
  const wrapper = mountWithIntl(
    <Description />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
