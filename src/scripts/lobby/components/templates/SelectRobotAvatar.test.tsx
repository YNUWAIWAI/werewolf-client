import * as React from 'react'
import {SelectRobotAvatar} from './SelectRobotAvatar'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <SelectRobotAvatar
      command={[]}
      menuItems={[]}
    />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
