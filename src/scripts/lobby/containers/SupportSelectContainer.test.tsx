import * as React from 'react'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import {SupportSelect} from '../components/organisms/SupportSelect'
import {SupportSelectContainer} from './SupportSelectContainer'
import fakeStore from './fakeStore'
import {lobby} from '../types'
import {mount} from 'enzyme'
import {supportSelect} from '../actions'

test('render', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <SupportSelectContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
test('handleCloseButtonClick', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <SupportSelectContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(SupportSelect).props().handleCloseButtonClick()
  expect(dispatch).toHaveBeenCalledWith(supportSelect.closeModal())
})
test('handleSelect', () => {
  const store = fakeStore()
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <SupportSelectContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(SupportSelect).props().handleSelect('15')(lobby.Member.A)(true)
  expect(dispatch).toHaveBeenCalledWith(supportSelect.changeCheckbox('15')(lobby.Member.A)(true))
})
