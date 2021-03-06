import * as React from 'react'
import {LanguageSelect} from './LanguageSelect'
import {CustomizedSelect as Select} from './CustomizedSelect'
import {lobby} from '../../../types'
import {shallow} from 'enzyme'

describe('<LanguageSelect />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <LanguageSelect
        className="className"
        defaultValue={lobby.Language.en}
        handleChange={handleChange}
        menuPosition="absolute"
        navigatable
      />
    )

    expect(wrapper.find(Select)).toHaveLength(1)
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
  describe('onChange', () => {
    test('valid', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = shallow(
        <LanguageSelect
          className="className"
          defaultValue={lobby.Language.en}
          handleChange={handleChange}
          menuPosition="absolute"
          navigatable
        />
      )

      wrapper.find(Select).simulate('change', {
        label: 'English',
        value: 'en'
      })
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(true)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith('en')
    })
    test('[]', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = shallow(
        <LanguageSelect
          className="className"
          defaultValue={lobby.Language.en}
          handleChange={handleChange}
          menuPosition="absolute"
          navigatable
        />
      )

      wrapper.find(Select).simulate('change', [])
      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange).toHaveBeenCalledWith(false)
      expect(handleChangeInner).toHaveBeenCalledTimes(1)
      expect(handleChangeInner).toHaveBeenCalledWith('en')
    })
    test('null', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = shallow(
        <LanguageSelect
          className="className"
          defaultValue={lobby.Language.en}
          handleChange={handleChange}
          menuPosition="absolute"
          navigatable
        />
      )

      wrapper.find(Select).simulate('change', null)
      expect(handleChange).toHaveBeenCalledTimes(0)
      expect(handleChangeInner).toHaveBeenCalledTimes(0)
    })
    test('undefined', () => {
      const handleChangeInner = jest.fn()
      const handleChange = jest.fn(() => handleChangeInner)
      const wrapper = shallow(
        <LanguageSelect
          className="className"
          defaultValue={lobby.Language.en}
          handleChange={handleChange}
          menuPosition="absolute"
          navigatable
        />
      )

      wrapper.find(Select).simulate('change', undefined)
      expect(handleChange).toHaveBeenCalledTimes(0)
      expect(handleChangeInner).toHaveBeenCalledTimes(0)
    })
  })
})
