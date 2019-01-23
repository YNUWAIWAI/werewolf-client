import * as React from 'react'
import InfoDayContainer from './InfoDayContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {MORNING} from '../constants/Phase'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<InfoDayContainer />', () => {
  const store = fakeStore(
    {
      base: {
        date: 1,
        phase: MORNING,
        phaseTimeLimit: 100
      }
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <InfoDayContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
