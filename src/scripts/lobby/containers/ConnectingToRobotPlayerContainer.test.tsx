import * as React from 'react'
import ConnectingToRobotPlayerContainer from './ConnectingToRobotPlayerContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<ConnectingToRobotPlayerContainer />', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store}>
      <IntlProviderContainer>
        <ConnectingToRobotPlayerContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
