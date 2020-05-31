import * as React from 'react'
import {ChatItem} from './ChatItem'
import {ImagePath} from '../../constants/ImagePath'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {village} from '../../types'

const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('render', () => {
  describe('intensionalDisclosureRange', () => {
    describe('anonymousAudience', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.anonymousAudience}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.anonymousAudience}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('grave', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.grave}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.grave}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('hunter', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.hunter}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.hunter}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('master', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.master}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.master}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('onymousAudience', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.onymousAudience}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.onymousAudience}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('private', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.private}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.private}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('public', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.public}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.public}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('seer', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.seer}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.seer}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
    describe('werewolf', () => {
      test('isMine: true', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.werewolf}
            isMarked={false}
            isMine
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
      test('isMine: false', () => {
        const handleStar = jest.fn()
        const wrapper = mountWithIntl(
          <ChatItem
            handleStar={handleStar}
            id={1}
            image={ImagePath.Character120x120.a}
            initial="A"
            intensionalDisclosureRange={village.Channel.werewolf}
            isMarked={false}
            isMine={false}
            name="Adil"
            navigatable
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
        expect(wrapper.html()).toMatchSnapshot()
        expect(handleStar).toHaveBeenCalledTimes(0)
      })
    })
  })
})

