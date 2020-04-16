import * as React from 'react'
import AdvancedSearchCellComment from './AdvancedSearchCellComment'
import AdvancedSearchProp from '../../atoms/AdvancedSearchProp'
import {FormattedMessage} from 'react-intl'
import {shallow} from 'enzyme'

test('render', () => {
  const handleCheckboxChange = jest.fn()
  const handleValueChange = jest.fn()
  const wrapper = shallow(
    <AdvancedSearchCellComment
      checked={false}
      handleCheckboxChange={handleCheckboxChange}
      handleValueChange={handleValueChange}
      navigatable
      valid
    />
  )

  expect(wrapper.exists(AdvancedSearchProp)).toBe(true)
  expect(wrapper.exists(FormattedMessage)).toBe(true)
})
