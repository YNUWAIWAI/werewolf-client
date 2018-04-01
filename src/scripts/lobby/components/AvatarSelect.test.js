// @flow
import AvatarSelect from './AvatarSelect'
import React from 'react'
import {shallow} from 'enzyme'

test('<AvatarSelect />', () => {
  const handleChange = jest.fn()
  const wrapper = shallow(
    <AvatarSelect
      handleChange={handleChange}
    />
  )

  expect(wrapper.find('option')).toHaveLength(2)
  expect(handleChange).toHaveBeenCalledTimes(0)
})
test('<AvatarSelect /> onChange', () => {
  const handleChange = jest.fn()
  const wrapper = shallow(
    <AvatarSelect
      handleChange={handleChange}
    />
  )

  wrapper.find('select').simulate('change', {
    target: {
      value: 'fixed'
    }
  })
  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith('fixed')
})
