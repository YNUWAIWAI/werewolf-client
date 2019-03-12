import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import Modal from '../components/organisms/Modal'
import ModalContainer from './ModalContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ModalContainer />', () => {
  describe('render', () => {
    test('visible', () => {
      const store = fakeStore({
        modal: {
          descriptionId: '@dummy',
          type: 'type',
          values: {
            name: 'Alice',
            token: '3F2504E0-4F89-11D3-9A0C-0305E82C3300'
          },
          visible: true
        }
      })
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ModalContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
    test('hidden', () => {
      const store = fakeStore({
        modal: {
          descriptionId: '@dummy',
          type: 'type',
          values: {
            name: '',
            token: ''
          },
          visible: false
        }
      })
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ModalContainer />
          </IntlProviderContainer>
        </Provider>
      )

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
  test('handleClickNo', () => {
    const store = fakeStore({
      modal: {
        descriptionId: '@dummy',
        type: 'type',
        values: {
          name: '',
          token: ''
        },
        visible: false
      }
    })
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ModalContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(Modal).props().handleClickNo()
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.global.SELECT_NO
    })
  })
  describe('handleClickYes', () => {
    test('KICK_OUT_PLAYER', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ModalContainer />
          </IntlProviderContainer>
        </Provider>
      )

      wrapper.find(Modal).props().handleClickYes(ActionTypes.global.KICK_OUT_PLAYER)
      expect(dispatch).toHaveBeenCalledTimes(2)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.global.SELECT_YES
      })
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.global.KICK_OUT_PLAYER
      })
    })
    test('default', () => {
      const store = fakeStore()
      const dispatch = jest.fn()

      store.dispatch = dispatch
      const wrapper = mount(
        <Provider store={store} >
          <IntlProviderContainer>
            <ModalContainer />
          </IntlProviderContainer>
        </Provider>
      )

      wrapper.find(Modal).props().handleClickYes('ACTION')
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith({
        type: ActionTypes.global.SELECT_YES
      })
    })
  })
})
