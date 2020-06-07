import * as React from 'react'
import {CreateNewHumanAvatar} from './CreateNewHumanAvatar'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <CreateNewHumanAvatar
      command={[]}
      menuItems={[]}
    />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
