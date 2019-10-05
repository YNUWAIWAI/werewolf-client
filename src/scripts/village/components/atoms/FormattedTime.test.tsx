import * as React from 'react'
import * as village from '../../types'
import FormattedTime from './FormattedTime'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

test('time: 5999', () => {
  const wrapper = mountWithIntl(<FormattedTime time={5999} />)

  expect(wrapper.text()).toBe('99\'59 left')
})
test('time: 90', () => {
  const wrapper = mountWithIntl(<FormattedTime time={90} />)

  expect(wrapper.text()).toBe('01\'30 left')
})
test('time: 30', () => {
  const wrapper = mountWithIntl(<FormattedTime time={30} />)

  expect(wrapper.text()).toBe('00\'30 left')
})
test('time: 5', () => {
  const wrapper = mountWithIntl(<FormattedTime time={5} />)

  expect(wrapper.text()).toBe('00\'05 left')
})
test('time: 0', () => {
  const wrapper = mountWithIntl(<FormattedTime time={0} />)

  expect(wrapper.text()).toBe('00\'00 left')
})
test('time: -1', () => {
  const wrapper = mountWithIntl(<FormattedTime time={-1} />)

  expect(wrapper.text()).toBe('Time\'s up')
})
test('time: 6000', () => {
  const wrapper = mountWithIntl(<FormattedTime time={6000} />)

  expect(wrapper.text()).toBe('100\'00 left')
})
