import * as React from 'react'
import * as village from '../../types'
import ChatDate from './ChatDate'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

test('<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:10.000Z" />', () => {
  const wrapper = mountWithIntl(<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:10.000Z" />)

  expect(wrapper.text()).toMatch(/2018\/|-01\/|-01 09:00:10 \(残り00:40\)/)
})
test('<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:50.000Z" />', () => {
  const wrapper = mountWithIntl(<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:50.000Z" />)

  expect(wrapper.text()).toMatch(/2018\/|-01\/|-01 09:00:50 \(残り00:00\)/)
})
test('<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:01:00.000Z" />', () => {
  const wrapper = mountWithIntl(<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:01:00.000Z" />)

  expect(wrapper.text()).toMatch(/2018\/|-01\/|-01 09:01:00 \(残り00:00\)/)
})
