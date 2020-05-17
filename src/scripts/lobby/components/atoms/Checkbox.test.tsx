import * as React from 'react'
import Checkbox from './Checkbox'
import {shallow} from 'enzyme'

describe('render', () => {
  describe('checked', () => {
    test('true', () => {
      const handleChange = jest.fn()
      const wrapper = shallow(
        <Checkbox
          checked
          handleChange={handleChange}
          tabIndex={0}
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
          tabIndex={0}
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
        tabIndex={0}
      />
    )

    expect(wrapper.find('.checkbox').hasClass('disabled')).toBe(true)
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
        tabIndex={0}
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
        tabIndex={0}
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
        tabIndex={0}
      />
    )

    wrapper.find('.checkbox').simulate('keypress', {
      key: ' '
    })
    expect(handleChange).not.toHaveBeenCalled()
  })
})
describe('handleClick', () => {
  test('event.target === event.currentTarget', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        tabIndex={0}
      />
    )
    const currentTarget = {}

    wrapper.find('.checkbox').simulate('click', {
      currentTarget,
      target: currentTarget
    })
    expect(handleChange).toHaveBeenCalled()
  })
  test('event.target !== event.currentTarget', () => {
    const handleChange = jest.fn()
    const wrapper = shallow(
      <Checkbox
        checked
        handleChange={handleChange}
        tabIndex={0}
      />
    )
    const currentTarget = {}
    const target = {}

    wrapper.find('.checkbox').simulate('click', {
      currentTarget,
      target
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
        tabIndex={0}
      />
    )
    const currentTarget = {}

    wrapper.find('.checkbox').simulate('click', {
      currentTarget,
      target: currentTarget
    })
    expect(handleChange).not.toHaveBeenCalled()
  })
})
