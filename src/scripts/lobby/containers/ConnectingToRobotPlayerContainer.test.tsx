import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import ConnectingToRobotPlayer from '../components/templates/ConnectingToRobotPlayer'
import ConnectingToRobotPlayerContainer from './ConnectingToRobotPlayerContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ConnectingToRobotPlayerContainer />', () => {
  test('render', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store}>
        <IntlProviderContainer>
          <ConnectingToRobotPlayerContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
