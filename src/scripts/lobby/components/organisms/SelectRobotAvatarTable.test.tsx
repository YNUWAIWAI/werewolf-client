import * as React from 'react'
import SelectRobotAvatarTable from './SelectRobotAvatarTable'
import SelectRobotAvatarTableBody from '../../containers/SelectRobotAvatarTableBodyContainer'
import SelectRobotAvatarTableHeader from '../molecules/SelectRobotAvatarTableHeader'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <SelectRobotAvatarTable />
  )

  expect(wrapper.find(SelectRobotAvatarTableBody)).toHaveLength(1)
  expect(wrapper.find(SelectRobotAvatarTableHeader)).toHaveLength(1)
})
