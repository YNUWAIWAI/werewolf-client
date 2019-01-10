// @flow
import IntlProviderContainer from './IntlProviderContainer'
import LobbyForHumanPlayerContainer from './LobbyForHumanPlayerContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<LobbyForHumanPlayerContainer />', () => {
  const transition = jest.fn()
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <LobbyForHumanPlayerContainer transition={transition} />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
