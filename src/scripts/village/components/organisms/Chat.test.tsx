import * as React from 'react'
import * as village from '../../types'
import Chat, {Props} from './Chat'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {shallow} from 'enzyme'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<Chat />', () => {
  describe('render', () => {
    test('0 item', () => {
      const allIds: Props['allIds'] = []
      const byId: Props['byId'] = {}
      const handleStarInner = jest.fn()
      const handleStar = jest.fn(() => handleStarInner)
      const wrapper = shallow(
        <Chat
          allIds={allIds}
          byId={byId}
          handleStar={handleStar}
        />
      )

      expect(wrapper.find('ChatItem')).toHaveLength(0)
      expect(handleStarInner).toHaveBeenCalledTimes(0)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('1 item', () => {
      const allIds: Props['allIds'] = ['chat0']
      const byId: Props['byId'] = {
        'chat0': {
          id: 1,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          initial: 'A',
          intensionalDisclosureRange: village.Channel.anonymousAudience,
          isMarked: false,
          isMine: true,
          name: 'Adil',
          phaseStartTime: '2018-01-01T00:00:00.000Z',
          phaseTimeLimit: 50,
          serverTimestamp: '2018-01-01T00:00:10.000Z',
          text: 'text',
          type: 'item'
        }
      }
      const handleStarInner = jest.fn()
      const handleStar = jest.fn(() => handleStarInner)
      const wrapper = shallow(
        <Chat
          allIds={allIds}
          byId={byId}
          handleStar={handleStar}
        />
      )

      expect(wrapper.find('ChatItem')).toHaveLength(1)
      expect(handleStarInner).toHaveBeenCalledTimes(0)
      expect(handleStar).toHaveBeenCalledTimes(1)
      expect(handleStar).toHaveBeenCalledWith('chat0')
    })
    test('2 items', () => {
      const allIds: Props['allIds'] = ['chat1', 'chat0']
      const byId: Props['byId'] = {
        'chat0': {
          id: 1,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          initial: 'A',
          intensionalDisclosureRange: village.Channel.anonymousAudience,
          isMarked: false,
          isMine: true,
          name: 'Adil',
          phaseStartTime: '2018-01-01T00:00:00.000Z',
          phaseTimeLimit: 50,
          serverTimestamp: '2018-01-01T00:00:10.000Z',
          text: 'text',
          type: 'item'
        },
        'chat1': {
          id: 2,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          initial: 'A',
          intensionalDisclosureRange: village.Channel.anonymousAudience,
          isMarked: false,
          isMine: true,
          name: 'Adil',
          phaseStartTime: '2018-01-01T00:00:00.000Z',
          phaseTimeLimit: 50,
          serverTimestamp: '2018-01-01T00:00:10.000Z',
          text: 'text',
          type: 'item'
        }
      }
      const handleStarInner = jest.fn()
      const handleStar = jest.fn(() => handleStarInner)
      const wrapper = shallow(
        <Chat
          allIds={allIds}
          byId={byId}
          handleStar={handleStar}
        />
      )

      expect(wrapper.find('ChatItem')).toHaveLength(2)
      expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toStrictEqual([2, 1])
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
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          initial: 'A',
          intensionalDisclosureRange: village.Channel.anonymousAudience,
          isMarked: false,
          isMine: true,
          name: 'Adil',
          phaseStartTime: '2018-01-01T00:00:00.000Z',
          phaseTimeLimit: 50,
          serverTimestamp: '2018-01-01T00:00:10.000Z',
          text: 'text',
          type: 'item'
        },
        'chat1': {
          id: 2,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          initial: 'A',
          intensionalDisclosureRange: village.Channel.anonymousAudience,
          isMarked: false,
          isMine: true,
          name: 'Adil',
          phaseStartTime: '2018-01-01T00:00:00.000Z',
          phaseTimeLimit: 50,
          serverTimestamp: '2018-01-01T00:00:10.000Z',
          text: 'text',
          type: 'item'
        },
        'chat2': {
          id: 3,
          image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
          initial: 'A',
          intensionalDisclosureRange: village.Channel.anonymousAudience,
          isMarked: false,
          isMine: true,
          name: 'Adil',
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
      const handleStarInner = jest.fn()
      const handleStar = jest.fn(() => handleStarInner)
      const wrapper = shallow(
        <Chat
          allIds={allIds}
          byId={byId}
          handleStar={handleStar}
        />
      )

      expect(wrapper.find('ChatItem')).toHaveLength(3)
      expect(wrapper.find('ChatDelimeter')).toHaveLength(1)
      expect(wrapper.find('ChatItem').map(n => n.prop('id'))).toStrictEqual([3, 2, 1])
      expect(handleStarInner).toHaveBeenCalledTimes(0)
      expect(handleStar).toHaveBeenCalledTimes(3)
      expect(handleStar).toHaveBeenCalledWith('chat0')
      expect(handleStar).toHaveBeenCalledWith('chat1')
      expect(handleStar).toHaveBeenCalledWith('chat2')
    })
  })
  describe('handleScroll', () => {
    const allIds: Props['allIds'] = ['chat0']
    const byId: Props['byId'] = {
      'chat0': {
        id: 1,
        image: 'https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png',
        initial: 'A',
        intensionalDisclosureRange: village.Channel.anonymousAudience,
        isMarked: false,
        isMine: true,
        name: 'Adil',
        phaseStartTime: '2018-01-01T00:00:00.000Z',
        phaseTimeLimit: 50,
        serverTimestamp: '2018-01-01T00:00:10.000Z',
        text: 'text',
        type: 'item'
      }
    }

    test('shallow', () => {
      const handleStarInner = jest.fn()
      const handleStar = jest.fn(() => handleStarInner)
      const wrapper = shallow(
        <Chat
          allIds={allIds}
          byId={byId}
          handleStar={handleStar}
        />
      )

      wrapper.simulate('scroll')
      expect(wrapper.state()).toStrictEqual({
        atBottom: true
      })
    })
    test('mount', () => {
      const handleStarInner = jest.fn()
      const handleStar = jest.fn(() => handleStarInner)
      const wrapper = mountWithIntl(
        <Chat
          allIds={allIds}
          byId={byId}
          handleStar={handleStar}
        />
      )

      wrapper.simulate('scroll')
      expect(wrapper.state()).toStrictEqual({
        atBottom: true
      })
    })
  })
})
