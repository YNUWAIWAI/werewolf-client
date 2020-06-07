import * as React from 'react'
import {AvatarImageSelect} from './AvatarImageSelect'
import {Confirmation} from './Confirmation'
import {Modal} from './Modal'
import {Provider} from 'react-redux'
import {SupportSelect} from './SupportSelect'
import fakeStore from '../../containers/fakeStore'
import {getMessages} from '../../i18n'
import {initRenderer} from '../../tools'
import {lobby} from '../../types'

const store = fakeStore()
const {mountWithIntl} = initRenderer(lobby.Language.en, getMessages(lobby.Language.en))

describe('render', () => {
  describe('visible', () => {
    test('avatarImageSelect', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <Modal
            type={lobby.ModalType.avatarImageSelect}
            visible
          />
        </Provider>
      )

      expect(wrapper.find(AvatarImageSelect).exists()).toBe(true)
    })
    test('confirmation', () => {
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
    test('supportSelect', () => {
      const wrapper = mountWithIntl(
        <Provider store={store}>
          <Modal
            type={lobby.ModalType.supportSelect}
            visible
          />
        </Provider>
      )

      expect(wrapper.find(SupportSelect).exists()).toBe(true)
    })
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
