import * as React from 'react'
import Modal from './Modal'
import {getMessages} from '../../../../i18n/village'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(village.Language.ja, getMessages(village.Language.ja))

describe('<Modal />', () => {
  test('visible', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Modal
        descriptionId="Modal.Description.dayVote"
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
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
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Modal
        descriptionId="Modal.Description.dayVote"
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
        visible={false}
      />
    )

    expect(wrapper.find('.modal').hasClass('hidden')).toBe(true)
  })
  test('handleClickNo', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Modal
        descriptionId="Modal.Description.dayVote"
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
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
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Modal
        descriptionId="Modal.Description.dayVote"
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        id={1}
        image="image"
        name="name"
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
