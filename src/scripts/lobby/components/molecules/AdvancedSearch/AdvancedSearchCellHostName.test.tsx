import * as React from 'react'
import {AdvancedSearchCellHostName} from './AdvancedSearchCellHostName'
import {AdvancedSearchProp} from '../../atoms/AdvancedSearchProp'
import {FormattedMessage} from 'react-intl'
import {shallow} from 'enzyme'

test('render', () => {
  const handleCheckboxChange = jest.fn()
  const handleValueChange = jest.fn()
  const wrapper = shallow(
    <AdvancedSearchCellHostName
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
