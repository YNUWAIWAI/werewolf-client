// @flow
import NumberSelect from './NumberSelect'
import React from 'react'
import {shallow} from 'enzyme'

test('<NumberSelect class="class" from={1} to={3} value={2} />', () => {
  const handleChange = jest.fn()
  const wrapper = shallow(
    <NumberSelect
      class="class"
      from={1}
      handleChange={handleChange}
      to={3}
      value={2}
    />
  )

  expect(wrapper.find('select[value=2]').exists()).toBe(true)
  expect(wrapper.find('option')).toHaveLength(3)
  expect(wrapper.find('option').first().text()).toBe('3')
  expect(wrapper.find('option').last().text()).toBe('1')
  expect(handleChange).toHaveBeenCalledTimes(0)
})
test('<NumberSelect class="class" from={1} to={3} value={2} /> onChange', () => {
  const handleChange = jest.fn()
  const wrapper = shallow(
    <NumberSelect
      class="class"
      from={1}
      handleChange={handleChange}
      to={3}
      value={2}
    />
  )

  wrapper.find('select').simulate('change', {
    event: {
      target: 3
    }
  })
  expect(handleChange).toHaveBeenCalledTimes(1)
})
