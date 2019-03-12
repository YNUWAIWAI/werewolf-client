import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import LobbyForHumanPlayer from '../components/templates/LobbyForHumanPlayer'
import LobbyForHumanPlayerContainer from './LobbyForHumanPlayerContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<LobbyForHumanPlayerContainer />', () => {
  test('render', () => {
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
  test('transition', () => {
    const store = fakeStore()
    const dispatch = jest.fn()

    store.dispatch = dispatch
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <LobbyForHumanPlayerContainer />
        </IntlProviderContainer>
      </Provider>
    )

    wrapper.find(LobbyForHumanPlayer).props().transition(ActionTypes.Target.SHOW_BUILD_VILLAGE)
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.Target.SHOW_BUILD_VILLAGE
    })
  })
})
