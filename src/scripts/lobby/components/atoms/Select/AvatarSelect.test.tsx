import * as React from 'react'
import {AvatarSelect} from './AvatarSelect'
import Select from 'react-select'
import {getMessages} from '../../../i18n'
import {initRenderer} from '../../../tools'
import {lobby} from '../../../types'

const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('<AvatarSelect />', () => {
  describe('render', () => {
    test('advancedSearch fixed', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue={lobby.Avatar.fixed}
          handleChange={handleChange}
          navigatable
          type="advancedSearch"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toStrictEqual({
        label: 'Fixed',
        value: 'fixed'
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
    test('advancedSearch random', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue={lobby.Avatar.random}
          handleChange={handleChange}
          navigatable
          type="advancedSearch"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toStrictEqual({
        label: 'Random',
        value: 'random'
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
    test('advancedSearch unspecified', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue={lobby.Avatar.unspecified}
          handleChange={handleChange}
          navigatable
          type="advancedSearch"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toStrictEqual({
        label: 'Unspecified',
        value: 'unspecified'
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
    test('buildVillage random', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue={lobby.Avatar.random}
          handleChange={handleChange}
          navigatable
          type="buildVillage"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toStrictEqual({
        label: 'Random avatar',
        value: 'random'
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
    test('buildVillage fixed', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue={lobby.Avatar.fixed}
          handleChange={handleChange}
          navigatable
          type="buildVillage"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toStrictEqual({
        label: 'Fixed avatar',
        value: 'fixed'
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
  })
  describe('onChange', () => {
    describe('advancedSearch', () => {
      test('valid', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.fixed}
            handleChange={handleChange}
            navigatable
            type="advancedSearch"
          />
        )
        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            {
              label: 'Unspecified',
              value: 'unspecified'
            },
            {
              action: 'select-option'
            }
          )
        }
        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(handleChange).toHaveBeenCalledWith(true)
        expect(handleChangeInner).toHaveBeenCalledTimes(1)
        expect(handleChangeInner).toHaveBeenCalledWith('unspecified')
      })
      test('[]', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.fixed}
            handleChange={handleChange}
            navigatable
            type="advancedSearch"
          />
        )
        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }

        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(handleChange).toHaveBeenCalledWith(true)
        expect(handleChangeInner).toHaveBeenCalledTimes(1)
        expect(handleChangeInner).toHaveBeenCalledWith('random')
      })
      test('null', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.fixed}
            handleChange={handleChange}
            navigatable
            type="advancedSearch"
          />
        )
        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }

        expect(handleChange).toHaveBeenCalledTimes(0)
        expect(handleChangeInner).toHaveBeenCalledTimes(0)
      })
      test('undefined', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.fixed}
            handleChange={handleChange}
            navigatable
            type="advancedSearch"
          />
        )
        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }

        expect(handleChange).toHaveBeenCalledTimes(0)
        expect(handleChangeInner).toHaveBeenCalledTimes(0)
      })
    })
    describe('buildVillage', () => {
      test('valid', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.fixed}
            handleChange={handleChange}
            navigatable
            type="buildVillage"
          />
        )
        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            {
              label: 'Random',
              value: 'random'
            },
            {
              action: 'select-option'
            }
          )
        }

        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(handleChange).toHaveBeenCalledWith(true)
        expect(handleChangeInner).toHaveBeenCalledTimes(1)
        expect(handleChangeInner).toHaveBeenCalledWith('random')
      })
      test('[]', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.random}
            handleChange={handleChange}
            navigatable
            type="buildVillage"
          />
        )
        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            [],
            {
              action: 'select-option'
            }
          )
        }
        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(handleChange).toHaveBeenCalledWith(false)
        expect(handleChangeInner).toHaveBeenCalledTimes(1)
        expect(handleChangeInner).toHaveBeenCalledWith('fixed')
      })
      test('null', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.random}
            handleChange={handleChange}
            navigatable
            type="buildVillage"
          />
        )

        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            null,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleChange).toHaveBeenCalledTimes(0)
        expect(handleChangeInner).toHaveBeenCalledTimes(0)
      })
      test('undefined', () => {
        const handleChangeInner = jest.fn()
        const handleChange = jest.fn(() => handleChangeInner)
        const wrapper = mountWithIntl(
          <AvatarSelect
            className="class"
            defaultValue={lobby.Avatar.random}
            handleChange={handleChange}
            navigatable
            type="buildVillage"
          />
        )

        const onChange = wrapper.find(Select).props().onChange

        if (onChange) {
          onChange(
            undefined,
            {
              action: 'select-option'
            }
          )
        }
        expect(handleChange).toHaveBeenCalledTimes(0)
        expect(handleChangeInner).toHaveBeenCalledTimes(0)
      })
    })
  })
})
