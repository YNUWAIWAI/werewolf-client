// @flow
import Chat from './Chat'
import React from 'react'
import {shallow} from 'enzyme'

test('<Chat /> 0 item', () => {
  const items = []
  const wrapper = shallow(<Chat items={items} />)

  expect(wrapper.find('ChatItem')).toHaveLength(0)
})
test('<Chat /> 1 item', () => {
  const items = [
    {
      id: 1,
      image: 'image',
      intensionalDisclosureRange: 'anonymousAudience',
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text'
    }
  ]
  const wrapper = shallow(<Chat items={items} />)

  expect(wrapper.find('ChatItem')).toHaveLength(1)
})
test('<Chat /> 2 items', () => {
  const items = [
    {
      id: 1,
      image: 'image',
      intensionalDisclosureRange: 'anonymousAudience',
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text'
    },
    {
      id: 2,
      image: 'image',
      intensionalDisclosureRange: 'anonymousAudience',
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text'
    }
  ]
  const wrapper = shallow(<Chat items={items} />)

  expect(wrapper.find('ChatItem')).toHaveLength(2)
  expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toEqual([ 2, 1 ])
})
test('<Chat /> 3 items', () => {
  const items = [
    {
      id: 1,
      image: 'image',
      intensionalDisclosureRange: 'anonymousAudience',
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text'
    },
    {
      id: 2,
      image: 'image',
      intensionalDisclosureRange: 'anonymousAudience',
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text'
    },
    {
      id: 3,
      image: 'image',
      intensionalDisclosureRange: 'anonymousAudience',
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text'
    }
  ]
  const wrapper = shallow(<Chat items={items} />)

  expect(wrapper.find('ChatItem')).toHaveLength(3)
  expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toEqual([ 3, 2, 1 ])
})
