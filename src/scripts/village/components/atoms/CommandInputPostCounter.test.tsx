import * as React from 'react'
import CommandInputPostCounter from './CommandInputPostCounter'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<CommandInputPostCounter />', () => {
  test('grave', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.grave}
        postCount={-1}
        postCountLimit={-1}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
  test('werewolf', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.werewolf}
        postCount={0}
        postCountLimit={10}
      />
    )

    expect(wrapper.find('.vi--command--input--counter').text()).toBe('0/10')
  })
  test('postMortem', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.postMortem}
        postCount={-1}
        postCountLimit={-1}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
  test('private', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.private}
        postCount={-1}
        postCountLimit={-1}
      />
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
  test('public', () => {
    const wrapper = shallow(
      <CommandInputPostCounter
        inputChannel={village.InputChannel.public}
        postCount={0}
        postCountLimit={10}
      />
    )

    expect(wrapper.find('.vi--command--input--counter').text()).toBe('0/10')
  })
})
