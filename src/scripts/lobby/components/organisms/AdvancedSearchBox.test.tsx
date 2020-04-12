import * as React from 'react'
import AdvancedSearchBox from './AdvancedSearchBox'
import {shallow} from 'enzyme'

test('render', () => {
  const checked = {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  }
  const validity = {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  }
  const handleAvatarChange = jest.fn()
  const handleCheckboxChange = jest.fn()
  const handleNumberChange = jest.fn()
  const handleTextChange = jest.fn()
  const wrapper = shallow(
    <AdvancedSearchBox
      checked={checked}
      handleAvatarChange={handleAvatarChange}
      handleCheckboxChange={handleCheckboxChange}
      handleNumberChange={handleNumberChange}
      handleTextChange={handleTextChange}
      navigatable
      validity={validity}
    />
  )

  expect(wrapper.find('.lo--advanced-search').children()).toHaveLength(6)
})
