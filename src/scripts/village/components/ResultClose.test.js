// @flow
import React from 'react'
import ResultClose from './ResultClose'
import {shallow} from 'enzyme'

test('<ResultClose class="class" text="text" />', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(<ResultClose handleClick={handleClick} />)

  expect(handleClick).toHaveBeenCalledTimes(0)
  expect(wrapper.exists()).toBe(true)
})
