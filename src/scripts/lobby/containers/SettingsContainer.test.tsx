import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import SettingsContainer from './SettingsContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<SettingsContainer />', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <SettingsContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
