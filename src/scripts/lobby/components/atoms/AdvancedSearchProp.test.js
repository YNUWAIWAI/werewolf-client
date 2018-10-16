// @flow
import AdvancedSearchProp from './AdvancedSearchProp'
import React from 'react'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer('ja', getMessages('ja'))

test('<AdvancedSearchProp />', () => {
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(
    <AdvancedSearchProp
      checked
      handleClick={handleClick}
      name="villageName"
      validity
    />
  )

  expect(wrapper.children()).toHaveLength(2)
  expect(wrapper.find('input').exists()).toBe(true)
  expect(wrapper.find('label').exists()).toBe(true)
})
