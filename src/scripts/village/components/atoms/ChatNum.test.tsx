import * as React from 'react'
import ChatNum from './ChatNum'
import {shallow} from 'enzyme'

describe('<ChatNum />', () => {
  describe('id={1}', () => {
    test('intensionalDisclosureRange="anonymousAudience"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.anonymousAudience}
        />
      )

      expect(wrapper.text()).toBe('')
    })
    test('intensionalDisclosureRange="grave"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.grave}
        />
      )

      expect(wrapper.text()).toBe('')
    })
    test('intensionalDisclosureRange="hunter"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.hunter}
        />
      )

      expect(wrapper.text()).toBe('')
    })
    test('intensionalDisclosureRange="master"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.master}
        />
      )

      expect(wrapper.text()).toBe('')
    })
    test('intensionalDisclosureRange="onymousAudience"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.onymousAudience}
        />
      )

      expect(wrapper.text()).toBe('')
    })
    test('intensionalDisclosureRange="private"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.private}
        />
      )

      expect(wrapper.text()).toBe('')
    })
    test('intensionalDisclosureRange="public"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.public}
        />
      )

      expect(wrapper.text()).toBe('1')
    })
    test('intensionalDisclosureRange="seer"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.seer}
        />
      )

      expect(wrapper.text()).toBe('')
    })
    test('intensionalDisclosureRange="werewolf"', () => {
      const wrapper = shallow(
        <ChatNum
          id={1}
          intensionalDisclosureRange={village.Channel.werewolf}
        />
      )

      expect(wrapper.text()).toBe('')
    })
  })
  describe('id={0}', () => {
    test('intensionalDisclosureRange="public"', () => {
      const wrapper = shallow(
        <ChatNum
          id={0}
          intensionalDisclosureRange={village.Channel.public}
        />
      )

      expect(wrapper.text()).toBe('')
    })
  })
  describe('id={-1}', () => {
    test('intensionalDisclosureRange="public"', () => {
      const wrapper = shallow(
        <ChatNum
          id={-1}
          intensionalDisclosureRange={village.Channel.public}
        />
      )

      expect(wrapper.text()).toBe('')
    })
  })
})
