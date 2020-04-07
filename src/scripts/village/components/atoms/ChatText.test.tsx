import * as React from 'react'
import {
  mount,
  shallow
} from 'enzyme'
import ChatText from './ChatText'

describe('<ChatText />', () => {
  describe('text', () => {
    test('text', () => {
      const wrapper = shallow(
        <ChatText
          navigatable
          text="text"
        />
      )

      expect(wrapper.text()).toBe('text')
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('>>1 text', () => {
      const wrapper = shallow(
        <ChatText
          navigatable
          text=">>1 text"
        />
      )

      expect(wrapper.text()).toBe('>>1 text')
      expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('>>1text', () => {
      const wrapper = shallow(
        <ChatText
          navigatable
          text=">>1text"
        />
      )

      expect(wrapper.text()).toBe('>>1text')
      expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('>>n text', () => {
      const wrapper = shallow(
        <ChatText
          navigatable
          text=">>n text"
        />
      )

      expect(wrapper.text()).toBe('>>n text')
      expect(wrapper.find('a[href="#messagen"]').exists()).toBe(false)
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('>>1 >>2 >>3 text', () => {
      const wrapper = shallow(
        <ChatText
          navigatable
          text=">>1 >>2 >>3 text"
        />
      )

      expect(wrapper.text()).toBe('>>1 >>2 >>3 text')
      expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
      expect(wrapper.find('a[href="#message2"]').exists()).toBe(true)
      expect(wrapper.find('a[href="#message3"]').exists()).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('text\\n\\r\\ntext', () => {
      const wrapper = shallow(
        <ChatText
          navigatable
          text={'text\n\r\ntext'}
        />
      )

      expect(wrapper.text()).toBe('texttext')
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('text>>>1\\ntext', () => {
      const wrapper = shallow(
        <ChatText
          navigatable
          text={'text>>1\ntext'}
        />
      )

      expect(wrapper.text()).toBe('text>>1text')
      expect(wrapper.find('a[href="#message1"]').exists()).toBe(true)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
  describe('navigatable', () => {
    test('true', () => {
      const wrapper = mount(
        <ChatText
          navigatable
          text=">>1 text"
        />
      )

      expect(wrapper.find('a').props().tabIndex).toBe(0)
      expect(wrapper.html()).toMatchSnapshot()
    })
    test('false', () => {
      const wrapper = mount(
        <ChatText
          navigatable={false}
          text=">>1 text"
        />
      )

      expect(wrapper.find('a').props().tabIndex).toBe(-1)
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
