// @flow
import React from 'react'
import Timer from './Timer'
import {shallow} from 'enzyme'

test('<Timer />', () => {
  const wrapper = shallow(<Timer />)

  expect(wrapper.find('FormattedTime')).toHaveLength(1)
  expect(wrapper.state().time).toBe(0)
})
test('<Timer /> test tick()', () => {
  const wrapper = shallow(<Timer />)

  expect(wrapper.find('FormattedTime')).toHaveLength(1)
  expect(wrapper.state().time).toBe(0)
  wrapper.setState({
    time: 1
  })
  expect(wrapper.state().time).toBe(1)
  wrapper.instance().tick()
  expect(wrapper.state().time).toBe(0)
  wrapper.instance().tick()
  expect(wrapper.state().time).toBe(0)
})
jest.useFakeTimers()
test('<Timer /> test setInterval', () => {
  const wrapper = shallow(<Timer />)

  expect(wrapper.find('FormattedTime')).toHaveLength(1)
  expect(wrapper.state().time).toBe(0)
  wrapper.setProps({
    limit: 2
  })
  expect(setInterval).toHaveBeenCalledTimes(1)
  expect(setInterval).toHaveBeenLastCalledWith(wrapper.instance().tick, 1000)
  expect(wrapper.state().time).toBe(2)
})
