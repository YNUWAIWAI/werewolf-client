// @flow
import AvatarSelect from './AvatarSelect2'
import React from 'react'
import Select from 'react-select'
import {shallow} from 'enzyme'

describe('<AvatarSelect />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <AvatarSelect
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
      <AvatarSelect
        handleChange={handleChange}
      />
    )

    wrapper.find(Select).simulate('change', {
      label: 'Fixed',
      value: 'fixed'
    })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('fixed')
  })
  test('onChange invalid', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <AvatarSelect
        handleChange={handleChange}
      />
    )

    wrapper.find(Select).simulate('change', [])
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('random')
  })
})
