import * as React from 'react'
import {IntlProviderContainer} from './IntlProviderContainer'
import {ModalContainer} from './ModalContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'

describe('<ModalContainer />', () => {
  describe('render', () => {
    test('visible', () => {
      const store = fakeStore({
        modal: {
          type: lobby.ModalType.confirmation,
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
          type: lobby.ModalType.confirmation,
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
})
