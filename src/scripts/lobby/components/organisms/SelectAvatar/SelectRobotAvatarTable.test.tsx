import * as React from 'react'
import {SelectRobotAvatarTable} from './SelectRobotAvatarTable'
import {SelectRobotAvatarTableBodyContainer} from '../../../containers/SelectRobotAvatarTableBodyContainer'
import {SelectRobotAvatarTableHeader} from '../../molecules/SelectAvatar/SelectRobotAvatarTableHeader'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <SelectRobotAvatarTable />
  )

  expect(wrapper.find(SelectRobotAvatarTableBodyContainer)).toHaveLength(1)
  expect(wrapper.find(SelectRobotAvatarTableHeader)).toHaveLength(1)
})
