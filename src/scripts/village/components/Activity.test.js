// @flow
import Activity from './Activity'
import React from 'react'
import {shallow} from 'enzyme'

test('<Activity expand />', () => {
  const wrapper = shallow(<Activity expand />)

  expect(wrapper.find('.activity-container').hasClass('expand')).toBe(true)
})
test('<Activity expand={false} />', () => {
  const wrapper = shallow(<Activity expand={false} />)

  expect(wrapper.find('.activity-container').hasClass('expand')).toBe(false)
})
