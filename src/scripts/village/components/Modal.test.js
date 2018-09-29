// @flow
import Modal from './Modal'
import React from 'react'
import {shallow} from 'enzyme'

describe('<Modal />', () => {
  test('visible', () => {
    const timer = {
      limit: 10,
      phase: 'night'
    }
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = shallow(
      <Modal
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
        text="text"
        timer={timer}
        visible
      />
    )

    expect(wrapper.find('AgentIcon').exists()).toBe(true)
    expect(wrapper.find('Description').exists()).toBe(true)
    expect(wrapper.find('.modal--button')).toHaveLength(2)
    expect(wrapper.find('.modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.modal--button.yes').text()).toBe('はい')
    expect(wrapper.find('.modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.modal--button.no').text()).toBe('いいえ')
    expect(handleClickNoMockFn).toHaveBeenCalledTimes(0)
    expect(handleClickYesMockFn).toHaveBeenCalledTimes(0)
  })
  test('visible={false}', () => {
    const timer = {
      limit: 10,
      phase: 'night'
    }
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = shallow(
      <Modal
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
        text="text"
        timer={timer}
        visible={false}
      />
    )

    expect(wrapper.find('.modal').exists()).toBe(false)
  })
  test('handleClickNo', () => {
    const timer = {
      limit: 10,
      phase: 'night'
    }
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = shallow(
      <Modal
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
        text="text"
        timer={timer}
        visible
      />
    )

    expect(wrapper.find('.modal--button')).toHaveLength(2)
    expect(wrapper.find('.modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.modal--button.yes').text()).toBe('はい')
    expect(wrapper.find('.modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.modal--button.no').text()).toBe('いいえ')
    wrapper.find('.modal--button.no').simulate('click')
    expect(handleClickNoMockFn).toHaveBeenCalledTimes(1)
    expect(handleClickYesMockFn).toHaveBeenCalledTimes(0)
    expect(handleClickNoMockFn).toHaveBeenCalledWith()
    expect(wrapper.find('.modal--button')).toHaveLength(2)
    expect(wrapper.find('.modal--button.yes')).toHaveLength(1)
    expect(wrapper.find('.modal--button.yes').text()).toBe('はい')
    expect(wrapper.find('.modal--button.no')).toHaveLength(1)
    expect(wrapper.find('.modal--button.no').text()).toBe('いいえ')
  })
  test('handleClickYes', () => {
    const timer = {
      limit: 10,
      phase: 'night'
    }
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = shallow(
      <Modal
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
        text="text"
        timer={timer}
        visible
      />
    )

    expect(wrapper.find('.modal--button')).toHaveLength(2)
    expect(wrapper.find('.modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.modal--button.yes').text()).toBe('はい')
    expect(wrapper.find('.modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.modal--button.no').text()).toBe('いいえ')
    wrapper.find('.modal--button.yes').simulate('click')
    expect(handleClickNoMockFn).toHaveBeenCalledTimes(0)
    expect(handleClickYesMockFn).toHaveBeenCalledTimes(1)
    expect(handleClickYesMockFn).toHaveBeenCalledWith(1)
    expect(wrapper.find('.modal--button')).toHaveLength(2)
    expect(wrapper.find('.modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.modal--button.yes').text()).toBe('はい')
    expect(wrapper.find('.modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.modal--button.no').text()).toBe('いいえ')
  })
})
