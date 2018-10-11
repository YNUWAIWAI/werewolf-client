// @flow
import ChatText from './ChatText'
import React from 'react'
import {shallow} from 'enzyme'

test('<ChatText text="text" />', () => {
  const wrapper = shallow(<ChatText text="text" />)

  expect(wrapper.text()).toBe('text')
})
test('<ChatText text=">>1 text" />', () => {
  const wrapper = shallow(<ChatText text=">>1 text" />)

  expect(wrapper.text()).toBe('>>1 text')
  expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
})
test('<ChatText text=">>1text" />', () => {
  const wrapper = shallow(<ChatText text=">>1text" />)

  expect(wrapper.text()).toBe('>>1text')
  expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
})
test('<ChatText text=">>n text" />', () => {
  const wrapper = shallow(<ChatText text=">>n text" />)

  expect(wrapper.text()).toBe('>>n text')
  expect(wrapper.find('a[href="#messagen"]').exists()).toBe(false)
})
test('<ChatText text=">>1 >>2 >>3 text" />', () => {
  const wrapper = shallow(<ChatText text=">>1 >>2 >>3 text" />)

  expect(wrapper.text()).toBe('>>1 >>2 >>3 text')
  expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
  expect(wrapper.find('a[href="#message2"]').exists()).toBe(true)
  expect(wrapper.find('a[href="#message3"]').exists()).toBe(true)
})
