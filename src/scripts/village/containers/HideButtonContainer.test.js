// @flow
import HideButtonContainer from './HideButtonContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

test('<HideButtonContainer />', () => {
  const store = fakeStore(
    {
      hideButton: {
        hide: true
      }
    }
  )
  const wrapper = mount(
    <Provider store={store} >
      <IntlProviderContainer>
        <HideButtonContainer />
      </IntlProviderContainer>
    </Provider>
  )

  expect(wrapper.find('.hide-button--button').hasClass('hide')).toBe(true)
  expect(wrapper.html()).toMatchSnapshot()
})
