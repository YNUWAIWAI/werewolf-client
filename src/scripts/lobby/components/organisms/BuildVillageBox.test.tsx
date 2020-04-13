import * as React from 'react'
import BuildVillageBox, {StateProps} from './BuildVillageBox'
import Select from 'react-select'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<BuildVillageBox />', () => {
  describe('render', () => {
    test('avatar: fixed', () => {
      const handleAvatarChange = jest.fn()
      const handleMemberChange = jest.fn()
      const handleNumberChangeInner = jest.fn()
      const handleNumberChange = jest.fn(() => handleNumberChangeInner)
      const handleTextChangeInner = jest.fn()
      const handleTextChange = jest.fn(() => handleTextChangeInner)
      const validity: StateProps['validity'] = {
        avatar: true,
        comment: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      }
      const value: StateProps['value'] = {
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
          navigatable
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
    })
    test('avatar: random', () => {
      const handleAvatarChange = jest.fn()
      const handleMemberChange = jest.fn()
      const handleNumberChangeInner = jest.fn()
      const handleNumberChange = jest.fn(() => handleNumberChangeInner)
      const handleTextChangeInner = jest.fn()
      const handleTextChange = jest.fn(() => handleTextChangeInner)
      const validity: StateProps['validity'] = {
        avatar: true,
        comment: true,
        numberOfPlayers: true,
        numberOfRobots: true,
        villageName: true
      }
      const value: StateProps['value'] = {
        avatar: lobby.Avatar.random,
        comment: '',
        hostName: 'Alice',
        numberOfHumans: 8,
        numberOfPlayers: 15,
        numberOfRobots: 7,
        villageName: 'Cursed village'
      }
      const wrapper = mountWithIntl(
        <BuildVillageBox
          handleAvatarChange={handleAvatarChange}
          handleMemberChange={handleMemberChange}
          handleNumberChange={handleNumberChange}
          handleTextChange={handleTextChange}
          navigatable
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
    })
  })
  describe('handleChange', () => {
    const validity: StateProps['validity'] = {
      avatar: true,
      comment: true,
      numberOfPlayers: true,
      numberOfRobots: true,
      villageName: true
    }
    const value: StateProps['value'] = {
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
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(6).find(Select).props().onChange

        if (onChange) {
          onChange(
            {
              label: 'Random',
              value: lobby.Avatar.random
            },
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(1)
        expect(handleAvatarChange).toHaveBeenCalledWith(lobby.Avatar.random)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(6).find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
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
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(6).find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(6).find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
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
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
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
      })
      test('invalid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
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
      })
      test('empty', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
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
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
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
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(5).find(Select).props().onChange

        if (onChange) {
          onChange(
            {
              label: '4 players',
              value: 4
            },
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('numberOfPlayers')
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(4)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(5).find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(5).find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(5).find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
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
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(7).find(Select).props().onChange

        if (onChange) {
          onChange(
            {
              label: '4 robots',
              value: 4
            },
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('numberOfRobots')
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(4)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(7).find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(7).find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
            validity={validity}
            value={value}
          />
        )
        const onChange = wrapper.find('.lo--village--item').childAt(7).find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleMemberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleTextChange).toHaveBeenCalledTimes(0)
        expect(handleTextChangeInner).toHaveBeenCalledTimes(0)
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
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
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
      })
      test('invalid', () => {
        const handleAvatarChange = jest.fn()
        const handleMemberChange = jest.fn()
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const wrapper = mountWithIntl(
          <BuildVillageBox
            handleAvatarChange={handleAvatarChange}
            handleMemberChange={handleMemberChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            navigatable
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
      })
    })
  })
})
