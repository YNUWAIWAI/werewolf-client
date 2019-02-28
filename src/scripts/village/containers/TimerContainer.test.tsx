import * as React from 'react'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import TimerContainer from './TimerContainer'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<TimerContainer />', () => {
  test('initialState', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <TimerContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('morning', () => {
    const store = fakeStore({
      timer: {
        phaseStartTime: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
        phaseTimeLimit: 600000,
        start: new Date('2006-10-07T12:06:56.568+09:00').getTime(),
        time: 10000
      }
    })
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <TimerContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.html()).toMatchSnapshot()
  })
})
