// @flow
import React from 'react'
import Role from './Role'
import {shallow} from 'enzyme'

test('<Role />', () => {
  const wrapper = shallow(<Role image="" name="" role="人狼" />)

  expect(wrapper.find('AgentIcon')).toHaveLength(1)
  expect(wrapper.find('RoleText')).toHaveLength(1)
})
