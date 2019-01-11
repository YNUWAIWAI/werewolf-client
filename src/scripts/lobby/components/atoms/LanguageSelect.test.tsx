/* global lobby */
/// <reference types="lobby" />
import * as React from 'react'
import LanguageSelect from './LanguageSelect'
import Select from 'react-select'
import {shallow} from 'enzyme'

describe('<LanguageSelect />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <LanguageSelect
        className="className"
        defaultValue={lobby.Language.ja}
        handleChange={handleChange}
      />
    )

    expect(wrapper.find(Select)).toHaveLength(1)
    expect(handleChange).toHaveBeenCalledTimes(0)
  })
  test('onChange valid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <LanguageSelect
        className="className"
        defaultValue={lobby.Language.ja}
        handleChange={handleChange}
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
  test('onChange invalid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <LanguageSelect
        className="className"
        defaultValue={lobby.Language.ja}
        handleChange={handleChange}
      />
    )

    wrapper.find(Select).simulate('change', [])
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(false)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('en')
  })
})
