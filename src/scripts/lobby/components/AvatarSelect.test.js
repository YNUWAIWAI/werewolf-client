// @flow
import AvatarSelect from './AvatarSelect'
import React from 'react'
import Select from 'react-select'
import {shallow} from 'enzyme'

describe('<AvatarSelect />', () => {
  test('render', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <AvatarSelect
        className="class"
        handleChange={handleChange}
        type="advancedSearch"
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
        className="class"
        handleChange={handleChange}
        type="advancedSearch"
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
  test('onChange invalid advancedSearch', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <AvatarSelect
        className="class"
        handleChange={handleChange}
        type="advancedSearch"
      />
    )

    wrapper.find(Select).simulate('change', [])
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('random')
  })
  test('onChange invalid buildVillage', () => {
    const handleChangeInner = jest.fn()
    const handleChange = jest.fn(() => handleChangeInner)
    const wrapper = shallow(
      <AvatarSelect
        className="class"
        handleChange={handleChange}
        type="buildVillage"
      />
    )

    wrapper.find(Select).simulate('change', [])
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(false)
    expect(handleChangeInner).toHaveBeenCalledTimes(1)
    expect(handleChangeInner).toHaveBeenCalledWith('random')
  })
})
