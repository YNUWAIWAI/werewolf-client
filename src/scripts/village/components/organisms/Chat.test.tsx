import * as React from 'react'
import {
  Chat,
  Props
} from './Chat'
import {ImagePath} from '../../constants/ImagePath'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('render', () => {
  test('0 item', () => {
    const allIds: Props['allIds'] = []
    const byId: Props['byId'] = {}
    const handleStarInner = jest.fn()
    const handleStar = jest.fn(() => handleStarInner)
    const wrapper = mountWithIntl(
      <Chat
        allIds={allIds}
        byId={byId}
        expand={false}
        handleStar={handleStar}
        navigatable
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
    expect(handleStarInner).toHaveBeenCalledTimes(0)
    expect(handleStar).toHaveBeenCalledTimes(0)
  })
  test('1 item', () => {
    const allIds: Props['allIds'] = ['chat0']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const handleStarInner = jest.fn()
    const handleStar = jest.fn(() => handleStarInner)
    const wrapper = mountWithIntl(
      <Chat
        allIds={allIds}
        byId={byId}
        expand={false}
        handleStar={handleStar}
        navigatable
      />
    )

    expect(wrapper.html()).toMatchSnapshot()
    expect(handleStarInner).toHaveBeenCalledTimes(0)
    expect(handleStar).toHaveBeenCalledTimes(1)
    expect(handleStar).toHaveBeenCalledWith('chat0')
  })
  test('2 items', () => {
    const allIds: Props['allIds'] = ['chat1', 'chat0']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      }
    }
    const handleStarInner = jest.fn()
    const handleStar = jest.fn(() => handleStarInner)
    const wrapper = mountWithIntl(
      <Chat
        allIds={allIds}
        byId={byId}
        expand={false}
        handleStar={handleStar}
        navigatable
      />
    )

    expect(wrapper.find('ChatItem')).toHaveLength(2)
    expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toStrictEqual([2, 1])
    expect(wrapper.html()).toMatchSnapshot()
    expect(handleStarInner).toHaveBeenCalledTimes(0)
    expect(handleStar).toHaveBeenCalledTimes(2)
    expect(handleStar).toHaveBeenCalledWith('chat0')
    expect(handleStar).toHaveBeenCalledWith('chat1')
  })
  test('3 items with 1 delimeter', () => {
    const allIds: Props['allIds'] = ['delimeter0', 'chat2', 'chat1', 'chat0']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: ImagePath.Character.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat1': {
        id: 2,
        image: ImagePath.Character.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'chat2': {
        id: 3,
        image: ImagePath.Character.a,
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: village.ChatItemType.item
      },
      'delimeter0': {
        day: 1,
        type: village.ChatItemType.delimeter
      }
    }
    const handleStarInner = jest.fn()
    const handleStar = jest.fn(() => handleStarInner)
    const wrapper = mountWithIntl(
      <Chat
        allIds={allIds}
        byId={byId}
        expand={false}
        handleStar={handleStar}
        navigatable
      />
    )

    expect(wrapper.find('ChatItem')).toHaveLength(3)
    expect(wrapper.find('ChatDelimeter')).toHaveLength(1)
    expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toStrictEqual([3, 2, 1])
    expect(wrapper.html()).toMatchSnapshot()
    expect(handleStarInner).toHaveBeenCalledTimes(0)
    expect(handleStar).toHaveBeenCalledTimes(3)
    expect(handleStar).toHaveBeenCalledWith('chat0')
    expect(handleStar).toHaveBeenCalledWith('chat1')
    expect(handleStar).toHaveBeenCalledWith('chat2')
  })
})
