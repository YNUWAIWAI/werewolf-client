// @flow
import MenuItem from './MenuItem'
import React from 'react'
import {shallow} from 'enzyme'

describe('<MenuItem />', () => {
  test('default', () => {
    const transition = jest.fn()
    const wrapper = shallow(
      <MenuItem
        className="className"
        text="text"
        transition={transition}
        types={['SHOW_MAIN']}
      />
    )

    expect(wrapper.text()).toBe('text')
    expect(wrapper.hasClass('className')).toBe(true)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('disabled', () => {
    const transition = jest.fn()
    const wrapper = shallow(
      <MenuItem
        className="className"
        disabled
        text="text"
        transition={transition}
        types={['SHOW_MAIN']}
      />
    )

    expect(wrapper.text()).toBe('text')
    expect(wrapper.hasClass('className')).toBe(true)
    expect(wrapper.hasClass('disabled')).toBe(true)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('isLoading', () => {
    const transition = jest.fn()
    const wrapper = shallow(
      <MenuItem
        className="className"
        isLoading
        text="text"
        transition={transition}
        types={['SHOW_MAIN']}
      />
    )

    expect(wrapper.text()).toBe('<Loader />')
    expect(wrapper.hasClass('className')).toBe(true)
    expect(wrapper.hasClass('loader')).toBe(true)
    expect(transition).toHaveBeenCalledTimes(0)
  })
  test('onClick: default', () => {
    const transition = jest.fn()
    const wrapper = shallow(
      <MenuItem
        className="className"
        text="text"
        transition={transition}
        types={['SHOW_MAIN']}
      />
    )

    wrapper.simulate('click')
    expect(transition).toHaveBeenCalledTimes(1)
    expect(transition).toHaveBeenCalledWith('SHOW_MAIN')
  })
  test('onClick: disabled', () => {
    const transition = jest.fn()
    const wrapper = shallow(
      <MenuItem
        className="className"
        disabled
        text="text"
        transition={transition}
        types={['SHOW_MAIN']}
      />
    )

    wrapper.simulate('click')
    expect(transition).toHaveBeenCalledTimes(0)
  })
})
