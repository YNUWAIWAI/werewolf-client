// @flow
import AdvancedSearchProp from './AdvancedSearchProp'
import React from 'react'
import {shallow} from 'enzyme'

test('<AdvancedSearchProp />', () => {
  const handleClick = jest.fn()
  const wrapper = shallow(
    <AdvancedSearchProp
      checked
      handleClick={handleClick}
      label="Village Name"
      name="villageName"
      validity
    />
  )

  expect(wrapper.children()).toHaveLength(2)
  expect(wrapper.find('input').exists()).toBe(true)
  expect(wrapper.find('label').exists()).toBe(true)
})
