import * as React from 'react'
import ActivityContainer from './ActivityContainer'
import IntlProviderContainer from './IntlProviderContainer'
import {Provider} from 'react-redux'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ActivityContainer />', () => {
  test('expand: false', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <IntlProviderContainer>
          <ActivityContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find('.vi--activity').hasClass('expand')).toBe(false)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('expand: true', () => {
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
          <ActivityContainer />
        </IntlProviderContainer>
      </Provider>
    )

    expect(wrapper.find('.vi--activity').hasClass('expand')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

