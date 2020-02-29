import * as React from 'react'
import Confirmation from './Confirmation'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const store = fakeStore()
const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

test('render', () => {
  const handleClickNoMockFn = jest.fn()
  const handleClickYesMockFn = jest.fn()
  const values = {
    name: 'Alice',
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  }
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Confirmation
        descriptionId="@dummy"
        handleClickNo={handleClickNoMockFn}
        handleClickYes={handleClickYesMockFn}
        type="type"
        values={values}
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
test('handleClickNo', () => {
  const handleClickNo = jest.fn()
  const handleClickYes = jest.fn()
  const values = {
    name: 'Alice',
    token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
  }
  const wrapper = mountWithIntl(
    <Provider store={store}>
      <Confirmation
        descriptionId="@dummy"
        handleClickNo={handleClickNo}
        handleClickYes={handleClickYes}
        type="type"
        values={values}
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
      <Confirmation
        descriptionId="@dummy"
        handleClickNo={handleClickNo}
        handleClickYes={handleClickYes}
        type="type"
        values={values}
      />
    </Provider>
  )

  wrapper.find('.lo--modal--button.yes').simulate('click')
  expect(handleClickNo).toHaveBeenCalledTimes(0)
  expect(handleClickYes).toHaveBeenCalledTimes(1)
  expect(handleClickYes).toHaveBeenCalledWith('type')
})

