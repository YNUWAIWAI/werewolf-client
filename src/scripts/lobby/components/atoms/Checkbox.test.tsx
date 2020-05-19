import * as React from 'react'
import {Checkbox} from './Checkbox'
import {shallow} from 'enzyme'

describe('render', () => {
  describe('checked', () => {
    test('true', () => {
      const handleChange = jest.fn()
      const wrapper = shallow(
        <Checkbox
          checked
          handleChange={handleChange}
          navigatable
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('false', () => {
      const handleChange = jest.fn()
      const wrapper = shallow(
        <Checkbox
          checked={false}
          handleChange={handleChange}
          navigatable
        />
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
  test('disabled', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        disabled
        handleChange={handleChange}
        navigatable
      />
    )

    expect(wrapper.find('.lo--checkbox').hasClass('disabled')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('handleKeyPress', () => {
  test('press "Space"', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.checkbox').simulate('keypress', {
      key: ' '
    })
    expect(handleChange).toHaveBeenCalled()
  })
  test('press "Enter"', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.checkbox').simulate('keypress', {
      key: 'Enter'
    })
    expect(handleChange).not.toHaveBeenCalled()
  })
  test('disabled', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        disabled
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.checkbox').simulate('keypress', {
      key: ' '
    })
    expect(handleChange).not.toHaveBeenCalled()
  })
})
describe('handleClick', () => {
  test('enabled', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.checkbox').simulate('click')
    expect(handleChange).toHaveBeenCalled()
  })
  test('disabled', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        disabled
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.checkbox').simulate('click')
    expect(handleChange).not.toHaveBeenCalled()
  })
})
