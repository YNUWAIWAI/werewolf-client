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

    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('handleKeyPress', () => {
  test('press "Space"', () => {
    const handleChange = jest.fn()
    const preventDefault = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.lo--checkbox').simulate('keypress', {
      key: ' ',
      preventDefault
    })
    expect(handleChange).toHaveBeenCalled()
    expect(preventDefault).toHaveBeenCalled()
  })
  test('press "Enter"', () => {
    const handleChange = jest.fn()
    const preventDefault = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.lo--checkbox').simulate('keypress', {
      key: 'Enter',
      preventDefault
    })
    expect(handleChange).not.toHaveBeenCalled()
    expect(preventDefault).not.toHaveBeenCalled()
  })
  test('disabled', () => {
    const handleChange = jest.fn()
    const preventDefault = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        disabled
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.lo--checkbox').simulate('keypress', {
      key: ' ',
      preventDefault
    })
    expect(handleChange).not.toHaveBeenCalled()
    expect(preventDefault).not.toHaveBeenCalled()
  })
})
describe('handleClick', () => {
  test('enabled', () => {
    const handleChange = jest.fn()
    const stopPropagation = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.lo--checkbox').simulate('click', {
      stopPropagation
    })
    expect(handleChange).toHaveBeenCalled()
    expect(stopPropagation).toHaveBeenCalled()
  })
  test('disabled', () => {
    const handleChange = jest.fn()
    const stopPropagation = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        disabled
        handleChange={handleChange}
        navigatable
      />
    )

    wrapper.find('.lo--checkbox').simulate('click', {
      stopPropagation
    })
    expect(handleChange).not.toHaveBeenCalled()
    expect(stopPropagation).toHaveBeenCalled()
  })
})
