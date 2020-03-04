import * as React from 'react'
import Theme from './Theme'
import {shallow} from 'enzyme'
import {village} from '../../types'

test('render', () => {
  const wrapper = shallow(
    <Theme
      theme={village.Theme.dark}
    >
      <div className="child" />
    </Theme>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
