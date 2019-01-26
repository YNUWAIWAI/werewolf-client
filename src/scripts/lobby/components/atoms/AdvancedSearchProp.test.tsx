/* global lobby */
import * as React from 'react'
import AdvancedSearchProp from './AdvancedSearchProp'
import {getMessages} from '../../../../i18n/lobby'
import {initRenderer} from '../../../../../tools/intl-enzyme-test-helper'

const {mountWithIntl} = initRenderer(lobby.Language.ja, getMessages(lobby.Language.ja))

test('<AdvancedSearchProp />', () => {
  const handleClick = jest.fn()
  const wrapper = mountWithIntl(
    <AdvancedSearchProp
      checked
      handleClick={handleClick}
      name="villageName"
      valid
    />
  )

  expect(wrapper.find('input').exists()).toBe(true)
  expect(wrapper.find('label').exists()).toBe(true)
})
