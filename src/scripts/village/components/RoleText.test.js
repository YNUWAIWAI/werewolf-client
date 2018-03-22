// @flow
import React from 'react'
import RoleText from './RoleText'
import {shallow} from 'enzyme'

test('<RoleText role="人狼" />', () => {
  const wrapper = shallow(<RoleText role="人狼" />)

  expect(wrapper.text()).toBe('あなたは人狼です')
})
test('<RoleText role="" />', () => {
  const wrapper = shallow(<RoleText role="" />)

  expect(wrapper.text()).toBe('あなたはです')
})
test('<RoleText role={undefined} />', () => {
  const wrapper = shallow(<RoleText />)

  expect(wrapper.text()).toBe('あなたはです')
})
