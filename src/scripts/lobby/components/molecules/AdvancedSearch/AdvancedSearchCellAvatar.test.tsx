import * as React from 'react'
import {AdvancedSearchCellAvatar} from './AdvancedSearchCellAvatar'
import {AdvancedSearchProp} from '../../atoms/AdvancedSearchProp'
import {AvatarSelect} from '../../atoms/Select/AvatarSelect'
import {shallow} from 'enzyme'

test('render', () => {
  const handleCheckboxChange = jest.fn()
  const handleValueChange = jest.fn()
  const wrapper = shallow(
    <AdvancedSearchCellAvatar
      checked={false}
      handleCheckboxChange={handleCheckboxChange}
      handleValueChange={handleValueChange}
      navigatable
      valid
    />
  )

  expect(wrapper.exists(AdvancedSearchProp)).toBe(true)
  expect(wrapper.exists(AvatarSelect)).toBe(true)
})
