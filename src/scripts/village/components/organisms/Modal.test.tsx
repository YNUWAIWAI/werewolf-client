import * as React from 'react'
import * as village from '../../types'
import Modal from './Modal'
import {Provider} from 'react-redux'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'

const store = fakeStore()
const {mountWithIntl} = initRenderer(village.Language.en, getMessages(village.Language.en))

describe('<Modal />', () => {
  test('visible', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          descriptionId="Modal.Description.dayVote"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          id="1"
          image="image"
          initial="A"
          name="Adil"
          visible
        />
      </Provider>
    )

    expect(wrapper.find('AgentIcon').exists()).toBe(true)
    expect(wrapper.find('Description').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button')).toHaveLength(2)
    expect(wrapper.find('.vi--modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.yes').text()).toBe('Yes')
    expect(wrapper.find('.vi--modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.no').text()).toBe('No')
    expect(handleClickNoMockFn).toHaveBeenCalledTimes(0)
    expect(handleClickYesMockFn).toHaveBeenCalledTimes(0)
  })
  test('visible={false}', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          descriptionId="Modal.Description.dayVote"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          id="1"
          image="image"
          initial="A"
          name="Adil"
          visible={false}
        />
      </Provider>
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
  test('handleClickNo', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          descriptionId="Modal.Description.dayVote"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          id="1"
          image="image"
          initial="A"
          name="Adil"
          visible
        />
      </Provider>
    )

    expect(wrapper.find('.vi--modal--button')).toHaveLength(2)
    expect(wrapper.find('.vi--modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.yes').text()).toBe('Yes')
    expect(wrapper.find('.vi--modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.no').text()).toBe('No')
    wrapper.find('.vi--modal--button.no').simulate('click')
    expect(handleClickNoMockFn).toHaveBeenCalledTimes(1)
    expect(handleClickYesMockFn).toHaveBeenCalledTimes(0)
    expect(handleClickNoMockFn).toHaveBeenCalledWith()
    expect(wrapper.find('.vi--modal--button')).toHaveLength(2)
    expect(wrapper.find('.vi--modal--button.yes')).toHaveLength(1)
    expect(wrapper.find('.vi--modal--button.yes').text()).toBe('Yes')
    expect(wrapper.find('.vi--modal--button.no')).toHaveLength(1)
    expect(wrapper.find('.vi--modal--button.no').text()).toBe('No')
  })
  test('handleClickYes', () => {
    const handleClickNoMockFn = jest.fn()
    const handleClickYesMockFn = jest.fn()
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          descriptionId="Modal.Description.dayVote"
          handleClickNo={handleClickNoMockFn}
          handleClickYes={handleClickYesMockFn}
          id="1"
          image="image"
          initial="A"
          name="Adil"
          visible
        />
      </Provider>
    )

    expect(wrapper.find('.vi--modal--button')).toHaveLength(2)
    expect(wrapper.find('.vi--modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.yes').text()).toBe('Yes')
    expect(wrapper.find('.vi--modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.no').text()).toBe('No')
    wrapper.find('.vi--modal--button.yes').simulate('click')
    expect(handleClickNoMockFn).toHaveBeenCalledTimes(0)
    expect(handleClickYesMockFn).toHaveBeenCalledTimes(1)
    expect(handleClickYesMockFn).toHaveBeenCalledWith('1')
    expect(wrapper.find('.vi--modal--button')).toHaveLength(2)
    expect(wrapper.find('.vi--modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.yes').text()).toBe('Yes')
    expect(wrapper.find('.vi--modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.vi--modal--button.no').text()).toBe('No')
  })
})
