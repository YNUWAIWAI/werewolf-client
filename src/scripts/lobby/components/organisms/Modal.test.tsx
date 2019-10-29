import * as React from 'react'
import Modal from './Modal'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const store = fakeStore()
const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  test('visible', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const values = {
      name: 'Alice',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    }
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          descriptionId="@dummy"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          type="type"
          values={values}
          visible
        />
      </Provider>
    )

    expect(wrapper.find('.lo--modal--button')).toHaveLength(2)
    expect(wrapper.find('.lo--modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.lo--modal--button.yes').text()).toBe('Yes')
    expect(wrapper.find('.lo--modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.lo--modal--button.no').text()).toBe('No')
    expect(handleClickNoMockFn).toHaveBeenCalledTimes(0)
    expect(handleClickYesMockFn).toHaveBeenCalledTimes(0)
  })
  test('visible={false}', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const values = {
      name: 'Alice',
      token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
    }
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          descriptionId="@dummy"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          type="type"
          values={values}
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
  const values = {
    name: 'Alice',
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  }
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Modal
        descriptionId="@dummy"
        handleClickNo={handleClickNo}
        handleClickYes={handleClickYes}
        type="type"
        values={values}
        visible
      />
    </Provider>
  )

  wrapper.find('.lo--modal--button.no').simulate('click')
  expect(handleClickNo).toHaveBeenCalledTimes(1)
  expect(handleClickYes).toHaveBeenCalledTimes(0)
})
test('handleClickYes', () => {
  const handleClickNo = jest.fn()
  const handleClickYes = jest.fn()
  const values = {
    name: 'Alice',
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  }
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Modal
        descriptionId="@dummy"
        handleClickNo={handleClickNo}
        handleClickYes={handleClickYes}
        type="type"
        values={values}
        visible
      />
    </Provider>
  )

  wrapper.find('.lo--modal--button.yes').simulate('click')
  expect(handleClickNo).toHaveBeenCalledTimes(0)
  expect(handleClickYes).toHaveBeenCalledTimes(1)
  expect(handleClickYes).toHaveBeenCalledWith('type')
})

