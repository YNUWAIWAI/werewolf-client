import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import MainContainer from './MainContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<MainContainer />', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <MainContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
