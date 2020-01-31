import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import SelectRobotAvatarContainer from './SelectRobotAvatarContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<SelectRobotAvatarContainer />', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <SelectRobotAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
