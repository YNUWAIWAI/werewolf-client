import * as React from 'react'
import {CreateNewRobotAvatar} from './CreateNewRobotAvatar'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <CreateNewRobotAvatar
      command={[]}
      menuItems={[]}
    />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
