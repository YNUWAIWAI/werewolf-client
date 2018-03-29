// @flow
import AsideContent from './AsideContent'
import React from 'react'
import {shallow} from 'enzyme'

test('<AsideContent />', () => {
  const wrapper = shallow(<AsideContent />)

  expect(wrapper.children()).toHaveLength(0)
})
test('<AsideContent><div /></AsideContent>', () => {
  const wrapper = shallow(
    <AsideContent>
      <div />
    </AsideContent>)

  expect(wrapper.children()).toHaveLength(1)
})
