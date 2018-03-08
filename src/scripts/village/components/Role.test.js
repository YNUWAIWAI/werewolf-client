import React from 'react'
import Role from './Role'
import {shallow} from 'enzyme'

test('<Role />', () => {
  const wrapper = shallow(<Role role="人狼" />)

  expect(wrapper.find('RoleIcon')).toHaveLength(1)
  expect(wrapper.find('RoleText')).toHaveLength(1)
})
