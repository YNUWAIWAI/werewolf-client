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
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          type={lobby.ModalType.confirmation}
          visible
        />
      </Provider>
    )

    expect(wrapper.find('.lo--modal--button')).toHaveLength(2)
    expect(wrapper.find('.lo--modal--button.yes').exists()).toBe(true)
    expect(wrapper.find('.lo--modal--button.yes').text()).toBe('Yes')
    expect(wrapper.find('.lo--modal--button.no').exists()).toBe(true)
    expect(wrapper.find('.lo--modal--button.no').text()).toBe('No')
  })
  test('visible={false}', () => {
    const wrapper = mountWithIntl(
      <Provider store={store}>
        <Modal
          type={lobby.ModalType.confirmation}
          visible={false}
        />
      </Provider>
    )

    expect(wrapper.isEmptyRender()).toBe(true)
  })
})
