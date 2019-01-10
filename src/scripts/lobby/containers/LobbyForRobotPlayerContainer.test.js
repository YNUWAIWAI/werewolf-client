// @flow
import IntlProviderContainer from './IntlProviderContainer'
import LobbyForRobotPlayerContainer from './LobbyForRobotPlayerContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<LobbyForRobotPlayerContainer /> initialState', () => {
  const transition = jest.fn()
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <LobbyForRobotPlayerContainer transition={transition} />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
