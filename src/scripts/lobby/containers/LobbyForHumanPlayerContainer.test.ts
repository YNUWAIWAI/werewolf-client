import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import LobbyForHumanPlayerContainer from './LobbyForHumanPlayerContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<LobbyForHumanPlayerContainer />', () => {
  const transition = jest.fn()
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <LobbyForHumanPlayerContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
