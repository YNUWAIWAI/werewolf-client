import * as ActionTypes from '../constants/ActionTypes'
import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import MuteButton from '../components/atoms/MuteButton'
import MuteButtonContainer from './MuteButtonContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('render', () => {
  test('muted', () => {
    const store = fakeStore({
      sound: {
        muted: true,
        volume: 1
      }
    })
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <MuteButtonContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('unmuted', () => {
    const store = fakeStore({
      sound: {
        muted: false,
        volume: 1
      }
    })
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <MuteButtonContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
test('handleClick', () => {
  const store = fakeStore({
    sound: {
      muted: false,
      volume: 1
    }
  })
  const dispatch = jest.fn()

  store.dispatch = dispatch
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <MuteButtonContainer />
      </IntlProviderContainer>
    </Provider>
  )

  wrapper.find(MuteButton).props().handleClick(true)
  expect(dispatch).toHaveBeenCalledTimes(1)
  expect(dispatch).toHaveBeenCalledWith({
    muted: true,
    type: ActionTypes.App.TOGGLE_MUTE
  })
})
