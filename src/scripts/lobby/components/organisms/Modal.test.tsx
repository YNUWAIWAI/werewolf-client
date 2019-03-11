/* global lobby */
import * as React from 'react'
import Modal from './Modal'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const store = fakeStore()
const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

describe('render', () => {
  test('visible', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          descriptionId="@dummy"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          visible
        />
      </Provider>
    )

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
      <Provider store={store}>
        <Modal
          descriptionId="@dummy"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          visible={false}
        />
      </Provider>
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
test('handleClickNo', () => {
  const handleClickNo = jest.fn()
  const handleClickYes = jest.fn()
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Modal
        descriptionId="@dummy"
        handleClickNo={handleClickNo}
        handleClickYes={handleClickYes}
        visible
      />
    </Provider>
  )

  wrapper.find('.modal--button.no').simulate('click')
  expect(handleClickNo).toHaveBeenCalledTimes(1)
  expect(handleClickYes).toHaveBeenCalledTimes(0)
})
test('handleClickYes', () => {
  const handleClickNo = jest.fn()
  const handleClickYes = jest.fn()
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Modal
        descriptionId="@dummy"
        handleClickNo={handleClickNo}
        handleClickYes={handleClickYes}
        visible
      />
    </Provider>
  )

  wrapper.find('.modal--button.yes').simulate('click')
  expect(handleClickNo).toHaveBeenCalledTimes(0)
  expect(handleClickYes).toHaveBeenCalledTimes(1)
})

