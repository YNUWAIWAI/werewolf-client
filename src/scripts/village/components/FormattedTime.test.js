import FormattedTime from './FormattedTime'
import React from 'react'
import {shallow} from 'enzyme'

test('30 => 残り00\'30', () => {
  const wrapper = shallow(<FormattedTime id="timer" time={30} />)

  expect(wrapper.find('#timer')).toHaveLength(1)
  expect(wrapper.text()).toBe('残り00\'30')
})
