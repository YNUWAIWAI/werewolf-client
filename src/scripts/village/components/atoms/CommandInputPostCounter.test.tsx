import * as React from 'react'
import CommandInputPostCounter from './CommandInputPostCounter'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<CommandInputPostCounter />', () => {
  test('grave', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.grave}
        maxNumberOfChatMessages={-1}
        numberOfChatMessages={-1}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
  test('werewolf', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.werewolf}
        maxNumberOfChatMessages={10}
        numberOfChatMessages={0}
      />
    )

    expect(wrapper.find('.vi--command--input--counter').text()).toBe('0/10')
  })
  test('postMortem', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.postMortem}
        maxNumberOfChatMessages={-1}
        numberOfChatMessages={-1}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
  test('private', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.private}
        maxNumberOfChatMessages={-1}
        numberOfChatMessages={-1}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
  test('public', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.public}
        maxNumberOfChatMessages={10}
        numberOfChatMessages={0}
      />
    )

    expect(wrapper.find('.vi--command--input--counter').text()).toBe('0/10')
  })
})
