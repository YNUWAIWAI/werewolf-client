import * as React from 'react'
import AvatarItem from './AvatarItem'
import Danger from '../atoms/svg/Danger'
import Safe from '../atoms/svg/Safe'
import Warning from '../atoms/svg/Warning'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<AvatarItem />', () => {
  describe('render', () => {
    describe('isAnonymous', () => {
      test('true', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous
            isHost
            isMe={false}
            name="name"
            ping="99.999"
            pingStatus={lobby.PingStatus.danger}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item--name').text()).toBe('Anonymous')
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
      test('false', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost
            isMe={false}
            name="name"
            ping="99.999"
            pingStatus={lobby.PingStatus.danger}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item--name').text()).toBe('name')
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
    })
    describe('isHost', () => {
      test('true', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost
            isMe
            name="name"
            ping="99.999"
            pingStatus={lobby.PingStatus.danger}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item--host').exists()).toBe(true)
        expect(wrapper.find('.lo--avatar-list--item--host').text()).toBe('Host')
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
      test('false', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost={false}
            isMe
            name="name"
            ping="99.999"
            pingStatus={lobby.PingStatus.danger}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item--host').exists()).toBe(false)
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
    })
    describe('isMe', () => {
      test('true', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost
            isMe
            name="name"
            ping="99.999"
            pingStatus={lobby.PingStatus.danger}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item').hasClass('me')).toBe(true)
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
      test('false', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost
            isMe={false}
            name="name"
            ping="99.999"
            pingStatus={lobby.PingStatus.danger}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item').hasClass('me')).toBe(false)
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
    })
    describe('pingStatus', () => {
      test('danger', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost
            isMe
            name="name"
            ping="99.999"
            pingStatus={lobby.PingStatus.danger}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item--ping').find(Danger).exists()).toBe(true)
        expect(wrapper.find('.lo--avatar-list--item--ping').text()).toBe('99.999 s')
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
      test('safe', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost
            isMe
            name="name"
            ping="00.500"
            pingStatus={lobby.PingStatus.safe}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item--ping').find(Safe).exists()).toBe(true)
        expect(wrapper.find('.lo--avatar-list--item--ping').text()).toBe('00.500 s')
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
      test('warning', () => {
        const confirmKickOutPlayer = jest.fn()
        const wrapper = mountWithIntl(
          <AvatarItem
            avatarImage="avatarImage"
            canKickOut={false}
            confirmKickOutPlayer={confirmKickOutPlayer}
            isAnonymous={false}
            isHost
            isMe
            name="name"
            ping="01.000"
            pingStatus={lobby.PingStatus.warning}
            token="token"
          />
        )

        expect(wrapper.find('.lo--avatar-list--item--ping').find(Warning).exists()).toBe(true)
        expect(wrapper.find('.lo--avatar-list--item--ping').text()).toBe('01.000 s')
        expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
      })
    })
  })
  describe('onClick', () => {
    test('canKickOut={true}', () => {
      const confirmKickOutPlayer = jest.fn()
      const wrapper = mountWithIntl(
        <AvatarItem
          avatarImage="avatarImage"
          canKickOut
          confirmKickOutPlayer={confirmKickOutPlayer}
          isAnonymous={false}
          isHost={false}
          isMe
          name="name"
          ping="99.999"
          pingStatus={lobby.PingStatus.danger}
          token="token"
        />
      )

      wrapper.simulate('click')
      expect(confirmKickOutPlayer).toHaveBeenCalledTimes(1)
    })
    test('canKickOut={false}', () => {
      const confirmKickOutPlayer = jest.fn()
      const wrapper = mountWithIntl(
        <AvatarItem
          avatarImage="avatarImage"
          canKickOut={false}
          confirmKickOutPlayer={confirmKickOutPlayer}
          isAnonymous={false}
          isHost={false}
          isMe
          name="name"
          ping="99.999"
          pingStatus={lobby.PingStatus.danger}
          token="token"
        />
      )

      wrapper.simulate('click')
      expect(confirmKickOutPlayer).toHaveBeenCalledTimes(0)
    })
  })
})
