import * as React from 'react'
import {SelectHumanAvatar} from './SelectHumanAvatar'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <SelectHumanAvatar
      command={[]}
      menuItems={[]}
    />
  )

  expect(wrapper.getElement()).toMatchSnapshot()
})
