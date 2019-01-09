// @flow
import ActivityContainer from './ActivityContainer'
import {Provider} from 'react-redux'
import React from 'react'
import fakeStore from './fakeStore'
import {mount} from 'enzyme'

describe('<ActivityContainer />', () => {
  test('expand: false', () => {
    const store = fakeStore()
    const wrapper = mount(
      <Provider store={store} >
        <ActivityContainer />
      </Provider>
    )

    expect(wrapper.find('.activity').hasClass('expand')).toBe(false)
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
        <ActivityContainer />
      </Provider>
    )

    expect(wrapper.find('.activity').hasClass('expand')).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })
})

