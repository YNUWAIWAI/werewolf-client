// @flow
import Modal from './Modal'
import React from 'react'
import {shallow} from 'enzyme'

test('<Modal id={1} image="image" name="name" text="text" visible />', () => {
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
      visible
    />
  )

  expect(wrapper.find('AgentIcon').exists()).toBe(true)
  expect(wrapper.find('Description').exists()).toBe(true)
  expect(wrapper.find('.modal--button')).toHaveLength(2)
  expect(wrapper.find('.modal--button').filter('[value="yes"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="yes"]')
      .text()
  ).toBe('はい')
  expect(wrapper.find('.modal--button').filter('[value="no"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="no"]')
      .text()
  ).toBe('いいえ')
  expect(handleClickNoMockFn).toHaveBeenCalledTimes(0)
  expect(handleClickYesMockFn).toHaveBeenCalledTimes(0)
})
test('<Modal visible={false} />', () => {
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
      visible={false}
    />
  )

  expect(wrapper.find('.modal').exists()).toBe(false)
})
test('<Modal id={1} image="image" name="name" text="text" visible /> handleClickNo', () => {
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
      visible
    />
  )

  expect(wrapper.find('.modal--button')).toHaveLength(2)
  expect(wrapper.find('.modal--button').filter('[value="yes"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="yes"]')
      .text()
  ).toBe('はい')
  expect(wrapper.find('.modal--button').filter('[value="no"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="no"]')
      .text()
  ).toBe('いいえ')
  wrapper.find('.modal--button[value="no"]').simulate('click')
  expect(handleClickNoMockFn).toHaveBeenCalledTimes(1)
  expect(handleClickYesMockFn).toHaveBeenCalledTimes(0)
  expect(handleClickNoMockFn).toHaveBeenCalledWith()
  expect(wrapper.find('.modal--button')).toHaveLength(2)
  expect(wrapper.find('.modal--button').filter('[value="yes"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="yes"]')
      .text()
  ).toBe('はい')
  expect(wrapper.find('.modal--button').filter('[value="no"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="no"]')
      .text()
  ).toBe('いいえ')
})
test('<Modal id={1} image="image" name="name" text="text" visible /> handleClickYes', () => {
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
      visible
    />
  )

  expect(wrapper.find('.modal--button')).toHaveLength(2)
  expect(wrapper.find('.modal--button').filter('[value="yes"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="yes"]')
      .text()
  ).toBe('はい')
  expect(wrapper.find('.modal--button').filter('[value="no"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="no"]')
      .text()
  ).toBe('いいえ')
  wrapper.find('.modal--button[value="yes"]').simulate('click')
  expect(handleClickNoMockFn).toHaveBeenCalledTimes(0)
  expect(handleClickYesMockFn).toHaveBeenCalledTimes(1)
  expect(handleClickYesMockFn).toHaveBeenCalledWith(1)
  expect(wrapper.find('.modal--button')).toHaveLength(2)
  expect(wrapper.find('.modal--button').filter('[value="yes"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="yes"]')
      .text()
  ).toBe('はい')
  expect(wrapper.find('.modal--button').filter('[value="no"]')).toHaveLength(1)
  expect(
    wrapper
      .find('.modal--button')
      .filter('[value="no"]')
      .text()
  ).toBe('いいえ')
})
