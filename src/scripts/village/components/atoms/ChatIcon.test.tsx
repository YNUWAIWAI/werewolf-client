import * as React from 'react'
import * as village from 'types/village'
import ChatIcon from './ChatIcon'
import {shallow} from 'enzyme'

describe('<ChatIcon />', () => {
  test('anonymousAudience', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.anonymousAudience}
        className="className"
      />
    )

    expect(wrapper.find('Audience').exists()).toBe(true)
  })
  test('grave', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.grave}
        className="className"
      />
    )

    expect(wrapper.find('Grave').exists()).toBe(true)
  })
  test('hunter', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.hunter}
        className="className"
      />
    )

    expect(wrapper.find('Werewolf').exists()).toBe(true)
  })
  test('master', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.master}
        className="className"
      />
    )

    expect(wrapper.find('Master').exists()).toBe(true)
  })
  test('onymousAudience', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.onymousAudience}
        className="className"
      />
    )

    expect(wrapper.find('Audience').exists()).toBe(true)
  })
  test('private', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.private}
        className="className"
      />
    )

    expect(wrapper.find('Private').exists()).toBe(true)
  })
  test('public', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.public}
        className="className"
      />
    )

    expect(wrapper.find('Public').exists()).toBe(true)
  })
  test('seer', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.seer}
        className="className"
      />
    )

    expect(wrapper.find('Werewolf').exists()).toBe(true)
  })
  test('werewolf', () => {
    const wrapper = shallow(
      <ChatIcon
        channel={village.Channel.werewolf}
        className="className"
      />
    )

    expect(wrapper.find('Werewolf').exists()).toBe(true)
  })
})
