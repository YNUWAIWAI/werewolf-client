import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import ModalContainer from './ModalContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ModalContainer />', () => {
  test('visible', () => {
    const store = fakeStore({
      modal: {
        descriptionId: '@dummy',
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
