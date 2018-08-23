// @flow
import AdvancedSearchBox from './AdvancedSearchBox'
import React from 'react'
import {shallow} from 'enzyme'

test('<AdvancedSearchBox />', () => {
  const checked = {
    avatar: true,
    comment: false,
    hostName: false,
    maximum: false,
    minimum: false,
    villageName: false
  }
  const handleAvatarChange = jest.fn()
  const handleCheckboxChange = jest.fn()
  const handleTextChange = jest.fn()
  const wrapper = shallow(
    <AdvancedSearchBox
      checked={checked}
      handleAvatarChange={handleAvatarChange}
      handleCheckboxChange={handleCheckboxChange}
      handleTextChange={handleTextChange}
    />
  )

  expect(wrapper.children()).toHaveLength(6)
})
