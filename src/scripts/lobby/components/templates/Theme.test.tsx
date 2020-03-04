import * as React from 'react'
import Theme from './Theme'
import {lobby} from '../../types'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <Theme
      theme={lobby.Theme.dark}
    >
      <div className="child" />
    </Theme>
  )

  expect(wrapper.html()).toMatchSnapshot()
})
