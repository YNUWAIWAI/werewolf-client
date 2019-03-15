/* global village */
import * as React from 'react'
import ChatItem from './ChatItem'
import {shallow} from 'enzyme'

describe('<ChatItem />', () => {
  describe('isMine={true}', () => {
    test('iintensionalDisclosureRange="anonymousAudience"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.anonymousAudience}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="grave"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.grave}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="hunter"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.hunter}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="master"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.master}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="onymousAudience"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.onymousAudience}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="private"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.private}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="public"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.public}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="seer"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.seer}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="werewolf"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.werewolf}
          isMine
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
  })
  describe('isMine={false}', () => {
    test('intensionalDisclosureRange="anonymousAudience"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.anonymousAudience}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="grave"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.grave}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="hunter"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.hunter}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="master"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.master}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="onymousAudience"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.onymousAudience}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="private"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.private}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="public"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.public}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="seer"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.seer}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
    test('intensionalDisclosureRange="werewolf"', () => {
      const wrapper = shallow(
        <ChatItem
          id={1}
          image="image"
          intensionalDisclosureRange={village.Channel.werewolf}
          isMine={false}
          name="name"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('limited')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
    })
  })
})

