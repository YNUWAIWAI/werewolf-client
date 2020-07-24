import * as React from 'react'
import {Sponsor} from './Sponsor'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Sponsor />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
