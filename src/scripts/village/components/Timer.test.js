// @flow
import React from 'react'
import Timer from './Timer'
import {shallow} from 'enzyme'

test('<Timer limit={10} phase="" />', () => {
  const wrapper = shallow(<Timer limit={10} phase="night" />)

  expect(wrapper.find('FormattedTime')).toHaveLength(1)
  expect(wrapper.state().time).toBe(0)
  expect(wrapper.state().start).toBe(-1)
})
