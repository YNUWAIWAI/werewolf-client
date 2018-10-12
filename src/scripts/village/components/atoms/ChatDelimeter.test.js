// @flow
import ChatDelimeter from './ChatDelimeter'
import React from 'react'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

describe('<ChatDelimeter />', () => {
  test('date=1', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={1}
      />
    )

    expect(wrapper.find('.chat--delimeter').text()).toBe('1日目')
  })
  test('date=0', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={0}
      />
    )

    expect(wrapper.find('.chat--delimeter').text()).toBe('0日目')
  })
  test('date=-1', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={-1}
      />
    )

    expect(wrapper.find('.chat--delimeter').text()).toBe('感想戦')
  })
})
