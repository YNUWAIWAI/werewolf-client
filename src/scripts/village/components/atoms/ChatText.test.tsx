import * as React from 'react'
import ChatText from './ChatText'
import {shallow} from 'enzyme'

describe('<ChatText />', () => {
  test('text="text"', () => {
    const wrapper = shallow(<ChatText text="text" />)

    expect(wrapper.text()).toBe('text')
    expect(wrapper.find('p')).toHaveLength(1)
  })
  test('text=">>1 text"', () => {
    const wrapper = shallow(<ChatText text=">>1 text" />)

    expect(wrapper.text()).toBe('>>1 text')
    expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
    expect(wrapper.find('p')).toHaveLength(1)
  })
  test('text=">>1text"', () => {
    const wrapper = shallow(<ChatText text=">>1text" />)

    expect(wrapper.text()).toBe('>>1text')
    expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
    expect(wrapper.find('p')).toHaveLength(1)
  })
  test('text=">>n text"', () => {
    const wrapper = shallow(<ChatText text=">>n text" />)

    expect(wrapper.text()).toBe('>>n text')
    expect(wrapper.find('a[href="#messagen"]').exists()).toBe(false)
    expect(wrapper.find('p')).toHaveLength(1)
  })
  test('text=">>1 >>2 >>3 text"', () => {
    const wrapper = shallow(<ChatText text=">>1 >>2 >>3 text" />)

    expect(wrapper.text()).toBe('>>1 >>2 >>3 text')
    expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
    expect(wrapper.find('a[href="#message2"]').exists()).toBe(true)
    expect(wrapper.find('a[href="#message3"]').exists()).toBe(true)
    expect(wrapper.find('p')).toHaveLength(1)
  })
  test('text="text\\n\\r\\ntext"', () => {
    const wrapper = shallow(<ChatText text="text\n\r\ntext" />)

    expect(wrapper.text()).toBe('texttext')
    expect(wrapper.find('p')).toHaveLength(2)
  })
  test('text="text>>>1\\ntext"', () => {
    const wrapper = shallow(<ChatText text="text>>1\ntext" />)

    expect(wrapper.text()).toBe('text>>1text')
    expect(wrapper.find('p')).toHaveLength(2)
    expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
  })
})
