// @flow
import AvatarSelect from './AvatarSelect'
import React from 'react'
import Select from 'react-select'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

describe('<AvatarSelect />', () => {
  describe('render', () => {
    test('advancedSearch fixed', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue="fixed"
          handleChange={handleChange}
          type="advancedSearch"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toEqual({
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
          defaultValue="random"
          handleChange={handleChange}
          type="advancedSearch"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toEqual({
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
          defaultValue="unspecified"
          handleChange={handleChange}
          type="advancedSearch"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toEqual({
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
          defaultValue="random"
          handleChange={handleChange}
          type="buildVillage"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toEqual({
        label: 'Random Avatar',
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
          defaultValue="fixed"
          handleChange={handleChange}
          type="buildVillage"
        />
      )

      expect(wrapper.find(Select)).toHaveLength(1)
      expect(wrapper.find(Select).props().defaultValue).toEqual({
        label: 'Fixed Avatar',
        value: 'fixed'
      })
      expect(handleChange).toHaveBeenCalledTimes(0)
    })
  })
  describe('onChange', () => {
    test('valid advancedSearch', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue="fixed"
          handleChange={handleChange}
          type="advancedSearch"
        />
      )

      wrapper.find(Select).props().onChange({
        label: 'Unspecified',
        value: 'unspecified'
      })
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(true)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith('unspecified')
    })
    test('valid buildVillage', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue="fixed"
          handleChange={handleChange}
          type="buildVillage"
        />
      )

      wrapper.find(Select).props().onChange({
        label: 'Random',
        value: 'random'
      })
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(true)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith('random')
    })
    test('invalid advancedSearch', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue="fixed"
          handleChange={handleChange}
          type="advancedSearch"
        />
      )

      wrapper.find(Select).props().onChange([])
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(true)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith('random')
    })
    test('invalid buildVillage', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = mountWithIntl(
        <AvatarSelect
          className="class"
          defaultValue="random"
          handleChange={handleChange}
          type="buildVillage"
        />
      )

      wrapper.find(Select).props().onChange([])
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(false)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith('fixed')
    })
  })
})
