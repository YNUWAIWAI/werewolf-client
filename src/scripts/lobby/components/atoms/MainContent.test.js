// @flow
import MainContent from './MainContent'
import React from 'react'
import {shallow} from 'enzyme'

test('<MainContent />', () => {
  const wrapper = shallow(<MainContent />)

  expect(wrapper.children()).toHaveLength(0)
})
test('<MainContent><div /></MainContent>', () => {
  const wrapper = shallow(
    <MainContent>
      <div />
    </MainContent>)

  expect(wrapper.children()).toHaveLength(1)
})
