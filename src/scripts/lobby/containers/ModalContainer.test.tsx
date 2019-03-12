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
