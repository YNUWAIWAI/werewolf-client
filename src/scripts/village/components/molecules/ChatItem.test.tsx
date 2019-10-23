import * as React from 'react'
import ChatItem from './ChatItem'
import {shallow} from 'enzyme'
import {village} from '../../types'

describe('<ChatItem />', () => {
  describe('isMine={true}', () => {
    test('iintensionalDisclosureRange="anonymousAudience"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.anonymousAudience}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="grave"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.grave}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="hunter"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.hunter}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="master"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.master}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="onymousAudience"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.onymousAudience}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="private"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.private}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="public"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.public}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="seer"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.seer}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="werewolf"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.werewolf}
          isMarked={false}
          isMine
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
  })
  describe('isMine={false}', () => {
    test('intensionalDisclosureRange="anonymousAudience"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.anonymousAudience}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="grave"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.grave}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="hunter"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.hunter}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="master"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.master}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="onymousAudience"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.onymousAudience}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="private"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.private}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="public"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.public}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(true)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="seer"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.seer}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
    test('intensionalDisclosureRange="werewolf"', () => {
      const handleStar = jest.fn()
      const wrapper = shallow(
        <ChatItem
          handleStar={handleStar}
          id={1}
          image="https://werewolf.world/image/0.3/agent_icons/120x120/a_120x120.png"
          initial="A"
          intensionalDisclosureRange={village.Channel.werewolf}
          isMarked={false}
          isMine={false}
          name="Adil"
          phaseStartTime="2018-01-01T00:00:00.000Z"
          phaseTimeLimit={50}
          serverTimestamp="2018-01-01T00:00:10.000Z"
          text="text"
        />
      )

      expect(wrapper.find('.vi--chat--item').hasClass('me')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('public')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('grave')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('werewolf')).toBe(true)
      expect(wrapper.find('.vi--chat--item').hasClass('master')).toBe(false)
      expect(wrapper.find('.vi--chat--item').hasClass('private')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#message1')).toBe(false)
      expect(wrapper.find('.vi--chat--item').is('#messageundefiend')).toBe(false)
      expect(handleStar).toHaveBeenCalledTimes(0)
    })
  })
})

