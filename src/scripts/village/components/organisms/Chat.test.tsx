import * as React from 'react'
import Chat, {Props} from './Chat'
import {shallow} from 'enzyme'

test('<Chat /> 0 item', () => {
  const allIds: Props['allIds'] = []
  const byId: Props['byId'] = {}
  const wrapper = shallow(<Chat allIds={allIds} byId={byId} />)

  expect(wrapper.find('ChatItem')).toHaveLength(0)
})
test('<Chat /> 1 item', () => {
  const allIds: Props['allIds'] = ['chat0']
  const byId: Props['byId'] = {
    'chat0': {
      id: 1,
      image: 'image',
      intensionalDisclosureRange: village.Channel.anonymousAudience,
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text',
      type: 'item'
    }
  }
  const wrapper = shallow(<Chat allIds={allIds} byId={byId} />)

  expect(wrapper.find('ChatItem')).toHaveLength(1)
})
test('<Chat /> 2 items', () => {
  const allIds: Props['allIds'] = ['chat1', 'chat0']
  const byId: Props['byId'] = {
    'chat0': {
      id: 1,
      image: 'image',
      intensionalDisclosureRange: village.Channel.anonymousAudience,
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text',
      type: 'item'
    },
    'chat1': {
      id: 2,
      image: 'image',
      intensionalDisclosureRange: village.Channel.anonymousAudience,
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text',
      type: 'item'
    }
  }
  const wrapper = shallow(<Chat allIds={allIds} byId={byId} />)

  expect(wrapper.find('ChatItem')).toHaveLength(2)
  expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toEqual([2, 1])
})
test('<Chat /> 3 items with 1 delimeter', () => {
  const allIds: Props['allIds'] = ['delimeter0', 'chat2', 'chat1', 'chat0']
  const byId: Props['byId'] = {
    'chat0': {
      id: 1,
      image: 'image',
      intensionalDisclosureRange: village.Channel.anonymousAudience,
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text',
      type: 'item'
    },
    'chat1': {
      id: 2,
      image: 'image',
      intensionalDisclosureRange: village.Channel.anonymousAudience,
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text',
      type: 'item'
    },
    'chat2': {
      id: 3,
      image: 'image',
      intensionalDisclosureRange: village.Channel.anonymousAudience,
      isMine: true,
      name: 'name',
      phaseStartTime: '2018-01-01T00:00:00.000Z',
      phaseTimeLimit: 50,
      serverTimestamp: '2018-01-01T00:00:10.000Z',
      text: 'text',
      type: 'item'
    },
    'delimeter0': {
      date: 1,
      type: 'delimeter'
    }
  }
  const wrapper = shallow(<Chat allIds={allIds} byId={byId} />)

  expect(wrapper.find('ChatItem')).toHaveLength(3)
  expect(wrapper.find('ChatDelimeter')).toHaveLength(1)
  expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toEqual([3, 2, 1])
})
