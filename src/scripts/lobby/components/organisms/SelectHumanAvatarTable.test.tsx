import * as React from 'react'
import SelectHumanAvatarTable from './SelectHumanAvatarTable'
import SelectHumanAvatarTableBody from '../../containers/SelectHumanAvatarTableBodyContainer'
import SelectHumanAvatarTableHeader from '../molecules/SelectHumanAvatarTableHeader'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <SelectHumanAvatarTable />
  )

  expect(wrapper.find(SelectHumanAvatarTableBody)).toHaveLength(1)
  expect(wrapper.find(SelectHumanAvatarTableHeader)).toHaveLength(1)
})
