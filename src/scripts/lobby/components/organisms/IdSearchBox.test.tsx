import * as React from 'react'
import IdSearchBox from './IdSearchBox'
import {shallow} from 'enzyme'

test('<IdSearchBox />', () => {
  const handleSearchIdChange = jest.fn()
  const handleValidityChange = jest.fn()
  const wrapper = shallow(
    <IdSearchBox
      handleSearchIdChange={handleSearchIdChange}
      handleValidityChange={handleValidityChange}
      max={3}
    />
  )

  expect(wrapper.children()).toHaveLength(3)
})
