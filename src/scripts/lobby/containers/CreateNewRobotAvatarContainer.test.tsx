import * as React from 'react'
import {CreateNewRobotAvatarContainer} from './CreateNewRobotAvatarContainer'
import {IntlProviderContainer} from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('render', () => {
  const store = fakeStore()
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <CreateNewRobotAvatarContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
