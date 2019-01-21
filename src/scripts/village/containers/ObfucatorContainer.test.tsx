import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import ObfucatorContainer from './ObfucatorContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<ObfucatorContainer />', () => {
  const store = fakeStore(
    {
      obfucator: {
        loading: true,
        visible: true
      }
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <ObfucatorContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
