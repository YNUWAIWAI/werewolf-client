import * as React from 'react'
import * as lobby from '../../types'
import AdvancedSearchBox from './AdvancedSearchBox'
import Select from 'react-select'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<AdvancedSearchBox />', () => {
  test('render', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const validity = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const handleAvatarChange = jest.fn()
    const handleCheckboxChangeInner = jest.fn()
    const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
    const handleNumberChangeInner = jest.fn()
    const handleNumberChange = jest.fn(() => handleNumberChangeInner)
    const handleTextChangeInner = jest.fn()
    const handleTextChange = jest.fn(() => handleTextChangeInner)
    const handleValidityChangeInner = jest.fn()
    const handleValidityChange = jest.fn(() => handleValidityChangeInner)
    const wrapper = mountWithIntl(
      <AdvancedSearchBox
        checked={checked}
        handleAvatarChange={handleAvatarChange}
        handleCheckboxChange={handleCheckboxChange}
        handleNumberChange={handleNumberChange}
        handleTextChange={handleTextChange}
        handleValidityChange={handleValidityChange}
        validity={validity}
      />
    )

    expect(wrapper.find('.lo--advanced-search').children()).toHaveLength(12)
  })
  describe('handleValueChange', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const validity = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }

    describe('avatar', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(9).find(Select).props().onChange

        if (onChange) {
          onChange(
            {
              label: 'Unspecified',
              value: lobby.Avatar.unspecified
            },
            {
              action: 'select-option'
            }
          )
        }

        expect(handleAvatarChange).toHaveBeenCalledTimes(1)
        expect(handleAvatarChange).toHaveBeenCalledWith(lobby.Avatar.unspecified)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('avatar')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('avatar')
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(9).find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(1)
        expect(handleAvatarChange).toHaveBeenCalledWith(lobby.Avatar.random)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('avatar')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('avatar')
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(9).find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(9).find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleAvatarChange).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('comment', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(11).find('textarea').simulate('change', {
          target: {
            validity: {
              valid: true
            },
            value: 'value'
          }
        })
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('value')
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('comment')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('comment')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('comment')
      })
      test('invalid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(11).find('textarea').simulate('change', {
          target: {
            validity: {
              valid: false
            },
            value: 'valuevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalue'
          }
        })
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('valuevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevaluevalue')
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('comment')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(false)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('comment')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('comment')
      })
      test('empty', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(11).find('textarea').simulate('change', {
          target: {
            validity: {
              valid: true
            },
            value: ''
          }
        })
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('')
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('comment')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(false)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('comment')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('comment')
      })
    })
    describe('hostName', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(3).find('input').simulate('change', {
          target: {
            validity: {
              valid: true
            },
            value: 'value'
          }
        })
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('value')
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('hostName')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('hostName')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('hostName')
      })
      test('invalid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(3).find('input').simulate('change', {
          target: {
            validity: {
              valid: false
            },
            value: ''
          }
        })
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('')
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('hostName')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(false)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('hostName')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('hostName')
      })
    })
    describe('maximum', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(7).find(Select).props().onChange

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
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(4)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('maximum')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('maximum')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('maximum')
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(7).find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(-1)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('maximum')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(false)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('maximum')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('maximum')
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(7).find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(7).find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('minimum', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(5).find(Select).props().onChange

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
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(4)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('minimum')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('minimum')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('minimum')
      })
      test('[]', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(5).find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(1)
        expect(handleNumberChangeInner).toHaveBeenCalledWith(-1)
        expect(handleNumberChange).toHaveBeenCalledTimes(1)
        expect(handleNumberChange).toHaveBeenCalledWith('minimum')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(false)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('minimum')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('minimum')
      })
      test('undefined', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(5).find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
      })
      test('null', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )
        const onChange = wrapper.find('.lo--advanced-search').childAt(5).find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleNumberChangeInner).toHaveBeenCalledTimes(0)
        expect(handleNumberChange).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(0)
        expect(handleValidityChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('villageName', () => {
      test('valid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(1).find('input').simulate('change', {
          target: {
            validity: {
              valid: true
            },
            value: 'value'
          }
        })
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('value')
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('villageName')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('villageName')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(true)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('villageName')
      })
      test('invalid', () => {
        const handleAvatarChange = jest.fn()
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const handleNumberChangeInner = jest.fn()
        const handleNumberChange = jest.fn(() => handleNumberChangeInner)
        const handleTextChangeInner = jest.fn()
        const handleTextChange = jest.fn(() => handleTextChangeInner)
        const handleValidityChangeInner = jest.fn()
        const handleValidityChange = jest.fn(() => handleValidityChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(1).find('input').simulate('change', {
          target: {
            validity: {
              valid: false
            },
            value: ''
          }
        })
        expect(handleTextChangeInner).toHaveBeenCalledTimes(1)
        expect(handleTextChangeInner).toHaveBeenCalledWith('')
        expect(handleTextChange).toHaveBeenCalledTimes(1)
        expect(handleTextChange).toHaveBeenCalledWith('villageName')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(false)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('villageName')
        expect(handleValidityChangeInner).toHaveBeenCalledTimes(1)
        expect(handleValidityChangeInner).toHaveBeenCalledWith(false)
        expect(handleValidityChange).toHaveBeenCalledTimes(1)
        expect(handleValidityChange).toHaveBeenCalledWith('villageName')
      })
    })
  })
  describe('handleCheckboxChange', () => {
    const checked = {
      avatar: true,
      comment: false,
      hostName: false,
      maximum: false,
      minimum: false,
      villageName: false
    }
    const handleAvatarChange = jest.fn()
    const handleNumberChangeInner = jest.fn()
    const handleNumberChange = jest.fn(() => handleNumberChangeInner)
    const handleTextChangeInner = jest.fn()
    const handleTextChange = jest.fn(() => handleTextChangeInner)
    const handleValidityChangeInner = jest.fn()
    const handleValidityChange = jest.fn(() => handleValidityChangeInner)

    describe('avatar', () => {
      test('enabled', () => {
        const validity = {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(8).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
      })
      test('disbled', () => {
        const validity = {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(8).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('comment', () => {
      test('enabled', () => {
        const validity = {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(10).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('comment')
      })
      test('disbled', () => {
        const validity = {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(10).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('hostName', () => {
      test('enabled', () => {
        const validity = {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        }

        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(2).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('hostName')
      })
      test('disbled', () => {
        const validity = {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(2).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('maximum', () => {
      test('enabled', () => {
        const validity = {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(6).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('maximum')
      })
      test('disbled', () => {
        const validity = {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(6).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('minimum', () => {
      test('enabled', () => {
        const validity = {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(4).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('minimum')
      })
      test('disbled', () => {
        const validity = {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(4).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
      })
    })
    describe('villageName', () => {
      test('enabled', () => {
        const validity = {
          avatar: true,
          comment: true,
          hostName: true,
          maximum: true,
          minimum: true,
          villageName: true
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(0).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChangeInner).toHaveBeenCalledWith(true)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(1)
        expect(handleCheckboxChange).toHaveBeenCalledWith('villageName')
      })
      test('disbled', () => {
        const validity = {
          avatar: false,
          comment: false,
          hostName: false,
          maximum: false,
          minimum: false,
          villageName: false
        }
        const handleCheckboxChangeInner = jest.fn()
        const handleCheckboxChange = jest.fn(() => handleCheckboxChangeInner)
        const wrapper = mountWithIntl(
          <AdvancedSearchBox
            checked={checked}
            handleAvatarChange={handleAvatarChange}
            handleCheckboxChange={handleCheckboxChange}
            handleNumberChange={handleNumberChange}
            handleTextChange={handleTextChange}
            handleValidityChange={handleValidityChange}
            validity={validity}
          />
        )

        wrapper.find('.lo--advanced-search').childAt(0).find('input').simulate('change')
        expect(handleCheckboxChangeInner).toHaveBeenCalledTimes(0)
        expect(handleCheckboxChange).toHaveBeenCalledTimes(0)
      })
    })
  })
})
