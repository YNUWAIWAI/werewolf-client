import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import LobbyForRobotPlayerContainer from './LobbyForRobotPlayerContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<LobbyForRobotPlayerContainer />', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <LobbyForRobotPlayerContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
