import * as React from 'react'
import {Link} from './Link'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Link
      className="className"
      href="example.com"
    />
  )

  expect(wrapper.html()).toMatchSnapshot()
})
