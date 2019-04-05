import * as React from 'react'
import CommandInputTextCounter from './CommandInputTextCounter'
import {shallow} from 'enzyme'

describe('<CommandInputTextCounnter />', () => {
  test('valid', () => {
    const wrapper = shallow(
      <CommandInputTextCounter
        textCount={10}
        valid
      />
    )

    expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(false)
    expect(wrapper.find('.vi--command--input--char').text()).toBe('10')
  })
  test('invalid', () => {
    const wrapper = shallow(
      <CommandInputTextCounter
        textCount={10}
        valid={false}
      />
    )

    expect(wrapper.find('.vi--command--input--char').hasClass('error')).toBe(true)
    expect(wrapper.find('.vi--command--input--char').text()).toBe('10')
  })
})
