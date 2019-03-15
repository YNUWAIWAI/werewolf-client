/* global lobby */
import * as React from 'react'
import BuildVillageBox, {Props} from './BuildVillageBox'
import Select from 'react-select'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

describe('<BuildVillageBox />', () => {
  describe('render', () => {
    test('avatar: fixed', () => {
      const handleAvatarChange = jest.fn()
      const handleMemberChange = jest.fn()
      const handleNumberChangeInner = jest.fn()
      const handleNumberChange = jest.fn(() => handleNumberChangeInner)
      const handleTextChangeInner = jest.fn()
      const handleTextChange = jest.fn(() => handleTextChangeInner)
      const handleValidityChangeInner = jest.fn()
      const handleValidityChange = jest.fn(() => handleValidityChangeInner)
      const validity: Props['validity'] = {
        avatar: true,
        comment: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      }
      const value: Props['value'] = {
        avatar: lobby.Avatar.fixed,
        comment: '',
        hostName: 'Alice',
        numberOfHumans: 8,
        numberOfPlayers: 15,
        numberOfRobots: 7,
        villageName: 'Alice\'s village'
      }
      const wrapper = mountWithIntl(
        <BuildVillageBox
          handleAvatarChange={handleAvatarChange}
          handleMemberChange={handleMemberChange}
          handleNumberChange={handleNumberChange}
          handleTextChange={handleTextChange}
          handleValidityChange={handleValidityChange}
          validity={validity}
          value={value}
        />
      )

      expect(wrapper.find('.lo--village--item').children()).toHaveLength(10)
      expect(wrapper.find('input.lo--village--item--val.village-name').exists()).toBe(true)
      expect(wrapper.find('div.lo--village--item--val.village-name').exists()).toBe(false)
      expect(wrapper.find('div.lo--village--item--val.host-name').text()).toBe('Alice')
      expect(handleAvatarChange).toHaveBeenCalledTimes(0)
      expect(handleMemberChange).toHaveBeenCalledTimes(0)
      expect(handleNumberChange).toHaveBeenCalledTimes(0)
      expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
      expect(handleTextChange).toHaveBeenCalledTimes(0)
      expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      expect(handleValidityChange).toHaveBeenCalledTimes(0)
      expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
    })
    test('avatar: random', () => {
      const handleAvatarChange = jest.fn()
      const handleMemberChange = jest.fn()
      const handleNumberChangeInner = jest.fn()
      const handleNumberChange = jest.fn(() => handleNumberChangeInner)
      const handleTextChangeInner = jest.fn()
      const handleTextChange = jest.fn(() => handleTextChangeInner)
      const handleValidityChangeInner = jest.fn()
      const handleValidityChange = jest.fn(() => handleValidityChangeInner)
      const validity: Props['validity'] = {
        avatar: true,
        comment: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      }
      const value: Props['value'] = {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Alice',
        numberOfHumans: 8,
        numberOfPlayers: 15,
        numberOfRobots: 7,
        villageName: 'Cursed Village'
      }
      const wrapper = mountWithIntl(
        <BuildVillageBox
          handleAvatarChange={handleAvatarChange}
          handleMemberChange={handleMemberChange}
          handleNumberChange={handleNumberChange}
          handleTextChange={handleTextChange}
          handleValidityChange={handleValidityChange}
          validity={validity}
          value={value}
        />
      )

      expect(wrapper.find('.lo--village--item').children()).toHaveLength(10)
      expect(wrapper.find('input.lo--village--item--val.village-name').exists()).toBe(false)
      expect(wrapper.find('div.lo--village--item--val.village-name').exists()).toBe(true)
      expect(wrapper.find('div.lo--village--item--val.host-name').text()).toBe('Anonymous')
      expect(handleAvatarChange).toHaveBeenCalledTimes(0)
      expect(handleMemberChange).toHaveBeenCalledTimes(0)
      expect(handleNumberChange).toHaveBeenCalledTimes(0)
      expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
      expect(handleTextChange).toHaveBeenCalledTimes(0)
      expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      expect(handleValidityChange).toHaveBeenCalledTimes(0)
      expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
    })
  })
  describe('handleChange', () => {
    const validity: Props['validity'] = {
      avatar: true,
      comment: true,
      numberOfPlayers: true,
      numberOfRobots: true,
      villageName: true
    }
    const value: Props['value'] = {
      avatar: lobby.Avatar.fixed,
      comment: '',
      hostName: 'Alice',
      numberOfHumans: 8,
      numberOfPlayers: 15,
      numberOfRobots: 7,
      villageName: 'Alice\'s village'
    }

    describe('avatar', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(6).find(Select).props()
          .onChange({
            label: 'Random',
            value: lobby.Avatar.random
          })
        expect(handleAvatarChange).toHaveBeenCalledTimes(1)
        expect(handleAvatarChange).toHaveBeenCalledWith(lobby.Avatar.random)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('avatar')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(6).find(Select).props()
          .onChange([])
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('avatar')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(6).find(Select).props()
          .onChange(undefined)
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(6).find(Select).props()
          .onChange(null)
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
      })
    })
    describe('comment', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(9).find('textarea').simulate('change', {
          target: {
            validity: {
              valid: true
            },
            value: 'value'
          }
        })
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('comment')
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('value')
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('comment')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
      })
      test('invalid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(9).find('textarea').simulate('change', {
          target: {
            validity: {
              valid: false
            },
            value: 'valuevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalue'
          }
        })
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('comment')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
      })
      test('empty', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(9).find('textarea').simulate('change', {
          target: {
            validity: {
              valid: true
            },
            value: ''
          }
        })
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('comment')
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('')
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('comment')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
      })
    })
    describe('member', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item--member-select--role--radio > input').forEach(elem => elem.simulate('change'))
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(3)
        expect(handleMemberChange).toHaveBeenCalledWith(lobby.Member.A)
        expect(handleMemberChange).toHaveBeenCalledWith(lobby.Member.B)
        expect(handleMemberChange).toHaveBeenCalledWith(lobby.Member.C)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(3)
        expect(handleValidityChange).toHaveBeenCalledWith('member')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(3)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
      })
    })
    describe('numberOfPlayers', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(5).find(Select).props()
          .onChange({
            label: '4 players',
            value: 4
          })
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('numberOfPlayers')
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(4)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('numberOfPlayers')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(5).find(Select).props()
          .onChange([])
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('numberOfPlayers')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(5).find(Select).props()
          .onChange(undefined)
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(5).find(Select).props()
          .onChange(null)
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
      })
    })
    describe('numberOfRobots', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(7).find(Select).props()
          .onChange({
            label: '4 robots',
            value: 4
          })
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('numberOfRobots')
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(4)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('numberOfRobots')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(7).find(Select).props()
          .onChange([])
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('numberOfRobots')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(7).find(Select).props()
          .onChange(null)
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(7).find(Select).props()
          .onChange(null)
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
      })
    })
    describe('villageName', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(1).find('input').simulate('change', {
          target: {
            validity: {
              valid: true
            },
            value: 'value'
          }
        })
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('villageName')
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('value')
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('villageName')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
      })
      test('invalid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
            value={value}
          />
        )

        wrapper.find('.lo--village--item').childAt(1).find('input').simulate('change', {
          target: {
            validity: {
              valid: false
            },
            value: ''
          }
        })
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('villageName')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
      })
    })
  })
})
