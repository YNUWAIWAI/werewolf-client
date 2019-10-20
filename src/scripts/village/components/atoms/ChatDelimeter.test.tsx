import * as React from 'react'
import * as village from '../../types'
import ChatDelimeter from './ChatDelimeter'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<ChatDelimeter />', () => {
  test('date=1', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={1}
      />
    )

    expect(wrapper.find('.vi--chat--delimeter').text()).toBe('1日目')
  })
  test('date=0', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={0}
      />
    )

    expect(wrapper.find('.vi--chat--delimeter').text()).toBe('0日目')
  })
  test('date=-1', () => {
    const wrapper = mountWithIntl(
      <ChatDelimeter
        date={-1}
      />
    )

    expect(wrapper.find('.vi--chat--delimeter').text()).toBe('感想戦')
  })
})
