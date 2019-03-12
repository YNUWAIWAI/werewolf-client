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
  test('transition', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ConnectingToRobotPlayerContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(ConnectingToRobotPlayer).props().transition(ActionTypes.Target.SHOW_MAIN)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.SHOW_MAIN
    })
  })
})
