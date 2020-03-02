import * as React from 'react'
import Confirmation from './Confirmation'
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

    expect(wrapper.find(Confirmation).exists()).toBe(true)
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
