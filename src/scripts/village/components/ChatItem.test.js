// @flow
import ChatItem from './ChatItem'
import React from 'react'
import {shallow} from 'enzyme'

test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="anonymousAudience" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="anonymousAudience"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(true)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="anonymousAudience" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="anonymousAudience"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(true)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="grave" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="grave"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="grave" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="grave"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="werewolf" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="werewolf"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="hunter" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="hunter"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="master" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="master"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="master" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="master"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="onymousAudience" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="onymousAudience"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(true)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="onymousAudience" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="onymousAudience"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(true)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="private" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="private"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(true)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="private" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="private"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(true)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="public" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="public"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(true)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="public" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="public"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(true)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="seer" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="seer"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="seer" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="seer"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine id={1} image="image" intensionalDisclosureRange="hunter" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine
      id={1}
      image="image"
      intensionalDisclosureRange="hunter"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})
test('<ChatItem isMine={false} id={1} image="image" intensionalDisclosureRange="werewolf" name="name" phaseStartTime="2018-01-01T00:00:00.000Z" phaseTimeLimit={50} serverTimestamp="2018-01-01T00:00:10.000Z" text="text" />', () => {
  const wrapper = shallow(
    <ChatItem
      isMine={false}
      id={1}
      image="image"
      intensionalDisclosureRange="werewolf"
      name="name"
      phaseStartTime="2018-01-01T00:00:00.000Z"
      phaseTimeLimit={50}
      serverTimestamp="2018-01-01T00:00:10.000Z"
      text="text"
    />
  )

  expect(wrapper.find('.chat--item').hasClass('me')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('public')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('grave')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('limited')).toBe(true)
  expect(wrapper.find('.chat--item').hasClass('master')).toBe(false)
  expect(wrapper.find('.chat--item').hasClass('private')).toBe(false)
  expect(wrapper.find('.chat--item').is('#message1')).toBe(false)
  expect(wrapper.find('.chat--item').is('#messageundefiend')).toBe(false)
})

