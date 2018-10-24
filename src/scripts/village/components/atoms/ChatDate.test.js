// @flow
import ChatDate from './ChatDate'
import React from 'react'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

test('<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:10.000Z" />', () => {
  const wrapper = mountWithIntl(<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:10.000Z" />)

  expect(wrapper.text()).toBe('2018/01/01 00:00:10（残り00:40）')
})
test('<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:50.000Z" />', () => {
  const wrapper = mountWithIntl(<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:00:50.000Z" />)

  expect(wrapper.text()).toBe('2018/01/01 00:00:50（残り00:00）')
})
test('<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:01:00.000Z" />', () => {
  const wrapper = mountWithIntl(<ChatDate from="2018-01-01T00:00:00.000Z" limit={50} to="2018-01-01T00:01:00.000Z" />)

  expect(wrapper.text()).toBe('2018/01/01 00:01:00（残り00:00）')
})
