// @flow
import ConnectingToRobotPlayerContainer from './ConnectingToRobotPlayerContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<ConnectingToRobotPlayerContainer /> initialState', () => {
  const transition = jest.fn()
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <ConnectingToRobotPlayerContainer transition={transition} />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
