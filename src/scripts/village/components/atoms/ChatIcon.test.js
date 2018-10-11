// @flow
import ChatIcon from './ChatIcon'
import React from 'react'
import {shallow} from 'enzyme'

describe('<ChatIcon />', () => {
  test('anonymousAudience', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="anonymousAudience"
        className="className"
      />
    )

    expect(wrapper.find('Audience').exists()).toBe(true)
  })
  test('grave', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="grave"
        className="className"
      />
    )

    expect(wrapper.find('Grave').exists()).toBe(true)
  })
  test('hunter', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="hunter"
        className="className"
      />
    )

    expect(wrapper.find('Werewolf').exists()).toBe(true)
  })
  test('master', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="master"
        className="className"
      />
    )

    expect(wrapper.find('Master').exists()).toBe(true)
  })
  test('onymousAudience', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="onymousAudience"
        className="className"
      />
    )

    expect(wrapper.find('Audience').exists()).toBe(true)
  })
  test('private', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="private"
        className="className"
      />
    )

    expect(wrapper.find('Private').exists()).toBe(true)
  })
  test('public', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="public"
        className="className"
      />
    )

    expect(wrapper.find('Public').exists()).toBe(true)
  })
  test('seer', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="seer"
        className="className"
      />
    )

    expect(wrapper.find('Werewolf').exists()).toBe(true)
  })
  test('werewolf', () => {
    const wrapper = shallow(
      <ChatIcon
        channel="werewolf"
        className="className"
      />
    )

    expect(wrapper.find('Werewolf').exists()).toBe(true)
  })
})
