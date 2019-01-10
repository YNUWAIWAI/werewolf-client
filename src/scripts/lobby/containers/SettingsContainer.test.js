// @flow
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import SettingsContainer from './SettingsContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<SettingsContainer />', () => {
  const transition = jest.fn()
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <SettingsContainer transition={transition} />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
