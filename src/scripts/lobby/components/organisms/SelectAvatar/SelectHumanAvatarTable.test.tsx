import * as React from 'react'
import {SelectHumanAvatarTable} from './SelectHumanAvatarTable'
import {SelectHumanAvatarTableBodyContainer} from '../../../containers/SelectHumanAvatarTableBodyContainer'
import {SelectHumanAvatarTableHeader} from '../../molecules/SelectAvatar/SelectHumanAvatarTableHeader'
import {shallow} from 'enzyme'

test('render', () => {
  const wrapper = shallow(
    <SelectHumanAvatarTable />
  )

  expect(wrapper.find(SelectHumanAvatarTableBodyContainer)).toHaveLength(1)
  expect(wrapper.find(SelectHumanAvatarTableHeader)).toHaveLength(1)
})
