import * as React from 'react'
import ChatDelimeter from './ChatDelimeter'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ChatDelimeter />', () => {
  test('date=1', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={1}
      />
    )

    expect(wrapper.find('.vi--chat--delimeter').text()).toBe('Day 1')
  })
  test('date=0', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={0}
      />
    )

    expect(wrapper.find('.vi--chat--delimeter').text()).toBe('Day 0')
  })
  test('date=-1', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={-1}
      />
    )

    expect(wrapper.find('.vi--chat--delimeter').text()).toBe('Post-mortem discussion')
  })
})
