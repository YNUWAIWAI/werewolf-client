import * as React from 'react'
import CommandGraveContainer from './CommandGraveContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<CommandGraveContainer />', () => {
  const store = fakeStore(
    {
      language: 'ja'
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CommandGraveContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})