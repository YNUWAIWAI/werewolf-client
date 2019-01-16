import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import LobbyForAudienceContainer from './LobbyForAudienceContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<LobbyForAudienceContainer />', () => {
  const transition = jest.fn()
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <LobbyForAudienceContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
