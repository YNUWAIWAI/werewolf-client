// @flow
import ChatDelimeter from './ChatDelimeter'
import React from 'react'
import {shallow} from 'enzyme'

test('<ChatDelimeter text="1日目" />', () => {
  const wrapper = shallow(<ChatDelimeter text="1日目" />)

  expect(wrapper.find('.chat--delimeter').text()).toBe('1日目')
})
