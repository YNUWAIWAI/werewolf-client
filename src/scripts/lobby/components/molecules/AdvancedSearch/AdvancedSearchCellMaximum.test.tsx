import * as React from 'react'
import AdvancedSearchCellMaximum from './AdvancedSearchCellMaximum'
import AdvancedSearchProp from '../../atoms/AdvancedSearchProp'
import NumberSelect from '../../atoms/Select/NumberSelect'
import {shallow} from 'enzyme'

test('render', () => {
  const handleCheckboxChange = jest.fn()
  const handleValueChange = jest.fn()
  const wrapper = shallow(
    <AdvancedSearchCellMaximum
      checked={false}
      handleCheckboxChange={handleCheckboxChange}
      handleValueChange={handleValueChange}
      navigatable
      valid
    />
  )

  expect(wrapper.exists(AdvancedSearchProp)).toBe(true)
  expect(wrapper.exists(NumberSelect)).toBe(true)
})
