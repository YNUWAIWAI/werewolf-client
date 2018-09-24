// @flow
import IdSearchBox from './IdSearchBox'
import React from 'react'
import {shallow} from 'enzyme'

test('<IdSearchBox />', () => {
  const handleSearchIdChange = jest.fn()
  const handleValidityChange = jest.fn()
  const wrapper = shallow(
    <IdSearchBox
      handleSearchIdChange={handleSearchIdChange}
      handleValidityChange={handleValidityChange}
      numberOfDigit={3}
      placeholder="3 digits"
    />
  )

  expect(wrapper.children()).toHaveLength(3)
})
